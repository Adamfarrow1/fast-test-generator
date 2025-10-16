import { NextRequest, NextResponse } from 'next/server';
import { allGradeQuestions, pertQuestions } from '@/lib/allQuestions';
import { generateTestPDF } from '@/lib/pdf-generator';
import { MathDomain, QuestionChoice, FormattedQuestion } from '@/lib/types';

export async function POST(req: NextRequest) {
    try {
      console.log('API route: Parsing request body');
      const body = await req.json();
      const { studentName, grade, numQuestions, domains, pert } = body as {
        studentName: string;
        grade: number;
        numQuestions: number;
        domains: MathDomain[] | string[];
        pert?: boolean;
      };

      console.log('API route: Received request', { studentName, grade, numQuestions, domains });

      // Validate inputs
      if (!studentName || !numQuestions || !domains || domains.length === 0 || (!pert && !grade)) {
        console.log('API route: Missing required fields');
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

    // Choose question source based on PERT flag
    const isPert = !!pert;
    const source = isPert ? pertQuestions : allGradeQuestions;

    // Filter questions based on grade level and domains
    console.log('API route: Filtering questions...');
    console.log('Question source:', isPert ? 'PERT' : 'General', 'Total:', source.length);
    
    const effectiveGrade = isPert ? (grade ?? 10) : grade;
    const eligibleQuestions = source.filter(q => {
      const gradeMatch = q.gradeMin <= effectiveGrade && q.gradeMax >= effectiveGrade;
      const domainMatch = (domains as string[]).includes(q.domain);
      
      if (gradeMatch && !domainMatch) {
        console.log(`Question ${q.id} matches grade but not domain. Domain: ${q.domain}`);
      }
      
      return gradeMatch && domainMatch;
    });

    console.log('Eligible questions found:', eligibleQuestions.length);
    console.log('Questions by domain:', 
      eligibleQuestions.reduce((acc, q) => {
        acc[q.domain] = (acc[q.domain] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    );

    if (eligibleQuestions.length === 0) {
      return NextResponse.json(
        { error: 'No questions available for the selected grade and domains' },
        { status: 400 }
      );
    }

    if (eligibleQuestions.length < numQuestions) {
      return NextResponse.json(
        { 
          error: `Only ${eligibleQuestions.length} questions available for the selected grade and domains. Please select fewer questions or more domains.` 
        },
        { status: 400 }
      );
    }

    // Randomly select the exact requested number of questions
    const selectedQuestions = [...eligibleQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, numQuestions);

    console.log('API route: Generating PDF with questions:', selectedQuestions.length);

    // Convert string choices to proper QuestionChoice format
    const formattedQuestions: FormattedQuestion[] = selectedQuestions.map(q => ({
      ...q,
      choices: Array.isArray(q.choices) && typeof q.choices[0] === 'string' 
        ? (q.choices as string[]).map(choice => ({ type: 'text' as const, value: choice }))
        : q.choices as QuestionChoice[]
    }));

    // Generate PDF
  const pdfBytes = await generateTestPDF(formattedQuestions, studentName, domains as MathDomain[]);
    console.log('API route: PDF generated successfully');

    // Return the PDF as a downloadable file
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="math-test.pdf"'
      }
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Error generating test:', error);
    console.error('Error stack:', errorStack);
    return NextResponse.json(
      { 
        error: `Failed to generate test: ${errorMessage}`,
        details: errorStack
      },
      { status: 500 }
    );
  }
}
