export interface Question {
  id: string;
  gradeMin: number;
  gradeMax: number;
  domain: string;
  difficulty: number;
  questionText: string;
  choices: string[];
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
