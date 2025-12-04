import { NextRequest, NextResponse } from 'next/server';
import { allGradeQuestions, pertQuestions } from '@/lib/allQuestions';
import { generateTestPDF } from '@/lib/pdf-generator';
import { MathDomain, QuestionChoice, FormattedQuestion, Question } from '@/lib/types';

// Helper function to randomly sample from an array
function sample<T>(arr: T[], n: number): T[] {
  const copy = arr.slice();
  const out: T[] = [];
  while (out.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

// Helper function to select questions with optional challenge section
function selectQuestionsWithChallenge(
  allQuestions: Question[],
  targetGrade: number,
  numQuestions: number,
  domains: string[],
  isPert: boolean = false,
  challengeRate: number = 0.2 // 20% challenge questions by default
): { mainQuestions: Question[], challengeQuestions: Question[] } {
  // Filter by domains
  const domainFiltered = allQuestions.filter(q => domains.includes(q.domain));

  if (isPert) {
    // For PERT, no challenge questions - just regular selection
    const effectiveGrade = targetGrade ?? 10;
    const eligibleQuestions = domainFiltered.filter(q => 
      q.gradeMin <= effectiveGrade && q.gradeMax >= effectiveGrade
    );
    return {
      mainQuestions: sample(eligibleQuestions, Math.min(numQuestions, eligibleQuestions.length)),
      challengeQuestions: []
    };
  }

  // For FAST tests, add challenge questions from grade above
  const gradePool = domainFiltered.filter(q => 
    q.gradeMin <= targetGrade && q.gradeMax >= targetGrade
  );

  const challengeGrade = targetGrade + 1;
  
  // First try to get difficulty 2 questions from the upper grade
  let challengePool = domainFiltered.filter(q => 
    q.gradeMin <= challengeGrade && q.gradeMax >= challengeGrade && 
    // Ensure challenge questions are not already in the main grade pool
    !(q.gradeMin <= targetGrade && q.gradeMax >= targetGrade) &&
    // Filter for difficulty level 2
    q.difficulty === 3
  );

  // Calculate how many challenge questions we want
  const desiredChallengeQuestions = Math.min(
    Math.floor(numQuestions * challengeRate),
    Math.floor(numQuestions / 4) // Cap at 25% of total questions
  );

  // If not enough difficulty 2 questions, fall back to any difficulty from upper grade
  if (challengePool.length < desiredChallengeQuestions) {
    challengePool = domainFiltered.filter(q => 
      q.gradeMin <= challengeGrade && q.gradeMax >= challengeGrade && 
      // Ensure challenge questions are not already in the main grade pool
      !(q.gradeMin <= targetGrade && q.gradeMax >= targetGrade)
    );
  }

  const numChallengeQuestions = Math.min(desiredChallengeQuestions, challengePool.length);
  const numMainQuestions = numQuestions - numChallengeQuestions;

  // Select questions
  const selectedMainQuestions = sample(gradePool, Math.min(numMainQuestions, gradePool.length));
  const selectedChallengeQuestions = sample(challengePool, numChallengeQuestions);

  // If we don't have enough main questions, fill from broader pool
  if (selectedMainQuestions.length < numMainQuestions) {
    const usedIds = new Set([...selectedMainQuestions, ...selectedChallengeQuestions].map(q => q.id));
    const fallbackCandidates = domainFiltered.filter(q => !usedIds.has(q.id));
    const additionalMain = sample(fallbackCandidates, numMainQuestions - selectedMainQuestions.length);
    selectedMainQuestions.push(...additionalMain);
  }

  return {
    mainQuestions: selectedMainQuestions,
    challengeQuestions: selectedChallengeQuestions
  };
}

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

    console.log('API route: Selecting questions...');
    console.log('Question source:', isPert ? 'PERT' : 'FAST', 'Total available:', source.length);
    console.log('Target grade:', grade, 'Domains:', domains);

    // Use the new helper function to select questions with optional challenge section
    const { mainQuestions, challengeQuestions } = selectQuestionsWithChallenge(
      source,
      grade,
      numQuestions,
      domains as string[],
      isPert
    );

    const totalSelected = mainQuestions.length + challengeQuestions.length;
    console.log(`Selected ${mainQuestions.length} main questions and ${challengeQuestions.length} challenge questions (total: ${totalSelected})`);

    if (totalSelected === 0) {
      return NextResponse.json(
        { error: 'No questions available for the selected grade and domains' },
        { status: 400 }
      );
    }

    if (totalSelected < numQuestions) {
      return NextResponse.json(
        { 
          error: `Only ${totalSelected} questions available for the selected grade and domains. Please select fewer questions or more domains.` 
        },
        { status: 400 }
      );
    }

    // Combine main and challenge questions for PDF generation
    const selectedQuestions = [...mainQuestions, ...challengeQuestions];

    console.log('API route: Generating PDF with questions:', selectedQuestions.length);

    // Convert string choices to proper QuestionChoice format
    const formatQuestions = (questions: Question[]): FormattedQuestion[] => 
      questions.map(q => ({
        ...q,
        choices: Array.isArray(q.choices) && typeof q.choices[0] === 'string' 
          ? (q.choices as string[]).map(choice => ({ type: 'text' as const, value: choice }))
          : q.choices as QuestionChoice[]
      }));

    const formattedMainQuestions = formatQuestions(mainQuestions);
    const formattedChallengeQuestions = formatQuestions(challengeQuestions);

    // Generate PDF
    const pdfBytes = await generateTestPDF(
      formattedMainQuestions, 
      studentName, 
      domains as MathDomain[], 
      formattedChallengeQuestions
    );
    console.log('API route: PDF generated successfully');

    // Create URL-friendly filename from student name
    const sanitizedName = studentName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_') // Replace non-alphanumeric with underscore
      .replace(/^_+|_+$/g, '');     // Remove leading/trailing underscores
    
    const filename = isPert 
      ? `${sanitizedName}_pert_practice_test.pdf`
      : `${sanitizedName}_math_test.pdf`;

    // Return the PDF as a downloadable file
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`
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
