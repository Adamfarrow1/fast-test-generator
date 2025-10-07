import { Question } from './types';

// PERT Practice Test Questions grouped by topic based on Valencia College "Course Modules: Math – PERT Prep" outline
export const pertQuestions: Question[] = [
  // Common Knowledge domains
  {
    id: 'ck-geometry-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Geometry',
    difficulty: 3,
    questionText: 'What is the area of a triangle with base 8 cm and height 6 cm?',
    choices: ['24 cm²', '48 cm²', '14 cm²', '21 cm²'],
    correctAnswer: '24 cm²',
    solution: 'Area of triangle = (1/2) x base x height = (1/2) x 8 x 6 = 24 cm²'
  },
  {
    id: 'ck-geometry-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Geometry',
    difficulty: 3,
    questionText: 'Find the circumference of a circle with radius 7 cm.',
    choices: ['14π cm', '49π cm', '14 cm', '44 cm'],
    correctAnswer: '14π cm',
    solution: 'Circumference = 2πr = 2π × 7 = 14π cm'
  },
  {
    id: 'ck-geometry-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Geometry',
    difficulty: 3,
    questionText: 'Find the volume of a rectangular prism with length 5 cm, width 3 cm, and height 2 cm.',
    choices: ['30 cm³', '10 cm³', '15 cm³', '25 cm³'],
    correctAnswer: '30 cm³',
    solution: 'Volume of rectangular prism = length × width × height = 5 × 3 × 2 = 30 cm³'
  },
  {
    id: 'ck-probability-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Probability (Simple & Dependent)',
    difficulty: 3,
    questionText: 'A bag contains 3 red marbles, 4 blue marbles, and 5 green marbles. If you draw one marble at random, what is the probability of drawing a blue marble?',
    choices: ['1/4', '4/12', '1/3', '3/4'],
    correctAnswer: '1/3',
    solution: 'Total marbles = 3 + 4 + 5 = 12. Probability = Number of blue marbles / Total marbles = 4/12 = 1/3'
  },
  {
    id: 'ck-probability-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Probability (Simple & Dependent)',
    difficulty: 3,
    questionText: 'If you roll two fair dice, what is the probability of getting a sum of 7?',
    choices: ['1/6', '1/12', '5/36', '6/36'],
    correctAnswer: '6/36',
    solution: 'Total possible outcomes when rolling two dice = 6 × 6 = 36. Favorable outcomes for sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Probability = 6/36 = 1/6'
  },
  {
    id: 'ck-probability-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Probability (Simple & Dependent)',
    difficulty: 3,
    questionText: 'A card is drawn from a standard deck of 52 cards. What is the probability of drawing a face card (Jack, Queen, or King)?',
    choices: ['3/13', '12/52', '1/4', '3/52'],
    correctAnswer: '12/52',
    solution: 'A standard deck has 12 face cards (3 face cards in each of 4 suits). Total cards = 52. Probability = 12/52 = 3/13 = 0.231'
  },
  {
    id: 'ck-statistics-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Statistics (mean/median/mode; reading bar, pie, line graphs)',
    difficulty: 3,
    questionText: 'Find the mean, median, and mode of the following data set: 3, 7, 5, 9, 3, 8, 5, 3, 7',
    choices: ['Mean: 5.56, Median: 5, Mode: 3', 'Mean: 5, Median: 5.56, Mode: 7', 'Mean: 5, Median: 5, Mode: 3', 'Mean: 5.56, Median: 7, Mode: 3'],
    correctAnswer: 'Mean: 5.56, Median: 5, Mode: 3',
    solution: 'Mean = (3+7+5+9+3+8+5+3+7)/9 = 50/9 = 5.56; Median (ordered set: 3,3,3,5,5,7,7,8,9) = 5; Mode (most frequent) = 3'
  },
  {
    id: 'ck-statistics-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Statistics (mean/median/mode; reading bar, pie, line graphs)',
    difficulty: 3,
    questionText: 'In a pie chart representing the favorite fruits of 400 students, the slice for apples takes up 45° of the circle. How many students chose apples as their favorite fruit?',
    choices: ['50 students', '45 students', '90 students', '100 students'],
    correctAnswer: '50 students',
    solution: 'A full circle is 360°. The proportion of students who chose apples = 45°/360° = 1/8. Number of students = 1/8 × 400 = 50 students'
  },
  {
    id: 'ck-statistics-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Statistics (mean/median/mode; reading bar, pie, line graphs)',
    difficulty: 3,
    questionText: 'The standard deviation of a data set measures what?',
    choices: ['The average value of the data', 'How much the data varies from the mean', 'The middle value of the data when ordered', 'How many data points are in the set'],
    correctAnswer: 'How much the data varies from the mean',
    solution: 'Standard deviation measures the average distance between data points and the mean, indicating how spread out or dispersed the data is from the mean value'
  },
  
  // Developmental Math I (MAT0018) domains
  {
    id: 'mat0018-signed-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Signed Numbers',
    difficulty: 3,
    questionText: 'Evaluate: (-5) x (-3) + (-6) ÷ 2',
    choices: ['12', '15', '9', '-15'],
    correctAnswer: '12',
    solution: '(-5) x (-3) + (-6) ÷ 2 = 15 + (-3) = 12'
  },
  {
    id: 'mat0018-signed-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Signed Numbers',
    difficulty: 3,
    questionText: 'Simplify: -8 - (-12) + (-3) × 4',
    choices: ['-8', '4', '-16', '16'],
    correctAnswer: '-8',
    solution: '-8 - (-12) + (-3) × 4 = -8 + 12 + (-12) = 4 + (-12) = -8'
  },
  {
    id: 'mat0018-signed-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Signed Numbers',
    difficulty: 3,
    questionText: 'Which of the following expressions has the largest value?',
    choices: ['-5 - 3', '-5 × (-3)', '-5 ÷ (-3)', '-5 + (-3)'],
    correctAnswer: '-5 × (-3)',
    solution: '-5 - 3 = -8; -5 × (-3) = 15; -5 ÷ (-3) = 1.67; -5 + (-3) = -8. The largest value is 15.'
  },
  {
    id: 'mat0018-decimals-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Decimals',
    difficulty: 3,
    questionText: 'Calculate: 3.75 + 2.8 - 1.25',
    choices: ['5.3', '5.55', '4.3', '6.05'],
    correctAnswer: '5.3',
    solution: '3.75 + 2.8 - 1.25 = 6.55 - 1.25 = 5.3'
  },
  {
    id: 'mat0018-decimals-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Decimals',
    difficulty: 3,
    questionText: 'Multiply: 1.25 × 0.4',
    choices: ['0.5', '0.05', '5', '0.5'],
    correctAnswer: '0.5',
    solution: '1.25 × 0.4 = 0.5'
  },
  {
    id: 'mat0018-decimals-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Decimals',
    difficulty: 3,
    questionText: 'Convert 3/8 to a decimal.',
    choices: ['0.375', '0.38', '0.35', '0.4'],
    correctAnswer: '0.375',
    solution: '3/8 = 3 ÷ 8 = 0.375'
  },
  {
    id: 'mat0018-fractions-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Fractions',
    difficulty: 3,
    questionText: 'Simplify: 2/3 x 9/4 - 1/2',
    choices: ['1', '3/2', '1/6', '3/4'],
    correctAnswer: '1',
    solution: '2/3 x 9/4 - 1/2 = 6/4 - 2/4 = 4/4 = 1'
  },
  {
    id: 'mat0018-fractions-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Fractions',
    difficulty: 3,
    questionText: 'Find the sum: 3/5 + 7/10',
    choices: ['10/15', '13/10', '1', '17/10'],
    correctAnswer: '13/10',
    solution: '3/5 + 7/10 = 6/10 + 7/10 = 13/10'
  },
  {
    id: 'mat0018-fractions-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Fractions',
    difficulty: 3,
    questionText: 'Convert the mixed number 2 3/4 to an improper fraction.',
    choices: ['8/4', '11/4', '5/4', '6/4'],
    correctAnswer: '11/4',
    solution: '2 3/4 = (2 × 4 + 3) / 4 = 11/4'
  },
  {
    id: 'mat0018-order-ops-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Order of Operations',
    difficulty: 3,
    questionText: 'Evaluate: 4 + 3 x 2² ÷ (5 - 1)',
    choices: ['7', '10', '19', '22'],
    correctAnswer: '7',
    solution: '4 + 3 x 2² ÷ (5 - 1) = 4 + 3 x 4 ÷ 4 = 4 + 3 x 1 = 4 + 3 = 7'
  },
  {
    id: 'mat0018-order-ops-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Order of Operations',
    difficulty: 3,
    questionText: 'Evaluate: 24 ÷ (3 + 5) - 2³',
    choices: ['3', '-5', '2', '0'],
    correctAnswer: '-5',
    solution: '24 ÷ (3 + 5) - 2³ = 24 ÷ 8 - 8 = 3 - 8 = -5'
  },
  {
    id: 'mat0018-order-ops-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Order of Operations',
    difficulty: 3,
    questionText: 'Evaluate: 16 - 2 × (3² - 5) + 1',
    choices: ['5', '9', '13', '1'],
    correctAnswer: '9',
    solution: '16 - 2 × (3² - 5) + 1 = 16 - 2 × (9 - 5) + 1 = 16 - 2 × 4 + 1 = 16 - 8 + 1 = 9'
  },
  {
    id: 'mat0018-poly-1-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Polynomials Lvl. 1 (combining like terms; add/subtract)',
    difficulty: 3,
    questionText: 'Simplify by combining like terms: (3x² + 5x - 2) + (2x² - 4x + 6)',
    choices: ['5x² + x + 4', '5x² + 9x + 4', '5x² + x + 8', '5x² - x + 4'],
    correctAnswer: '5x² + x + 4',
    solution: '(3x² + 5x - 2) + (2x² - 4x + 6) = 3x² + 2x² + 5x - 4x + (-2) + 6 = 5x² + x + 4'
  },
  {
    id: 'mat0018-poly-1-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Polynomials Lvl. 1 (combining like terms; add/subtract)',
    difficulty: 3,
    questionText: 'Simplify: 7x - 4y + 2x - 5y + 3',
    choices: ['9x - 9y + 3', '7x - 9y + 3', '9x - y + 3', '5x - 9y + 3'],
    correctAnswer: '9x - 9y + 3',
    solution: '7x - 4y + 2x - 5y + 3 = (7x + 2x) + (-4y - 5y) + 3 = 9x - 9y + 3'
  },
  {
    id: 'mat0018-poly-1-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Polynomials Lvl. 1 (combining like terms; add/subtract)',
    difficulty: 3,
    questionText: 'Subtract (3x² - 2x + 4) from (5x² + x - 7)',
    choices: ['2x² + 3x - 11', '8x² - x - 3', '2x² - 3x - 3', '2x² + 3x - 3'],
    correctAnswer: '2x² + 3x - 11',
    solution: '(5x² + x - 7) - (3x² - 2x + 4) = 5x² + x - 7 - 3x² + 2x - 4 = (5x² - 3x²) + (x + 2x) + (-7 - 4) = 2x² + 3x - 11'
  },
  {
    id: 'mat0018-eq-1-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Solving Equations Lvl. 1 (one-, two-, multi-step linear)',
    difficulty: 3,
    questionText: 'Solve for x: 3(x - 2) = 4x - 9',
    choices: ['x = 3', 'x = -3', 'x = 0', 'x = 1'],
    correctAnswer: 'x = 3',
    solution: '3(x - 2) = 4x - 9 -> 3x - 6 = 4x - 9 -> -x = -3 -> x = 3'
  },
  {
    id: 'mat0018-eq-1-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Solving Equations Lvl. 1 (one-, two-, multi-step linear)',
    difficulty: 3,
    questionText: 'Solve for y: 5y - 8 = 3y + 4',
    choices: ['y = 6', 'y = -6', 'y = 2', 'y = 12'],
    correctAnswer: 'y = 6',
    solution: '5y - 8 = 3y + 4 -> 5y - 3y = 4 + 8 -> 2y = 12 -> y = 6'
  },
  {
    id: 'mat0018-eq-1-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Solving Equations Lvl. 1 (one-, two-, multi-step linear)',
    difficulty: 3,
    questionText: 'Solve for z: 2(z + 3) = 5z - 4(z - 1)',
    choices: ['z = -2', 'z = 7/3', 'z = 10/3', 'z = 4'],
    correctAnswer: 'z = -2',
    solution: '2(z + 3) = 5z - 4(z - 1) -> 2z + 6 = 5z - 4z + 4 -> 2z + 6 = z + 4 -> z = -2'
  },
  
  // Developmental Math II (MAT0028) domains
  {
    id: 'mat0028-poly-2-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Polynomials Lvl. 2 (multiply; special products; divide by monomials)',
    difficulty: 3,
    questionText: 'Multiply: (2x + 3)(x - 4)',
    choices: ['2x² - 8x + 3x - 12', '2x² - 5x - 12', '2x² - 5x + 12', '2x² + 11x - 12'],
    correctAnswer: '2x² - 5x - 12',
    solution: '(2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12'
  },
  {
    id: 'mat0028-poly-2-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Polynomials Lvl. 2 (multiply; special products; divide by monomials)',
    difficulty: 3,
    questionText: 'Find the product: (x + 5)²',
    choices: ['x² + 10x + 25', 'x² + 25', 'x² + 5x + 25', '2x + 10'],
    correctAnswer: 'x² + 10x + 25',
    solution: '(x + 5)² = (x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25'
  },
  {
    id: 'mat0028-poly-2-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Polynomials Lvl. 2 (multiply; special products; divide by monomials)',
    difficulty: 3,
    questionText: 'Divide: (6x³ - 12x² + 3x) ÷ 3x',
    choices: ['2x² - 4x + 1', '2x² - 4x + 3', '3x² - 6x + 1', '3x² - 6x'],
    correctAnswer: '2x² - 4x + 1',
    solution: '(6x³ - 12x² + 3x) ÷ 3x = 6x³/3x - 12x²/3x + 3x/3x = 2x² - 4x + 1'
  },
  {
    id: 'mat0028-exponents-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Exponent Rules (properties; zero/negative exponents) & Scientific Notation',
    difficulty: 3,
  questionText: 'Simplify: (3x⁴y⁻²)² × (2x⁻³y)',
  choices: ['6x⁵y⁻³', '18x⁵y⁻³', '18x⁵y', '6x⁹y⁻³'],
  correctAnswer: '18x⁵y⁻³',
  solution: '(3x⁴y⁻²)² × (2x⁻³y) = 9x⁸y⁻⁴ × 2x⁻³y = 18x⁵y⁻³'
  },
  {
    id: 'mat0028-exponents-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Exponent Rules (properties; zero/negative exponents) & Scientific Notation',
    difficulty: 3,
  questionText: 'Express 0.0042 in scientific notation.',
  choices: ['4.2 × 10⁻³', '4.2 × 10³', '0.42 × 10⁻²', '42 × 10⁻⁴'],
  correctAnswer: '4.2 × 10⁻³',
  solution: '0.0042 = 4.2 × 10⁻³ (move decimal point 3 places to the right)'
  },
  {
    id: 'mat0028-exponents-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Exponent Rules (properties; zero/negative exponents) & Scientific Notation',
    difficulty: 3,
  questionText: 'Simplify: (a⁴b²)/(a⁻³b⁵)',
  choices: ['a⁷b⁻³', 'ab⁻³', 'a⁷b⁻⁷', 'a⁷b³'],
  correctAnswer: 'a⁷b⁻³',
  solution: '(a⁴b²)/(a⁻³b⁵) = a⁴⁻⁻³b²⁻⁵ = a⁷b⁻³'
  },
  {
    id: 'mat0028-factoring-1-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Factoring Lvl. 1 (GCF; grouping; trinomials a=1 and a>1; perfect squares; difference of squares)',
    difficulty: 3,
    questionText: 'Factor completely: 3x² - 27',
    choices: ['3(x - 3)(x + 3)', '3(x - 9)(x + 3)', '3(x - 3)(x - 9)', '3(x - 3)²'],
    correctAnswer: '3(x - 3)(x + 3)',
    solution: '3x² - 27 = 3(x² - 9) = 3(x - 3)(x + 3)'
  },
  {
    id: 'mat0028-factoring-1-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Factoring Lvl. 1 (GCF; grouping; trinomials a=1 and a>1; perfect squares; difference of squares)',
    difficulty: 3,
    questionText: 'Factor completely: x² + 6x + 9',
    choices: ['(x + 3)(x + 3)', '(x - 3)(x - 3)', '(x + 3)(x - 3)', 'Cannot be factored'],
    correctAnswer: '(x + 3)(x + 3)',
    solution: 'x² + 6x + 9 = x² + 2(3)(x) + 3² = (x + 3)² = (x + 3)(x + 3)'
  },
  {
    id: 'mat0028-factoring-1-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Factoring Lvl. 1 (GCF; grouping; trinomials a=1 and a>1; perfect squares; difference of squares)',
    difficulty: 3,
    questionText: 'Factor: 2x² + 7x + 3',
    choices: ['(2x + 1)(x + 3)', '(2x + 3)(x + 1)', '(x + 1)(2x + 3)', '(x - 1)(2x - 3)'],
    correctAnswer: '(2x + 1)(x + 3)',
    solution: '2x² + 7x + 3 = 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)'
  },
  {
    id: 'mat0028-eq-2-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Solving Equations Lvl. 2 (inequalities; literal equations; quadratics)',
    difficulty: 3,
    questionText: 'Solve for x: x² - 5x + 6 = 0',
    choices: ['x = 2 or x = 3', 'x = -2 or x = -3', 'x = -2 or x = 3', 'x = 2 or x = -3'],
    correctAnswer: 'x = 2 or x = 3',
    solution: 'x² - 5x + 6 = 0 -> (x - 2)(x - 3) = 0 -> x = 2 or x = 3'
  },
  {
    id: 'mat0028-eq-2-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Solving Equations Lvl. 2 (inequalities; literal equations; quadratics)',
    difficulty: 3,
    questionText: 'Solve the inequality: 3x - 7 > 5',
    choices: ['x > 4', 'x < 4', 'x > 12', 'x > 1/3'],
    correctAnswer: 'x > 4',
    solution: '3x - 7 > 5 -> 3x > 12 -> x > 4'
  },
  {
    id: 'mat0028-eq-2-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Solving Equations Lvl. 2 (inequalities; literal equations; quadratics)',
    difficulty: 3,
    questionText: 'Solve for y in terms of x and z: 3x + 2y - z = 12',
    choices: ['y = (12 + z - 3x)/2', 'y = (12 - z - 3x)/2', 'y = (12 - z + 3x)/2', 'y = (z - 12 - 3x)/2'],
    correctAnswer: 'y = (12 + z - 3x)/2',
    solution: '3x + 2y - z = 12 -> 2y = 12 - 3x + z -> y = (12 + z - 3x)/2'
  },
  {
    id: 'mat0028-radicals-1-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Radicals Lvl. 1 (simplify roots; combine; multiply; rationalize denominator)',
    difficulty: 3,
    questionText: 'Simplify: 3 * √(18) - 2 * √(8) + √(50)',
    choices: ['7√2', '5√2', '9√2', '2√2'],
    correctAnswer: '7√2',
    solution: '3 * √(18) - 2 * √(8) + √(50) = 3 * √(9 * 2) - 2 * √(4 * 2) + √(25 * 2) = 3 * 3 * √(2) - 2 * 2 * √(2) + 5 * √(2) = 9 * √(2) - 4 * √(2) + 5 * √(2) = 10 * √(2) - 3 * √(2) = 7 * √(2)'
  },
  {
    id: 'mat0028-radicals-1-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Radicals Lvl. 1 (simplify roots; combine; multiply; rationalize denominator)',
    difficulty: 3,
    questionText: 'Multiply and simplify: √(12) × √(3)',
    choices: ['6', '6√2', '36', '3√3'],
    correctAnswer: '6',
    solution: '√(12) × √(3) = √(12 × 3) = √(36) = 6'
  },
  {
    id: 'mat0028-radicals-1-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Radicals Lvl. 1 (simplify roots; combine; multiply; rationalize denominator)',
    difficulty: 3,
    questionText: 'Rationalize the denominator: 4/(3√(2))',
    choices: ['4√(2)/6', '4√(2)/3', '2√(2)/3', '4/(3√(2))'],
    correctAnswer: '4√(2)/6',
    solution: '4/(3√(2)) = 4/(3√(2)) × √(2)/√(2) = 4√(2)/(3 × 2) = 4√(2)/6'
  },
  {
    id: 'mat0028-graphing-1-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Graphing Lvl. 1 (quadrants, ordered pairs, slope, intercepts)',
    difficulty: 3,
    questionText: 'Find the slope and y-intercept of the line 3x - 2y = 6',
    choices: ['Slope = 3/2, y-intercept = -3', 'Slope = -3/2, y-intercept = 3', 'Slope = 3/2, y-intercept = 3', 'Slope = -3/2, y-intercept = -3'],
    correctAnswer: 'Slope = 3/2, y-intercept = -3',
    solution: 'Rearrange to slope-intercept form y = mx + b: -2y = -3x + 6 -> y = (3/2)x - 3 -> Slope = 3/2, y-intercept = -3'
  },
  {
    id: 'mat0028-graphing-1-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Graphing Lvl. 1 (quadrants, ordered pairs, slope, intercepts)',
    difficulty: 3,
    questionText: 'Find the slope of the line passing through the points (2, 5) and (4, 9).',
    choices: ['2', '4', '-2', '1/2'],
    correctAnswer: '2',
    solution: 'Slope = (y₂ - y₁)/(x₂ - x₁) = (9 - 5)/(4 - 2) = 4/2 = 2'
  },
  {
    id: 'mat0028-graphing-1-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Graphing Lvl. 1 (quadrants, ordered pairs, slope, intercepts)',
    difficulty: 3,
    questionText: 'In which quadrant is the point (-3, 4) located?',
    choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
    correctAnswer: 'Quadrant II',
    solution: 'Point (-3, 4) has a negative x-coordinate and a positive y-coordinate, which places it in Quadrant II.'
  },
  
  // Intermediate Algebra (MAT1033) domains
  {
    id: 'mat1033-graphing-2-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Graphing Lvl. 2 (analyzing function graphs; linear inequalities in two variables; graphing quadratics)',
    difficulty: 3,
    questionText: 'For the quadratic function f(x) = x² - 6x + 8, find the vertex, axis of symmetry, and determine whether it opens up or down.',
    choices: ['Vertex (3, -1), axis x = 3, opens up', 'Vertex (3, -1), axis x = 3, opens down', 'Vertex (3, 1), axis x = 3, opens up', 'Vertex (-3, 1), axis x = -3, opens up'],
    correctAnswer: 'Vertex (3, -1), axis x = 3, opens up',
    solution: 'For f(x) = ax² + bx + c, x-coordinate of vertex = -b/(2a) = -(-6)/(2x1) = 3. Vertex y-value = f(3) = 9 - 18 + 8 = -1. Axis of symmetry is x = 3. Since a > 0, the parabola opens up.'
  },
  {
    id: 'mat1033-graphing-2-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Graphing Lvl. 2 (analyzing function graphs; linear inequalities in two variables; graphing quadratics)',
    difficulty: 3,
    questionText: 'Which of the following is the graph of y > 2x + 3?',
    choices: ['A region above the line y = 2x + 3', 'A region below the line y = 2x + 3', 'A region to the right of the line y = 2x + 3', 'The line y = 2x + 3'],
    correctAnswer: 'A region above the line y = 2x + 3',
    solution: 'The inequality y > 2x + 3 represents all points where the y-coordinate is greater than 2x + 3, which is the region above the line y = 2x + 3'
  },
  {
    id: 'mat1033-graphing-2-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Graphing Lvl. 2 (analyzing function graphs; linear inequalities in two variables; graphing quadratics)',
    difficulty: 3,
    questionText: 'If f(x) = x² - 4, what are the x-intercepts of the graph?',
    choices: ['(-2, 0) and (2, 0)', '(0, -4)', '(-2, 0), (0, -4), and (2, 0)', 'No x-intercepts'],
    correctAnswer: '(-2, 0) and (2, 0)',
    solution: 'To find x-intercepts, set f(x) = 0: x² - 4 = 0, x² = 4, x = ±2. The x-intercepts are at (-2, 0) and (2, 0).'
  },
  {
    id: 'mat1033-poly-3-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Polynomials Lvl. 3 (long/synthetic division; rational expressions; complex fractions)',
    difficulty: 3,
    questionText: 'Perform the division: (2x³ - 5x² + 3x - 6) ÷ (x - 2)',
    choices: ['2x² - x + 1 with remainder -4', '2x² - x + 1 with remainder 4', '2x² + x + 1 with remainder 4', '2x² - x - 1 with remainder -4'],
    correctAnswer: '2x² - x + 1 with remainder -4',
    solution: 'Using synthetic division with x = 2, we get quotient 2x² - x + 1 and remainder -4'
  },
  {
    id: 'mat1033-poly-3-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Polynomials Lvl. 3 (long/synthetic division; rational expressions; complex fractions)',
    difficulty: 3,
    questionText: 'Simplify the rational expression: (x² - 9)/(x² - 6x + 9)',
    choices: ['(x + 3)/(x - 3)', '(x - 3)/(x - 3)', '(x + 3)/(x + 3)', '(x - 3)/(x + 3)'],
    correctAnswer: '(x + 3)/(x - 3)',
    solution: '(x² - 9)/(x² - 6x + 9) = ((x - 3)(x + 3))/((x - 3)(x - 3)) = (x + 3)/(x - 3)'
  },
  {
    id: 'mat1033-poly-3-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Polynomials Lvl. 3 (long/synthetic division; rational expressions; complex fractions)',
    difficulty: 3,
    questionText: 'Simplify the complex fraction: (1/x + 1/y)/(1/x - 1/y)',
    choices: ['(x + y)/(x - y)', '(y + x)/(y - x)', 'xy/(x - y)', 'xy/(y - x)'],
    correctAnswer: '(x + y)/(x - y)',
    solution: '(1/x + 1/y)/(1/x - 1/y) = ((y + x)/xy)/((y - x)/xy) = ((y + x)/xy) × (xy/(y - x)) = (x + y)/(x - y)'
  },
  {
    id: 'mat1033-factoring-2-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Factoring Lvl. 2 (sum/diff of cubes; completing the square; grouping 4 terms)',
    difficulty: 3,
    questionText: 'Factor completely: x³ + 27',
    choices: ['(x + 3)(x² - 3x + 9)', '(x - 3)(x² + 3x + 9)', '(x + 3)(x² + 3x + 9)', '(x - 3)(x² - 3x + 9)'],
    correctAnswer: '(x + 3)(x² - 3x + 9)',
    solution: 'This is a sum of cubes: x³ + 3³ = x³ + 27. Using the formula a³ + b³ = (a + b)(a² - ab + b²), we get (x + 3)(x² - 3x + 9)'
  },
  {
    id: 'mat1033-factoring-2-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Factoring Lvl. 2 (sum/diff of cubes; completing the square; grouping 4 terms)',
    difficulty: 3,
    questionText: 'Factor by grouping: x³ - x² + 2x - 2',
    choices: ['(x - 1)(x² + 2)', '(x + 1)(x² - 2)', '(x - 1)(x² - 2)', '(x + 1)(x² + 2)'],
    correctAnswer: '(x - 1)(x² + 2)',
    solution: 'Group terms: x³ - x² + 2x - 2 = (x³ - x²) + (2x - 2) = x²(x - 1) + 2(x - 1) = (x - 1)(x² + 2)'
  },
  {
    id: 'mat1033-factoring-2-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Factoring Lvl. 2 (sum/diff of cubes; completing the square; grouping 4 terms)',
    difficulty: 3,
    questionText: 'Complete the square for x² - 6x + 4',
    choices: ['(x - 3)² - 5', '(x - 3)² + 5', '(x + 3)² - 5', '(x + 3)² + 5'],
    correctAnswer: '(x - 3)² - 5',
    solution: 'x² - 6x + 4 = x² - 6x + 9 - 9 + 4 = (x - 3)² - 5'
  },
  {
    id: 'mat1033-eq-3-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Solving Equations Lvl. 3 (linear systems: graphing, substitution, elimination)',
    difficulty: 3,
    questionText: 'Solve the system of equations using elimination: 2x + 3y = 8 and 4x - 5y = 7',
    choices: ['x = 2, y = 4/3', 'x = 29/22, y = 6/11', 'x = 2, y = 2/3', 'x = 4, y = 0'],
    correctAnswer: 'x = 29/22, y = 6/11',
    solution: 'Multiply first equation by 2: 4x + 6y = 16. Subtract second equation: 11y = 9 -> y = 6/11. Substitute back to find x = 29/22.'
  },
  {
    id: 'mat1033-eq-3-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Solving Equations Lvl. 3 (linear systems: graphing, substitution, elimination)',
    difficulty: 3,
    questionText: 'Solve the system of equations using substitution: y = 2x - 3 and 3x + 2y = 12',
    choices: ['x = 18/7, y = 15/7', 'x = 2, y = 1', 'x = 3, y = 0', 'x = 1, y = -1'],
    correctAnswer: 'x = 18/7, y = 15/7',
    solution: 'Substitute y = 2x - 3 into the second equation: 3x + 2(2x - 3) = 12. Simplify: 3x + 4x - 6 = 12. 7x = 18. x = 18/7. y = 2(18/7) - 3 = 36/7 - 21/7 = 15/7.'
  },
  {
    id: 'mat1033-eq-3-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Solving Equations Lvl. 3 (linear systems: graphing, substitution, elimination)',
    difficulty: 3,
    questionText: 'What is the solution to the system: x + y = 5 and x - y = 1?',
    choices: ['x = 3, y = 2', 'x = 2, y = 3', 'x = -3, y = 8', 'No solution'],
    correctAnswer: 'x = 3, y = 2',
    solution: 'Adding the two equations: 2x = 6, so x = 3. Substitute into first equation: 3 + y = 5, so y = 2. Solution is x = 3, y = 2.'
  },
  {
  id: 'mat1033-radicals-2-1',
  gradeMin: 9,
  gradeMax: 12,
  domain: 'Intermediate Algebra (MAT1033): Radicals Lvl. 2 (higher-order roots; conjugates; radical equations; extraneous solutions)',
  difficulty: 3,
  questionText: 'Solve the radical equation: √(x) + 5 = x',
  choices: ['x = (11 + √(21))/2', 'x = 6', 'x = 4', 'x = 25'],
  correctAnswer: 'x = (11 + √(21))/2',
  solution: 'Isolate √(x) = x - 5, so x >= 5. Square: x = (x - 5)² = x² - 10x + 25 -> x² - 11x + 25 = 0. Quadratic formula: x = [11 ± √(121 - 100)]/2 = (11 ± √(21))/2. Only x >= 5 is valid, so x = (11 + √(21))/2 aprox =  7.79. Check: √(7.79) + 5 aprox =  7.79, valid; the other root is extraneous.'
},
  {
  id: 'mat1033-radicals-2-2',
  gradeMin: 9,
  gradeMax: 12,
  domain: 'Intermediate Algebra (MAT1033): Radicals Lvl. 2 (higher-order roots; conjugates; radical equations; extraneous solutions)',
  difficulty: 3,
  questionText: 'Simplify the radical expression: ³√16x¹²',
  choices: ['2x⁴³√2', '2x⁴', '4x⁴³√2', '2³√2x⁴'],
  correctAnswer: '2x⁴³√2',
  solution: '³√16x¹² = ³√(2⁴) × ³√x¹² = ³√(8 × 2) × x⁴ = ³√8 × ³√2 × x⁴ = 2³√2 × x⁴ = 2x⁴³√2'
},
  {
  id: 'mat1033-radicals-2-3',
  gradeMin: 9,
  gradeMax: 12,
  domain: 'Intermediate Algebra (MAT1033): Radicals Lvl. 2 (higher-order roots; conjugates; radical equations; extraneous solutions)',
  difficulty: 3,
  questionText: 'Multiply using conjugates: (√(5) + 2)(√(5) - 2)',
  choices: ['1', '5 - 4 = 1', '5 + 4 = 9', '√(5) - 4'],
  correctAnswer: '5 - 4 = 1',
  solution: '(√(5) + 2)(√(5) - 2) = (√(5))² - 2² = 5 - 4 = 1'
},
  {
    id: 'mat1033-complex-1',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Complex Numbers (intro to i; add/subtract/multiply/divide)',
    difficulty: 3,
    questionText: 'Simplify the complex expression: (3 - 4i)(2 + 5i)',
    choices: ['6 - 8i + 15i - 20i²', '6 + 7i - 20i²', '6 + 7i + 20', '26 + 7i'],
    correctAnswer: '26 + 7i',
    solution: '(3 - 4i)(2 + 5i) = 6 + 15i - 8i - 20i² = 6 + 7i - 20(-1) = 6 + 7i + 20 = 26 + 7i'
  },
  {
    id: 'mat1033-complex-2',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Complex Numbers (intro to i; add/subtract/multiply/divide)',
    difficulty: 3,
    questionText: 'Divide and simplify: (4 + 2i)/(2 - i)',
    choices: ['2 + i', '(8 + 4i)/(4 + 1)', '(8 - 4i + 2i - i²)/(5)', '(8 - 2i + 4i - 2i²)/(5)'],
    correctAnswer: '(8 - 2i + 4i - 2i²)/(5)',
    solution: '(4 + 2i)/(2 - i) = (4 + 2i)(2 + i)/(2 - i)(2 + i) = (8 + 4i + 2i + i²)/(4 - i²) = (8 + 6i - 1)/(4 + 1) = (7 + 6i)/5 = 7/5 + 6i/5'
  },
  {
    id: 'mat1033-complex-3',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Complex Numbers (intro to i; add/subtract/multiply/divide)',
    difficulty: 3,
    questionText: 'Evaluate: i to the 50th power',
    choices: ['1', '-1', 'i', '-i'],
    correctAnswer: '-1',
    solution: 'Since i⁴ = 1, we can write i⁵⁰ = (i⁴)¹² × i² = (1)¹² × i² = 1 × (-1) = -1'
  },
  // --- Additional 30 Problems ---
  // Common Knowledge: Basic Geometry
  {
    id: 'ck-geometry-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Geometry',
    difficulty: 3,
    questionText: 'What is the perimeter of a rectangle with length 10 cm and width 4 cm?',
    choices: ['28 cm', '40 cm', '14 cm', '20 cm'],
    correctAnswer: '28 cm',
    solution: 'Perimeter = 2 × (length + width) = 2 × (10 + 4) = 28 cm'
  },
  {
    id: 'ck-geometry-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Geometry',
    difficulty: 3,
    questionText: 'A right triangle has legs of 6 cm and 8 cm. What is the length of the hypotenuse?',
    choices: ['10 cm', '12 cm', '14 cm', '8 cm'],
    correctAnswer: '10 cm',
    solution: 'By Pythagoras: hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10 cm'
  },
  // Common Knowledge: Probability (Simple & Dependent)
  {
    id: 'ck-probability-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Probability (Simple & Dependent)',
    difficulty: 3,
    questionText: 'If you flip a fair coin three times, what is the probability of getting exactly two heads?',
    choices: ['3/8', '1/2', '1/4', '1/8'],
    correctAnswer: '3/8',
    solution: 'There are 8 possible outcomes. Ways to get exactly 2 heads: HHT, HTH, THH = 3. Probability = 3/8.'
  },
  {
    id: 'ck-probability-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Probability (Simple & Dependent)',
    difficulty: 3,
    questionText: 'A box contains 5 red and 7 blue balls. If one is drawn at random, what is the probability it is not red?',
    choices: ['5/12', '7/12', '1/2', '2/5'],
    correctAnswer: '7/12',
    solution: 'Probability not red = number of blue/total = 7/12.'
  },
  // Common Knowledge: Basic Statistics
  {
    id: 'ck-statistics-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Statistics (mean/median/mode; reading bar, pie, line graphs)',
    difficulty: 3,
    questionText: 'What is the median of the data set: 2, 4, 7, 9, 11?',
    choices: ['4', '7', '9', '6'],
    correctAnswer: '7',
    solution: 'Median is the middle value when ordered: 2, 4, 7, 9, 11. Median = 7.'
  },
  {
    id: 'ck-statistics-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Common Knowledge: Basic Statistics (mean/median/mode; reading bar, pie, line graphs)',
    difficulty: 3,
    questionText: 'A bar graph shows 10 students prefer apples, 15 prefer bananas, and 5 prefer oranges. What fraction prefer bananas?',
    choices: ['1/2', '1/3', '3/10', '1/4'],
    correctAnswer: '1/2',
    solution: 'Total = 10 + 15 + 5 = 30. Fraction for bananas = 15/30 = 1/2.'
  },
  // Developmental Math I (MAT0018): Signed Numbers
  {
    id: 'mat0018-signed-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Signed Numbers',
    difficulty: 3,
    questionText: 'Evaluate: -7 + 4 × (-2)',
    choices: ['-15', '-7', '-8', '1'],
    correctAnswer: '-15',
    solution: '-7 + 4 × (-2) = -7 + (-8) = -15.'
  },
  {
    id: 'mat0018-signed-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Signed Numbers',
    difficulty: 3,
    questionText: 'Which is greater: -3, 0, or 2?',
    choices: ['-3', '0', '2', 'All are equal'],
    correctAnswer: '2',
    solution: '2 > 0 > -3.'
  },
  // Developmental Math I (MAT0018): Decimals
  {
    id: 'mat0018-decimals-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Decimals',
    difficulty: 3,
    questionText: 'Subtract: 5.6 - 2.75',
    choices: ['2.85', '3.15', '2.95', '3.25'],
    correctAnswer: '2.85',
    solution: '5.6 - 2.75 = 2.85.'
  },
  {
    id: 'mat0018-decimals-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Decimals',
    difficulty: 3,
    questionText: 'Which is greater: 0.45 or 0.405?',
    choices: ['0.45', '0.405', 'They are equal', 'Cannot determine'],
    correctAnswer: '0.45',
    solution: '0.45 > 0.405.'
  },
  // Developmental Math I (MAT0018): Fractions
  {
    id: 'mat0018-fractions-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Fractions',
    difficulty: 3,
    questionText: 'What is 2/5 of 25?',
    choices: ['5', '10', '15', '20'],
    correctAnswer: '10',
    solution: '2/5 × 25 = 10.'
  },
  {
    id: 'mat0018-fractions-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Fractions',
    difficulty: 3,
    questionText: 'Which is larger: 3/4 or 5/8?',
    choices: ['3/4', '5/8', 'They are equal', 'Cannot determine'],
    correctAnswer: '3/4',
    solution: '3/4 = 0.75, 5/8 = 0.625. 3/4 > 5/8.'
  },
  // Developmental Math I (MAT0018): Order of Operations
  {
    id: 'mat0018-order-ops-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Order of Operations',
    difficulty: 3,
    questionText: 'Evaluate: 2 + 3 × (4 - 1)',
    choices: ['9', '11', '15', '7'],
    correctAnswer: '11',
    solution: '3 × (4 - 1) = 3 × 3 = 9; 2 + 9 = 11.'
  },
  {
    id: 'mat0018-order-ops-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Order of Operations',
    difficulty: 3,
    questionText: 'Evaluate: (8 ÷ 2) × (3 + 1)',
    choices: ['16', '32', '8', '12'],
    correctAnswer: '16',
    solution: '8 ÷ 2 = 4; 3 + 1 = 4; 4 × 4 = 16.'
  },
  // Developmental Math I (MAT0018): Polynomials Lvl. 1
  {
    id: 'mat0018-poly-1-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Polynomials Lvl. 1 (combining like terms; add/subtract)',
    difficulty: 3,
    questionText: 'Simplify: 2x + 3x - 4',
    choices: ['5x - 4', '5x + 4', 'x - 4', '2x - 1'],
    correctAnswer: '5x - 4',
    solution: '2x + 3x = 5x; 5x - 4.'
  },
  {
    id: 'mat0018-poly-1-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Polynomials Lvl. 1 (combining like terms; add/subtract)',
    difficulty: 3,
    questionText: 'Subtract: (4x² + 2x) - (x² + 5x)',
    choices: ['3x² - 3x', '5x² - 3x', '3x² + 3x', '3x² - 7x'],
    correctAnswer: '3x² - 3x',
    solution: '4x² - x² = 3x²; 2x - 5x = -3x.'
  },
  // Developmental Math I (MAT0018): Solving Equations Lvl. 1
  {
    id: 'mat0018-eq-1-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Solving Equations Lvl. 1 (one-, two-, multi-step linear)',
    difficulty: 3,
    questionText: 'Solve for x: x/3 = 5',
    choices: ['x = 8', 'x = 15', 'x = 5', 'x = 3'],
    correctAnswer: 'x = 15',
    solution: 'x = 5 × 3 = 15.'
  },
  {
    id: 'mat0018-eq-1-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math I (MAT0018): Solving Equations Lvl. 1 (one-, two-, multi-step linear)',
    difficulty: 3,
    questionText: 'Solve for y: 2y + 6 = 18',
    choices: ['y = 6', 'y = 12', 'y = 9', 'y = 3'],
    correctAnswer: 'y = 6',
    solution: '2y = 18 - 6 = 12; y = 12/2 = 6.'
  },
  // Developmental Math II (MAT0028): Polynomials Lvl. 2
  {
    id: 'mat0028-poly-2-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Polynomials Lvl. 2 (multiply; special products; divide by monomials)',
    difficulty: 3,
    questionText: 'Multiply: (x + 2)(x - 2)',
    choices: ['x² - 4', 'x² + 4', 'x² - 2', 'x² + 2'],
    correctAnswer: 'x² - 4',
    solution: '(x + 2)(x - 2) = x² - 4.'
  },
  {
    id: 'mat0028-poly-2-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Polynomials Lvl. 2 (multiply; special products; divide by monomials)',
    difficulty: 3,
    questionText: 'Divide: (9x² - 6x) ÷ 3x',
    choices: ['3x - 2', '3x - 6', '3x + 2', '6x - 3'],
    correctAnswer: '3x - 2',
    solution: '9x² ÷ 3x = 3x; -6x ÷ 3x = -2.'
  },
  // Developmental Math II (MAT0028): Exponent Rules
  {
    id: 'mat0028-exponents-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Exponent Rules (properties; zero/negative exponents) & Scientific Notation',
    difficulty: 3,
  questionText: 'Simplify: x⁰ + 2³',
  choices: ['9', '8', '1', '0'],
  correctAnswer: '9',
  solution: 'x⁰ = 1 for any x ≠ 0; 2³ = 8; 1 + 8 = 9.'
  },
  {
    id: 'mat0028-exponents-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Exponent Rules (properties; zero/negative exponents) & Scientific Notation',
    difficulty: 3,
  questionText: 'Express 5,600,000 in scientific notation.',
  choices: ['5.6 × 10⁶', '56 × 10⁵', '5.6 × 10⁵', '560 × 10⁴'],
  correctAnswer: '5.6 × 10⁶',
  solution: 'Move decimal 6 places: 5.6 × 10⁶.'
  },
  // Developmental Math II (MAT0028): Factoring Lvl. 1
  {
    id: 'mat0028-factoring-1-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Factoring Lvl. 1 (GCF; grouping; trinomials a=1 and a>1; perfect squares; difference of squares)',
    difficulty: 3,
    questionText: 'Factor: x² - 16',
    choices: ['(x - 4)(x + 4)', '(x - 8)(x + 2)', '(x - 2)(x + 8)', '(x - 4)(x - 4)'],
    correctAnswer: '(x - 4)(x + 4)',
    solution: 'Difference of squares: x² - 16 = (x - 4)(x + 4).'
  },
  {
    id: 'mat0028-factoring-1-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Factoring Lvl. 1 (GCF; grouping; trinomials a=1 and a>1; perfect squares; difference of squares)',
    difficulty: 3,
    questionText: 'Factor: 2x² + 8x',
    choices: ['2x(x + 4)', '2(x + 4)', 'x(x + 4)', '2x(x - 4)'],
    correctAnswer: '2x(x + 4)',
    solution: 'GCF is 2x: 2x² + 8x = 2x(x + 4).'
  },
  // Developmental Math II (MAT0028): Solving Equations Lvl. 2
  {
    id: 'mat0028-eq-2-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Solving Equations Lvl. 2 (inequalities; literal equations; quadratics)',
    difficulty: 3,
    questionText: 'Solve: x² = 49',
    choices: ['x = 7', 'x = -7', 'x = 7 or x = -7', 'x = 0'],
    correctAnswer: 'x = 7 or x = -7',
    solution: 'x² = 49 ⇒ x = ±7.'
  },
  {
    id: 'mat0028-eq-2-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Solving Equations Lvl. 2 (inequalities; literal equations; quadratics)',
    difficulty: 3,
    questionText: 'Solve for a: 2a + 3b = 12',
    choices: ['a = (12 - 3b)/2', 'a = (12 + 3b)/2', 'a = 12/2 - 3b', 'a = 6 - 3b'],
    correctAnswer: 'a = (12 - 3b)/2',
    solution: '2a = 12 - 3b ⇒ a = (12 - 3b)/2.'
  },
  // Developmental Math II (MAT0028): Radicals Lvl. 1
  {
    id: 'mat0028-radicals-1-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Radicals Lvl. 1 (simplify roots; combine; multiply; rationalize denominator)',
    difficulty: 3,
    questionText: 'Simplify: √(49) + √(25)',
    choices: ['12', '14', '7', '5'],
    correctAnswer: '12',
    solution: '√(49) = 7; √(25) = 5; 7 + 5 = 12.'
  },
  {
    id: 'mat0028-radicals-1-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Radicals Lvl. 1 (simplify roots; combine; multiply; rationalize denominator)',
    difficulty: 3,
    questionText: 'Rationalize: 1/√(3)',
    choices: ['√(3)/3', '1/3', '3/√(3)', '√(3)'],
    correctAnswer: '√(3)/3',
    solution: 'Multiply numerator and denominator by √(3): 1/√(3) × √(3)/√(3) = √(3)/3.'
  },
  // Developmental Math II (MAT0028): Graphing Lvl. 1
  {
    id: 'mat0028-graphing-1-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Graphing Lvl. 1 (quadrants, ordered pairs, slope, intercepts)',
    difficulty: 3,
    questionText: 'What is the y-intercept of y = 2x + 5?',
    choices: ['2', '5', '-2', '-5'],
    correctAnswer: '5',
    solution: 'y-intercept is the constant term: 5.'
  },
  {
    id: 'mat0028-graphing-1-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Developmental Math II (MAT0028): Graphing Lvl. 1 (quadrants, ordered pairs, slope, intercepts)',
    difficulty: 3,
    questionText: 'Which quadrant is the point (5, -2) in?',
    choices: ['I', 'II', 'III', 'IV'],
    correctAnswer: 'IV',
    solution: 'x > 0, y < 0 ⇒ Quadrant IV.'
  },
  // Intermediate Algebra (MAT1033): Graphing Lvl. 2
  {
    id: 'mat1033-graphing-2-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Graphing Lvl. 2 (analyzing function graphs; linear inequalities in two variables; graphing quadratics)',
    difficulty: 3,
    questionText: 'What is the axis of symmetry for f(x) = 2x² - 4x + 1?',
    choices: ['x = 1', 'x = 2', 'x = -1', 'x = -2'],
    correctAnswer: 'x = 1',
    solution: 'Axis: x = -b/(2a) = 4/(2×2) = 1.'
  },
  {
    id: 'mat1033-graphing-2-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Graphing Lvl. 2 (analyzing function graphs; linear inequalities in two variables; graphing quadratics)',
    difficulty: 3,
    questionText: 'Which of the following is a solution to y < -x + 2?',
    choices: ['(1, 0)', '(0, 2)', '(2, 0)', '(0, 3)'],
    correctAnswer: '(1, 0)',
    solution: 'For (1, 0): 0 < -1 + 2 = 1, which is true. For (0, 2): 2 < 2 is false. For (2, 0): 0 < 0 is false. For (0, 3): 3 < 2 is false.'
  },
  // Intermediate Algebra (MAT1033): Polynomials Lvl. 3
  {
    id: 'mat1033-poly-3-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Polynomials Lvl. 3 (long/synthetic division; rational expressions; complex fractions)',
    difficulty: 3,
    questionText: 'Simplify: (x² - 4)/(x - 2)',
    choices: ['x + 2', 'x - 2', 'x² - 2', 'x + 4'],
    correctAnswer: 'x + 2',
    solution: 'x² - 4 = (x - 2)(x + 2); cancel x - 2.'
  },
  {
    id: 'mat1033-poly-3-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Polynomials Lvl. 3 (long/synthetic division; rational expressions; complex fractions)',
    difficulty: 3,
    questionText: 'Divide: (x³ + 8) ÷ (x + 2)',
    choices: ['x² - 2x + 4', 'x² + 2x + 4', 'x² - 2x - 4', 'x² + 2x - 4'],
    correctAnswer: 'x² - 2x + 4',
    solution: 'x³ + 8 = (x + 2)(x² - 2x + 4).'
  },
  // Intermediate Algebra (MAT1033): Factoring Lvl. 2
  {
    id: 'mat1033-factoring-2-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Factoring Lvl. 2 (sum/diff of cubes; completing the square; grouping 4 terms)',
    difficulty: 3,
    questionText: 'Factor: x³ - 8',
    choices: ['(x - 2)(x² + 2x + 4)', '(x + 2)(x² - 2x + 4)', '(x - 2)(x² - 2x + 4)', '(x + 2)(x² + 2x + 4)'],
    correctAnswer: '(x - 2)(x² + 2x + 4)',
    solution: 'x³ - 8 = (x - 2)(x² + 2x + 4).'
  },
  {
    id: 'mat1033-factoring-2-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Factoring Lvl. 2 (sum/diff of cubes; completing the square; grouping 4 terms)',
    difficulty: 3,
    questionText: 'Complete the square: x² + 4x + 1',
    choices: ['(x + 2)² - 3', '(x - 2)² + 3', '(x + 2)² + 3', '(x - 2)² - 3'],
    correctAnswer: '(x + 2)² - 3',
    solution: 'x² + 4x + 1 = (x + 2)² - 4 + 1 = (x + 2)² - 3.'
  },
  // Intermediate Algebra (MAT1033): Solving Equations Lvl. 3
  {
    id: 'mat1033-eq-3-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Solving Equations Lvl. 3 (linear systems: graphing, substitution, elimination)',
    difficulty: 3,
    questionText: 'Solve: x - y = 4, x + y = 10',
    choices: ['x = 7, y = 3', 'x = 6, y = 4', 'x = 8, y = 2', 'x = 5, y = 5'],
    correctAnswer: 'x = 7, y = 3',
    solution: 'Add: 2x = 14 ⇒ x = 7; y = 10 - 7 = 3.'
  },
  {
    id: 'mat1033-eq-3-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Solving Equations Lvl. 3 (linear systems: graphing, substitution, elimination)',
    difficulty: 3,
    questionText: 'Solve: 2x + y = 9, x - y = 1',
    choices: ['x = 10/3, y = 7/3', 'x = 4, y = 1', 'x = 5, y = -1', 'x = 2, y = 5'],
    correctAnswer: 'x = 10/3, y = 7/3',
    solution: 'Add equations: 3x = 10 ⇒ x = 10/3; y = 9 - 2x = 9 - 20/3 = 27/3 - 20/3 = 7/3.'
  },
  // Intermediate Algebra (MAT1033): Radicals Lvl. 2
  {
    id: 'mat1033-radicals-2-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Radicals Lvl. 2 (higher-order roots; conjugates; radical equations; extraneous solutions)',
    difficulty: 3,
    questionText: 'Solve: x² = 25',
    choices: ['x = 5', 'x = -5', 'x = 5 or x = -5', 'x = 0'],
    correctAnswer: 'x = 5 or x = -5',
    solution: 'x² = 25 ⇒ x = ±5.'
  },
  {
    id: 'mat1033-radicals-2-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Radicals Lvl. 2 (higher-order roots; conjugates; radical equations; extraneous solutions)',
    difficulty: 3,
    questionText: 'Simplify: ⁴√(16)',
    choices: ['2', '4', '8', '16'],
    correctAnswer: '2',
    solution: '2⁴ = 16 ⇒ ⁴√(16) = 2.'
  },
  // Intermediate Algebra (MAT1033): Complex Numbers
  {
    id: 'mat1033-complex-4',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Complex Numbers (intro to i; add/subtract/multiply/divide)',
    difficulty: 3,
  questionText: 'What is i⁸?',
  choices: ['1', '-1', 'i', '-i'],
  correctAnswer: '1',
  solution: 'i⁴ = 1, so i⁸ = (i⁴)² = 1.'
  },
  {
    id: 'mat1033-complex-5',
    gradeMin: 9,
    gradeMax: 12,
    domain: 'Intermediate Algebra (MAT1033): Complex Numbers (intro to i; add/subtract/multiply/divide)',
    difficulty: 3,
    questionText: 'Simplify: (2 + 3i) + (4 - 5i)',
    choices: ['6 - 2i', '2 + 8i', '6 + 2i', '2 - 2i'],
    correctAnswer: '6 - 2i',
    solution: 'Add real and imaginary parts: 2 + 4 = 6; 3i - 5i = -2i.'
  }
];
