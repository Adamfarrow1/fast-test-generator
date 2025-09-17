export type QuestionChoice =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string; alt?: string };

export interface Question {
  id: string;
  gradeMin: number;
  gradeMax: number;
  domain: string;
  difficulty: number;
  questionText: string;
  choices: QuestionChoice[] | string[];
  correctAnswer: string;
  solution?: string;
}

// Type for questions that have been formatted for PDF generation
export interface FormattedQuestion {
  id: string;
  gradeMin: number;
  gradeMax: number;
  domain: string;
  difficulty: number;
  questionText: string;
  choices: QuestionChoice[];
  correctAnswer: string;
  solution?: string;
}

export const MATH_DOMAINS = [
  'Number Sense',
  'Operations & Algebraic Thinking',
  'Place Value',
  'Fractions',
  'Decimals & Percents',
  'Algebra',
  'Ratios & Proportions',
  'Integers & Rational Numbers',
  'Exponents & Roots',
  'Geometry',
  'Geometry Transformations',
  'Measurement',
  'Statistics',
  'Probability',
  'Functions',
  'Data & Graphing',
  'Trigonometry'
] as const;

export type MathDomain = typeof MATH_DOMAINS[number];
