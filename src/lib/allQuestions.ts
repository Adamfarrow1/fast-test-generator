import { Question } from './types';
import { grade1Questions } from './questions/grade1';
import { grade2Questions } from './questions/grade2';
import { grade3Questions } from './questions/grade3';
import { grade4Questions } from './questions/grade4';
import { grade5Questions } from './questions/grade5';
import { grade6Questions } from './questions/grade6';
import { grade7Questions } from './questions/grade7';
import { grade8Questions } from './questions/grade8';
import { pertQuestions } from './pert-questions';

// Combine all grade-level questions
export const allGradeQuestions: Question[] = [
  ...grade1Questions,
  ...grade2Questions,
  ...grade3Questions,
  ...grade4Questions,
  ...grade5Questions,
  ...grade6Questions,
  ...grade7Questions,
  ...grade8Questions
];

// Export PERT questions separately
export { pertQuestions };

// Helper function to get questions for a specific grade
export function getQuestionsForGrade(grade: number): Question[] {
  return allGradeQuestions.filter(q => q.gradeMin <= grade && q.gradeMax >= grade);
}

// Helper function to get available domains for a grade
export function getAvailableDomainsForGrade(grade: number): string[] {
  return [
    ...new Set(
      allGradeQuestions
        .filter(q => q.gradeMin <= grade && q.gradeMax >= grade)
        .map(q => q.domain)
    )
  ].sort();
}

// Helper function to get available domains for PERT
export function getAvailableDomainsForPERT(): string[] {
  return [...new Set(pertQuestions.map(q => q.domain))].sort();
}