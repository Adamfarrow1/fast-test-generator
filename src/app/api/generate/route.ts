import { NextRequest, NextResponse } from 'next/server';
import { mockQuestions } from '@/lib/questions';
import { generateTestPDF } from '@/lib/pdf-generator';
import { MathDomain } from '@/lib/types';

export async function POST(req: NextRequest) {
    try {
      console.log('API route: Parsing request body');
      const body = await req.json();
      const { grade, numQuestions, domains } = body as {
        grade: number;
        numQuestions: number;
        domains: MathDomain[];
      };

      console.log('API route: Received request', { grade, numQuestions, domains });

      // Validate inputs
      if (!grade || !numQuestions || !domains || domains.length === 0) {
        console.log('API route: Missing required fields');
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }    // Filter questions based on grade level and domains
    console.log('API route: Filtering questions...');
    console.log('Total questions in database:', mockQuestions.length);
    
    const eligibleQuestions = mockQuestions.filter(q => {
      const gradeMatch = q.gradeMin <= grade && q.gradeMax >= grade;
      const domainMatch = domains.includes(q.domain as MathDomain);
      
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

    // Generate PDF
    const pdfBytes = await generateTestPDF(selectedQuestions);
    console.log('API route: PDF generated successfully');

    // Return the PDF as a downloadable file
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="math-test.pdf"'
      }
    });
  } catch (error: any) {
    console.error('Error generating test:', error);
    console.error('Error stack:', error?.stack);
    return NextResponse.json(
      { 
        error: `Failed to generate test: ${error?.message || 'Unknown error'}`,
        details: error?.stack
      },
      { status: 500 }
    );
  }
}
