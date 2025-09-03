import { Question } from './types';

export const mockQuestions: Question[] = [
  // Number Sense Questions (Grades 1-3)
  {
    id: '1',
    gradeMin: 1,
    gradeMax: 3,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 5 + 7?',
    choices: ['10', '11', '12', '13'],
    correctAnswer: '12',
    solution: '5 + 7 = 12'
  },
  {
    id: '2',
    gradeMin: 1,
    gradeMax: 2,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What number comes after 29?',
    choices: ['28', '29', '30', '31'],
    correctAnswer: '30',
    solution: 'Numbers increase by 1, so after 29 comes 30'
  },
  {
    id: '3',
    gradeMin: 2,
    gradeMax: 3,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 23 - 15?',
    choices: ['6', '7', '8', '9'],
    correctAnswer: '8',
    solution: '23 - 15 = 8'
  },

  // Fractions Questions (Grades 3-5)
{
  id: '4',
  gradeMin: 3,
  gradeMax: 5,
  domain: 'Fractions',
  difficulty: 2,
  questionText: 'What is 1/4 + 1/2?',
  choices: ['2/6', '3/4', '6/8', '1'],
  correctAnswer: '3/4',
  solution: '1/4 + 1/2 = 1/4 + 2/4 = 3/4'
},
{
  id: '5',
  gradeMin: 4,
  gradeMax: 5,
  domain: 'Fractions',
  difficulty: 2,
  questionText: 'Which fraction is equivalent to 2/4?',
  choices: ['1/3', '1/2', '3/5', '2/5'],
  correctAnswer: '1/2',
  solution: '(2 ÷ 2) / (4 ÷ 2) = 1/2'
},
{
  id: '6',
  gradeMin: 5,
  gradeMax: 6,
  domain: 'Fractions',
  difficulty: 3,
  questionText: 'What is 2/3 x 3/4?',
  choices: ['1/2', '3/8', '5/8', '2/5'],
  correctAnswer: '1/2',
  solution: '2/3 x 3/4 = 6/12 = 1/2'
},

  // Algebra Questions (Grades 6-8)
  {
    id: '7',
    gradeMin: 6,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 3,
    questionText: 'Solve for x: 2x + 5 = 13',
    choices: ['3', '4', '6', '8'],
    correctAnswer: '4',
    solution: '2x + 5 = 13\n2x = 8\nx = 4'
  },
  {
    id: '8',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 3,
    questionText: 'If 3(x - 2) = 15, what is x?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: '3(x - 2) = 15\nx - 2 = 5\nx = 7'
  },
  {
    id: '9',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 4,
    questionText: 'Solve: -2x + 7 = -5',
    choices: ['6', '5', '1', '-6'],
    correctAnswer: '6',
    solution: '-2x + 7 = -5\n-2x = -12\nx = 6'
  },

  // Geometry Questions
  {
    id: '10',
    gradeMin: 3,
    gradeMax: 4,
    domain: 'Geometry',
    difficulty: 2,
    questionText: 'How many sides does a pentagon have?',
    choices: ['3', '4', '5', '6'],
    correctAnswer: '5',
    solution: 'A pentagon is a five-sided polygon'
  },
  {
    id: '11',
    gradeMin: 5,
    gradeMax: 6,
    domain: 'Geometry',
    difficulty: 3,
    questionText: 'What is the area of a rectangle with length 8 and width 5?',
    choices: ['13', '26', '40', '45'],
    correctAnswer: '40',
    solution: 'Area = length x width = 8 x 5 = 40'
  },
{
  id: '12',
  gradeMin: 7,
  gradeMax: 8,
  domain: 'Geometry',
  difficulty: 4,
  questionText: 'In a right triangle, if one acute angle is 30°, what is the measure of the other acute angle?',
  choices: ['30°', '45°', '60°', '75°'],
  correctAnswer: '60°',
  solution: 'Angles sum to 180°. With a 90° right angle and a 30° acute angle, the remaining acute angle is 60°.'
}
,

  // Measurement Questions
  {
    id: '13',
    gradeMin: 2,
    gradeMax: 3,
    domain: 'Measurement',
    difficulty: 1,
    questionText: 'How many minutes are in 2 hours?',
    choices: ['60', '90', '120', '150'],
    correctAnswer: '120',
    solution: '1 hour = 60 minutes, so 2 hours = 2 x 60 = 120 minutes'
  },
  {
    id: '14',
    gradeMin: 4,
    gradeMax: 5,
    domain: 'Measurement',
    difficulty: 2,
    questionText: 'How many milliliters are in 2 liters?',
    choices: ['200', '1000', '2000', '20000'],
    correctAnswer: '2000',
    solution: '1 liter = 1000 milliliters, so 2 liters = 2 x 1000 = 2000 milliliters'
  },
  {
    id: '15',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Measurement',
    difficulty: 3,
    questionText: 'Convert 5 kilometers to meters',
    choices: ['500', '5000', '50000', '500000'],
    correctAnswer: '5000',
    solution: '1 kilometer = 1000 meters, so 5 kilometers = 5 x 1000 = 5000 meters'
  },

  // Statistics Questions
  {
    id: '16',
    gradeMin: 4,
    gradeMax: 5,
    domain: 'Statistics',
    difficulty: 2,
    questionText: 'What is the mean of 2, 4, 6, and 8?',
    choices: ['4', '5', '6', '7'],
    correctAnswer: '5',
    solution: '(2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5'
  },
  {
    id: '17',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Statistics',
    difficulty: 3,
    questionText: 'What is the median of 3, 7, 8, 12, 15?',
    choices: ['7', '8', '9', '12'],
    correctAnswer: '8',
    solution: 'Arranged in order: 3, 7, 8, 12, 15. Middle number is 8'
  },
  {
    id: '18',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Statistics',
    difficulty: 4,
    questionText: 'What is the mode of 2, 3, 3, 4, 4, 4, 5?',
    choices: ['2', '3', '4', '5'],
    correctAnswer: '4',
    solution: 'The number that appears most frequently is 4 (appears three times)'
  },

  // Operations & Algebraic Thinking
  {
    id: '19',
    gradeMin: 2,
    gradeMax: 3,
    domain: 'Operations & Algebraic Thinking',
    difficulty: 1,
    questionText: 'What is 4 x 3?',
    choices: ['7', '10', '12', '15'],
    correctAnswer: '12',
    solution: '4 x 3 = 4 + 4 + 4 = 12'
  },
  {
    id: '20',
    gradeMin: 3,
    gradeMax: 4,
    domain: 'Operations & Algebraic Thinking',
    difficulty: 2,
    questionText: 'Find the missing number: 5 x ___ = 35',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: '5 x 7 = 35'
  },

  // Place Value
  {
    id: '21',
    gradeMin: 2,
    gradeMax: 3,
    domain: 'Place Value',
    difficulty: 1,
    questionText: 'What is 374 in expanded form?',
    choices: ['300 + 70 + 4', '300 + 74', '37 + 4', '3 + 7 + 4'],
    correctAnswer: '300 + 70 + 4',
    solution: '374 = 300 + 70 + 4 (3 hundreds + 7 tens + 4 ones)'
  },
  {
    id: '22',
    gradeMin: 4,
    gradeMax: 5,
    domain: 'Place Value',
    difficulty: 2,
    questionText: 'Round 1,678 to the nearest hundred.',
    choices: ['1,600', '1,670', '1,680', '1,700'],
    correctAnswer: '1,700',
    solution: '1,678 is closer to 1,700 than 1,600'
  },

  // Decimals & Percents
  {
    id: '23',
    gradeMin: 4,
    gradeMax: 5,
    domain: 'Decimals & Percents',
    difficulty: 2,
    questionText: 'Convert 0.75 to a percent',
    choices: ['7.5%', '75%', '0.75%', '750%'],
    correctAnswer: '75%',
    solution: '0.75 = 75/100 = 75%'
  },
  {
    id: '24',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Decimals & Percents',
    difficulty: 3,
    questionText: 'What is 15% of 80?',
    choices: ['8', '12', '15', '20'],
    correctAnswer: '12',
    solution: '15% of 80 = 0.15 x 80 = 12'
  },

  // Ratios & Proportions
  {
    id: '25',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Ratios & Proportions',
    difficulty: 2,
    questionText: 'If 3 apples cost $2.25, how much do 4 apples cost?',
    choices: ['$2.75', '$3.00', '$3.25', '$3.50'],
    correctAnswer: '$3.00',
    solution: 'Set up proportion: 3/2.25 = 4/x, solve for x: x = (4 x 2.25)/3 = $3.00'
  },
  {
    id: '26',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Ratios & Proportions',
    difficulty: 3,
    questionText: 'A map has a scale of 1:100,000. If two cities are 5cm apart on the map, what is their actual distance in kilometers?',
    choices: ['0.5 km', '5 km', '50 km', '500 km'],
    correctAnswer: '5 km',
    solution: '5 cm x 100,000 = 500,000 cm = 5 km'
  },

  // Integers & Rational Numbers
  {
    id: '27',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Integers & Rational Numbers',
    difficulty: 2,
    questionText: 'What is the absolute value of -8?',
    choices: ['-8', '0', '8', '16'],
    correctAnswer: '8',
    solution: 'The absolute value is the distance from zero, so |-8| = 8'
  },
  {
    id: '28',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Integers & Rational Numbers',
    difficulty: 3,
    questionText: 'Evaluate: -3 x (-4) + (-2)',
    choices: ['10', '12', '14', '16'],
    correctAnswer: '10',
    solution: '-3 x (-4) + (-2) = 12 + (-2) = 10'
  },

  // Exponents & Roots
  {
    id: '29',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Exponents & Roots',
    difficulty: 2,
    questionText: 'What is 2³?',
    choices: ['4', '6', '8', '16'],
    correctAnswer: '8',
    solution: '2³ = 2 x 2 x 2 = 8'
  },
  {
    id: '30',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Exponents & Roots',
    difficulty: 3,
    questionText: 'What is √64?',
    choices: ['6', '8', '10', '12'],
    correctAnswer: '8',
    solution: '8 x 8 = 64, so √64 = 8'
  },

  // Probability
  {
    id: '31',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Probability',
    difficulty: 2,
    questionText: 'What is the probability of rolling an even number on a fair six-sided die?',
    choices: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: '1/2',
    solution: 'Even numbers on a die: 2,4,6 (3 numbers). Total outcomes: 6. Probability = 3/6 = 1/2'
  },
  {
  id: '32',
  gradeMin: 7, gradeMax: 8,
  domain: 'Probability', difficulty: 3,
  questionText: 'What is the probability of drawing a red card from a standard deck of 52 cards?',
  choices: ['13/52', '24/52', '1/2', '1/4'],
  correctAnswer: '1/2',
  solution: 'There are 26 red cards out of 52 total, so 26/52 = 1/2.'
},

  // Functions
  {
    id: '33',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Functions',
    difficulty: 3,
    questionText: 'If f(x) = 2x + 3, what is f(4)?',
    choices: ['7', '8', '11', '14'],
    correctAnswer: '11',
    solution: 'f(4) = 2(4) + 3 = 8 + 3 = 11'
  },
  {
    id: '34',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Functions',
    difficulty: 4,
    questionText: 'Which equation represents a linear function?',
    choices: ['y = x²', 'y = 3x + 2', 'y = 1/x', 'y = 2^x'],
    correctAnswer: 'y = 3x + 2',
    solution: 'A linear function has a constant rate of change and is in the form y = mx + b'
  },

  // Data & Graphing
  {
    id: '35',
    gradeMin: 6,
    gradeMax: 7,
    domain: 'Data & Graphing',
    difficulty: 2,
    questionText: 'Which type of graph is best for showing change over time?',
    choices: ['Bar graph', 'Pie chart', 'Line graph', 'Scatter plot'],
    correctAnswer: 'Line graph',
    solution: 'Line graphs show trends and changes over time clearly by connecting data points'
  },
  {
    id: '36',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Data & Graphing',
    difficulty: 3,
    questionText: 'What does a steep line on a line graph indicate?',
    choices: ['Slow change', 'No change', 'Rapid change', 'Negative change'],
    correctAnswer: 'Rapid change',
    solution: 'A steep line shows a rapid rate of change between data points'
  },

  // Geometry Transformations
  {
    id: '37',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Geometry Transformations',
    difficulty: 3,
    questionText: 'What transformation moves every point the same distance in the same direction?',
    choices: ['Rotation', 'Reflection', 'Translation', 'Dilation'],
    correctAnswer: 'Translation',
    solution: 'Translation is sliding a figure without changing its size or shape'
  },
{
  id: '38',
  gradeMin: 8, gradeMax: 8,
  domain: 'Geometry Transformations', difficulty: 4,
  questionText: 'A dilation with scale factor 2 will make the shape’s **area** how many times larger?',
  choices: ['2 times', '3 times', '4 times', '8 times'],
  correctAnswer: '4 times',
  solution: 'Area scales by the square of the scale factor: 2² = 4.'
},

  // Trigonometry
  {
    id: '39',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Trigonometry',
    difficulty: 4,
    questionText: 'In a right triangle, what is sin(30°) equal to?',
    choices: ['1/4', '1/3', '1/2', '1'],
    correctAnswer: '1/2',
    solution: 'sin(30°) = 1/2 is one of the standard angles to memorize'
  },
  {
    id: '40',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Trigonometry',
    difficulty: 4,
    questionText: 'In a right triangle, if sin(θ) = 0.8, what is cos(θ)?',
    choices: ['0.6', '0.8', '1.0', '1.2'],
    correctAnswer: '0.6',
    solution: 'Using the Pythagorean identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 0.8²) = 0.6'
  },






  // potentially remove these at some point due to potential inaccuracies 




  { id: '41', gradeMin: 1, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 9 + 8?', choices: ['15','16','17','18'], correctAnswer: '17',
    solution: '9 + 8 = 17' },
  { id: '42', gradeMin: 2, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 7 in 7,452?', choices: ['7','70','700','7,000'], correctAnswer: '7,000',
    solution: 'The 7 is in the thousands place.' },
  { id: '43', gradeMin: 3, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 402 - 178?', choices: ['214','222','224','232'], correctAnswer: '224',
    solution: 'Borrow and subtract: 402 - 178 = 224.' },
  { id: '44', gradeMin: 3, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 7 x 6?', choices: ['36','40','42','48'], correctAnswer: '42',
    solution: '7 x 6 = 42.' },

  // Fractions (G3–G6)
  { id: '45', gradeMin: 4, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'Which is greater?', choices: ['3/5','2/3','They are equal','1/2'], correctAnswer: '2/3',
    solution: '3/5 = 0.6, 2/3 = 0.666… so 2/3 is greater.' },
  { id: '46', gradeMin: 3, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 5/8 + 1/8?', choices: ['3/8','6/8','5/16','7/8'], correctAnswer: '6/8',
    solution: 'Like denominators: 5/8 + 1/8 = 6/8 = 3/4.' },
  { id: '47', gradeMin: 3, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'Simplify 9/12.', choices: ['3/4','2/3','1/3','4/9'], correctAnswer: '3/4',
    solution: 'Divide numerator and denominator by 3.' },
  { id: '80', gradeMin: 5, gradeMax: 6, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 3/4 ÷ 1/2?', choices: ['3/8','3/2','2/3','1/2'], correctAnswer: '3/2',
    solution: 'Divide by a fraction = multiply by its reciprocal: 3/4 x 2 = 3/2.' },

  // Decimals & Percents (G4–G7)
  { id: '48', gradeMin: 4, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 45% to a decimal.', choices: ['0.45','4.5','0.045','45.0'], correctAnswer: '0.45',
    solution: 'Move the decimal two places left.' },
  { id: '49', gradeMin: 4, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 3.60 + 0.75?', choices: ['3.75','4.25','4.35','4.45'], correctAnswer: '4.35',
    solution: '3.60 + 0.75 = 4.35.' },
  { id: '50', gradeMin: 4, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Round 8.746 to the nearest tenth.', choices: ['8.7','8.8','8.74','8.75'], correctAnswer: '8.7',
    solution: 'Hundredths digit is 4, so round down to 8.7.' },
  { id: '76', gradeMin: 6, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'A $50 item is discounted by 20%. What is the sale price?', choices: ['$10','$30','$40','$45'], correctAnswer: '$40',
    solution: '20% of $50 is $10; $50 - $10 = $40.' },

  // Ratios & Proportions / Unit Rate (G6–G7)
  { id: '51', gradeMin: 6, gradeMax: 7, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'A car travels 120 miles in 3 hours. What is the unit rate in mph?', choices: ['30','35','40','45'], correctAnswer: '40',
    solution: '120 ÷ 3 = 40 mph.' },
  { id: '52', gradeMin: 6, gradeMax: 7, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'Solve: x/5 = 18/15', choices: ['4','5','6','9'], correctAnswer: '6',
    solution: 'x = 5 x 18 ÷ 15 = 6.' },

  // Integers / Order of Operations / Exponents (G6–G8)
  { id: '53', gradeMin: 6, gradeMax: 7, domain: 'Integers & Rational Numbers', difficulty: 1,
    questionText: 'Evaluate: -7 + 12', choices: ['-19','5','-5','19'], correctAnswer: '5',
    solution: '-7 + 12 = 5.' },
  { id: '54', gradeMin: 6, gradeMax: 7, domain: 'Integers & Rational Numbers', difficulty: 1,
    questionText: 'What is |-3| + |-5|?', choices: ['-8','0','8','2'], correctAnswer: '8',
    solution: 'Absolute values: 3 + 5 = 8.' },
  { id: '55', gradeMin: 6, gradeMax: 7, domain: 'Exponents & Roots', difficulty: 2,
    questionText: 'Evaluate: 2^3 x 3^2', choices: ['24','48','72','96'], correctAnswer: '72',
    solution: '2^3=8, 3^2=9, 8x9=72.' },
  { id: '78', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 2,
    questionText: 'What is (-5)^2?', choices: ['-25','0','5','25'], correctAnswer: '25',
    solution: 'Square of -5 is positive 25.' },
  { id: '79', gradeMin: 7, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'Evaluate: 8 - 2^3 + 4', choices: ['0','2','4','8'], correctAnswer: '4',
    solution: 'Exponent first: 2^3=8 -> 8-8+4=4.' },

  // Algebra: equations/inequalities/slope (G6–G8)
  { id: '56', gradeMin: 6, gradeMax: 7, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve for x: 5x - 9 = 16', choices: ['3','4','5','6'], correctAnswer: '5',
    solution: '5x=25 -> x=5.' },
  { id: '57', gradeMin: 6, gradeMax: 7, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve: 3(x + 4) = 27', choices: ['3','5','7','9'], correctAnswer: '5',
    solution: 'x+4=9 -> x=5.' },
  { id: '58', gradeMin: 8, gradeMax: 8, domain: 'Algebra', difficulty: 3,
    questionText: 'Find the slope between (1, 3) and (5, 11).', choices: ['1','2','3','4'], correctAnswer: '2',
    solution: 'Δy/Δx = (11-3)/(5-1) = 8/4 = 2.' },
  { id: '59', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'For y = 2x - 3, what is y when x = 4?', choices: ['3','5','7','11'], correctAnswer: '5',
    solution: '2(4) - 3 = 5.' },
  { id: '60', gradeMin: 7, gradeMax: 8, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve the inequality: x + 7 < 12', choices: ['x < 5','x > 5','x < -5','x > -5'], correctAnswer: 'x < 5',
    solution: 'Subtract 7 from both sides.' },

  // Geometry: area/volume/angles/circumference/Pythagorean (G5–G8)
  { id: '61', gradeMin: 5, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'What is the area of a triangle with base 10 and height 6?', choices: ['16','20','30','60'], correctAnswer: '30',
    solution: 'A = 1/2 x b x h = 30.' },
  { id: '62', gradeMin: 7, gradeMax: 8, domain: 'Geometry', difficulty: 3,
    questionText: 'Find the circumference of a circle with radius 7 (use π = 3.14).', choices: ['21.98','43.96','49.00','153.86'], correctAnswer: '43.96',
    solution: 'C = 2πr = 2 x 3.14 x 7 = 43.96.' },
  { id: '63', gradeMin: 6, gradeMax: 7, domain: 'Geometry', difficulty: 2,
    questionText: 'Volume of a rectangular prism with l=4, w=3, h=5?', choices: ['12','20','40','60'], correctAnswer: '60',
    solution: 'V = lwh = 4x3x5 = 60.' },
  { id: '64', gradeMin: 6, gradeMax: 7, domain: 'Geometry', difficulty: 1,
    questionText: 'Sum of the interior angles of a quadrilateral?', choices: ['90°','180°','270°','360°'], correctAnswer: '360°',
    solution: 'Quadrilateral can be split into two triangles: 2x180°.' },
  { id: '65', gradeMin: 7, gradeMax: 8, domain: 'Geometry', difficulty: 3,
    questionText: 'In a right triangle with legs 6 and 8, what is the hypotenuse?', choices: ['7','9','10','12'], correctAnswer: '10',
    solution: 'c = √(6²+8²) = √(36+64) = √100 = 10.' },

  // Measurement / Conversions (G3–G7)
  { id: '66', gradeMin: 6, gradeMax: 7, domain: 'Measurement', difficulty: 2,
    questionText: 'Convert 3.5 kilograms to grams.', choices: ['350 g','3,500 g','35,000 g','0.35 g'], correctAnswer: '3,500 g',
    solution: '1 kg = 1000 g -> 3.5 kg = 3500 g.' },
  { id: '67', gradeMin: 5, gradeMax: 6, domain: 'Measurement', difficulty: 2,
    questionText: 'Convert 30 inches to feet.', choices: ['2 ft','2.5 ft','3 ft','3.5 ft'], correctAnswer: '2.5 ft',
    solution: '12 in = 1 ft -> 30 ÷ 12 = 2.5 ft.' },

  // Statistics & Data (G4–G8)
  { id: '68', gradeMin: 4, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the range of 5, 9, 2, 7?', choices: ['2','4','7','9'], correctAnswer: '7',
    solution: 'Max - min = 9 - 2 = 7.' },
  { id: '69', gradeMin: 6, gradeMax: 7, domain: 'Probability', difficulty: 2,
    questionText: 'Flip a fair coin twice. P(Heads then Tails)?', choices: ['1/2','1/3','1/4','1/8'], correctAnswer: '1/4',
    solution: 'Independent events: 1/2 x 1/2 = 1/4.' },
  { id: '70', gradeMin: 4, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'Mean of 10, 12, 14?', choices: ['11','12','13','14'], correctAnswer: '12',
    solution: '(10+12+14)/3 = 12.' },

  // Functions (G7–G8)
  { id: '71', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'What is the y-intercept of y = -3x + 4?', choices: ['-3','4','(-3, 0)','(0, -3)'], correctAnswer: '4',
    solution: 'In y = mx + b, b = 4 is the y-intercept.' },
  { id: '72', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'If f(x) = x² - 5x + 6, find f(3).', choices: ['0','2','3','6'], correctAnswer: '0',
    solution: '9 - 15 + 6 = 0.' },
  { id: '73', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'If g(x) = 3x, and g(x) = 24, what is x?', choices: ['6','7','8','9'], correctAnswer: '8',
    solution: '3x = 24 -> x = 8.' },

  // Exponents & Roots / Scientific Notation (G7–G8)
  { id: '74', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 1,
    questionText: 'What is √81?', choices: ['6','8','9','12'], correctAnswer: '9',
    solution: '9 x 9 = 81.' },
  { id: '75', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 3,
    questionText: 'Write 0.006 in scientific notation.', choices: ['6 x 10^3','6 x 10^-3','6 x 10^-2','6 x 10^-4'], correctAnswer: '6 x 10^-3',
    solution: 'Move decimal 3 places to the right -> 10^-3.' },

  // Probability (cards) (G7–G8)
  { id: '77', gradeMin: 7, gradeMax: 8, domain: 'Probability', difficulty: 3,
    questionText: 'Probability of drawing a queen from a standard deck?', choices: ['1/52','1/26','1/13','1/4'], correctAnswer: '1/13',
    solution: '4 queens out of 52 cards: 4/52 = 1/13.' },
     {
    id: '101',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 6 + 3?',
    choices: ['8', '9', '10', '11'],
    correctAnswer: '9',
    solution: '6 + 3 = 9'
  },
  {
    id: '102',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 10 - 4?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '6',
    solution: '10 - 4 = 6'
  },
  {
    id: '103',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What number comes just before 15?',
    choices: ['13', '14', '15', '16'],
    correctAnswer: '14',
    solution: 'The number before 15 is 14'
  },
  {
    id: '104',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What number comes just after 19?',
    choices: ['18', '19', '20', '21'],
    correctAnswer: '20',
    solution: 'The number after 19 is 20'
  },
  {
    id: '105',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'Which is greater: 12 or 9?',
    choices: ['9', '12'],
    correctAnswer: '12',
    solution: '12 is greater than 9'
  },
  {
    id: '106',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 8 + 7?',
    choices: ['14', '15', '16', '17'],
    correctAnswer: '15',
    solution: '8 + 7 = 15'
  },
  {
    id: '107',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 13 - 6?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: '13 - 6 = 7'
  },
  {
    id: '108',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'How many tens are in the number 30?',
    choices: ['1', '2', '3', '4'],
    correctAnswer: '3',
    solution: '30 has 3 tens'
  },
  {
    id: '109',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'Which number is even?',
    choices: ['7', '9', '12', '15'],
    correctAnswer: '12',
    solution: 'Even numbers are divisible by 2, 12 is even'
  },
  {
    id: '110',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'Maria has 5 apples and gets 4 more. How many apples does she have?',
    choices: ['8', '9', '10', '11'],
    correctAnswer: '9',
    solution: '5 + 4 = 9'
  },
  {
    id: '111',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'If you count by 5s, what comes after 25?',
    choices: ['30', '35', '40', '45'],
    correctAnswer: '30',
    solution: '25 + 5 = 30'
  },
  {
    id: '112',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 14 - 9?',
    choices: ['4', '5', '6', '7'],
    correctAnswer: '5',
    solution: '14 - 9 = 5'
  },
  {
    id: '113',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Which is less: 18 or 12?',
    choices: ['18', '12'],
    correctAnswer: '12',
    solution: '12 is less than 18'
  },
  {
    id: '114',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 7 + 5?',
    choices: ['11', '12', '13', '14'],
    correctAnswer: '12',
    solution: '7 + 5 = 12'
  },
  {
    id: '115',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 16 - 8?',
    choices: ['6', '7', '8', '9'],
    correctAnswer: '8',
    solution: '16 - 8 = 8'
  },
   {
    id: '116',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 4 + 9?',
    choices: ['12', '13', '14', '15'],
    correctAnswer: '13',
    solution: '4 + 9 = 13'
  },
  {
    id: '117',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 12 - 7?',
    choices: ['4', '5', '6', '7'],
    correctAnswer: '5',
    solution: '12 - 7 = 5'
  },
  {
    id: '118',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'Which number is odd?',
    choices: ['4', '6', '9', '12'],
    correctAnswer: '9',
    solution: 'Odd numbers are not divisible by 2; 9 is odd'
  },
  {
    id: '119',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What comes after 47?',
    choices: ['46', '47', '48', '49'],
    correctAnswer: '48',
    solution: 'The number after 47 is 48'
  },
  {
    id: '120',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What comes before 32?',
    choices: ['30', '31', '32', '33'],
    correctAnswer: '31',
    solution: 'The number before 32 is 31'
  },
  {
    id: '121',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Count by 2s: 2, 4, 6, __?',
    choices: ['7', '8', '9', '10'],
    correctAnswer: '8',
    solution: 'The next even number after 6 is 8'
  },
  {
    id: '122',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Count by 10s: 10, 20, 30, __?',
    choices: ['35', '40', '50', '60'],
    correctAnswer: '40',
    solution: 'Add 10: 30 + 10 = 40'
  },
  {
    id: '123',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 15 - 9?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '6',
    solution: '15 - 9 = 6'
  },
  {
    id: '124',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 11 + 6?',
    choices: ['15', '16', '17', '18'],
    correctAnswer: '17',
    solution: '11 + 6 = 17'
  },
  {
    id: '125',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Tom has 8 pencils. He gives 3 away. How many are left?',
    choices: ['4', '5', '6', '7'],
    correctAnswer: '5',
    solution: '8 - 3 = 5'
  },
  {
    id: '126',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Which is greater: 14 or 17?',
    choices: ['14', '17'],
    correctAnswer: '17',
    solution: '17 is greater than 14'
  },
  {
    id: '127',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'Which is less: 9 or 11?',
    choices: ['9', '11'],
    correctAnswer: '9',
    solution: '9 is less than 11'
  },
  {
    id: '128',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 7 + 2?',
    choices: ['8', '9', '10', '11'],
    correctAnswer: '9',
    solution: '7 + 2 = 9'
  },
  {
    id: '129',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 1,
    questionText: 'What is 5 less than 18?',
    choices: ['12', '13', '14', '15'],
    correctAnswer: '13',
    solution: '18 - 5 = 13'
  },
  {
    id: '130',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'If you have 10 candies and eat 2, how many are left?',
    choices: ['6', '7', '8', '9'],
    correctAnswer: '8',
    solution: '10 - 2 = 8'
  },
  {
    id: '131',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 4 more than 12?',
    choices: ['14', '15', '16', '17'],
    correctAnswer: '16',
    solution: '12 + 4 = 16'
  },
  {
    id: '132',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Which is even: 5, 7, 10, 13?',
    choices: ['5', '7', '10', '13'],
    correctAnswer: '10',
    solution: '10 is divisible by 2, so it is even'
  },
  {
    id: '133',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'Fill in the blank: 2, 4, 6, __, 10',
    choices: ['7', '8', '9', '11'],
    correctAnswer: '8',
    solution: 'This is counting by 2s, so the missing number is 8'
  },
  {
    id: '134',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 3 + 11?',
    choices: ['12', '13', '14', '15'],
    correctAnswer: '14',
    solution: '3 + 11 = 14'
  },
  {
    id: '135',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'What is 17 - 8?',
    choices: ['7', '8', '9', '10'],
    correctAnswer: '9',
    solution: '17 - 8 = 9'
  },




  //2nd grade questions 


   {
    id: '201', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 25 + 16?', choices: ['31','39','40','41'], correctAnswer: '41',
    solution: '25 + 16 = 41'
  },
  {
    id: '202', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 40 - 27?', choices: ['11','12','13','14'], correctAnswer: '13',
    solution: '40 - 27 = 13'
  },
  {
    id: '203', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What number comes right after 199?', choices: ['198','199','200','201'],
    correctAnswer: '200',
    solution: '199 + 1 = 200'
  },
  {
    id: '204', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'Which is greater: 84 or 48?', choices: ['84','48'],
    correctAnswer: '84',
    solution: '84 is greater than 48'
  },
  {
    id: '205', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 36 + 29?', choices: ['55','64','65','66'], correctAnswer: '65',
    solution: '36 + 29 = 65'
  },
  {
    id: '206', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 73 - 58?', choices: ['14','15','16','17'], correctAnswer: '15',
    solution: '73 - 58 = 15'
  },
  {
    id: '207', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is even?', choices: ['35','42','57','63'],
    correctAnswer: '42',
    solution: 'Even numbers are divisible by 2; 42 ÷ 2 = 21'
  },
  {
    id: '208', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 18 + 25?', choices: ['42','43','44','45'],
    correctAnswer: '43',
    solution: '18 + 25 = 43'
  },
  {
    id: '209', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 90 - 47?', choices: ['42','43','44','45'],
    correctAnswer: '43',
    solution: '90 - 47 = 43'
  },
  {
    id: '210', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is less: 128 or 182?', choices: ['128','182'],
    correctAnswer: '128',
    solution: '128 is less than 182'
  },
  {
    id: '211', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 125 + 38?', choices: ['152','163','164','165'],
    correctAnswer: '163',
    solution: '125 + 38 = 163'
  },
  {
    id: '212', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 200 - 76?', choices: ['122','123','124','125'],
    correctAnswer: '124',
    solution: '200 - 76 = 124'
  },

  // === Operations & Algebraic Thinking (213–225) ===
  {
    id: '213', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 6 x 2?', choices: ['10','11','12','14'], correctAnswer: '12',
    solution: '6 x 2 = 12'
  },
  {
    id: '214', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 15 ÷ 3?', choices: ['4','5','6','7'], correctAnswer: '5',
    solution: '15 ÷ 3 = 5'
  },
  {
    id: '215', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Fill in the blank: 7 + ___ = 15', choices: ['6','7','8','9'],
    correctAnswer: '8',
    solution: '7 + 8 = 15'
  },
  {
    id: '216', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Fill in the blank: ___ - 9 = 4', choices: ['11','12','13','14'],
    correctAnswer: '13',
    solution: '13 - 9 = 4'
  },
  {
    id: '217', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 3 x 4?', choices: ['10','11','12','13'], correctAnswer: '12',
    solution: '3 x 4 = 12'
  },
  {
    id: '218', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 20 ÷ 5?', choices: ['3','4','5','6'], correctAnswer: '4',
    solution: '20 ÷ 5 = 4'
  },
  {
    id: '219', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 9 x 5?', choices: ['40','42','45','50'],
    correctAnswer: '45',
    solution: '9 x 5 = 45'
  },
  {
    id: '220', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 36 ÷ 6?', choices: ['4','5','6','7'], correctAnswer: '6',
    solution: '36 ÷ 6 = 6'
  },
  {
    id: '221', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 5 x ___ = 35', choices: ['5','6','7','8'],
    correctAnswer: '7',
    solution: '5 x 7 = 35'
  },
  {
    id: '222', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: ___ ÷ 4 = 9', choices: ['32','36','40','44'],
    correctAnswer: '36',
    solution: '36 ÷ 4 = 9'
  },
  {
    id: '223', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 8 x 7?', choices: ['54','55','56','57'],
    correctAnswer: '56',
    solution: '8 x 7 = 56'
  },
  {
    id: '224', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 72 ÷ 8?', choices: ['8','9','10','11'], correctAnswer: '9',
    solution: '72 ÷ 8 = 9'
  },
  {
    id: '225', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 6 x 9?', choices: ['52','53','54','55'],
    correctAnswer: '54',
    solution: '6 x 9 = 54'
  },

  // === Place Value (226–237) ===
  {
    id: '226', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 3 in 348?', choices: ['3','30','300','3,000'],
    correctAnswer: '300',
    solution: '3 is in the hundreds place'
  },
  {
    id: '227', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 7 in 572?', choices: ['7','70','700','7,000'],
    correctAnswer: '70',
    solution: '7 is in the tens place'
  },
  {
    id: '228', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Round 246 to the nearest ten.', choices: ['240','245','246','250'],
    correctAnswer: '250',
    solution: 'Ones digit is 6, so round up'
  },
  {
    id: '229', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Round 572 to the nearest hundred.', choices: ['500','600','570','580'],
    correctAnswer: '600',
    solution: 'Tens digit is 7 (≥5), so round up'
  },
  {
    id: '230', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Which number has a 9 in the tens place?', choices: ['391','912','498','729'],
    correctAnswer: '498',
    solution: 'In 498, 9 is in the tens place'
  },
  {
    id: '231', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Write 427 in expanded form.', choices: ['400+20+7','40+27','427','4+2+7'],
    correctAnswer: '400+20+7',
    solution: '427 = 400 + 20 + 7'
  },
  {
    id: '232', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Which is greater: 389 or 398?', choices: ['389','398'],
    correctAnswer: '398',
    solution: '398 is greater than 389'
  },
  {
    id: '233', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 843 to the nearest ten.', choices: ['840','843','850','800'],
    correctAnswer: '840',
    solution: 'Ones digit is 3 (<5), round down'
  },
  {
    id: '234', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 843 to the nearest hundred.', choices: ['800','840','850','900'],
    correctAnswer: '800',
    solution: 'Tens digit is 4 (<5), so round down to 800'
  },
  {
    id: '235', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the smallest 3-digit number?', choices: ['100','101','110','111'],
    correctAnswer: '100',
    solution: '100 is the smallest 3-digit number'
  },
  {
    id: '236', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 2-digit number?', choices: ['98','99','100','101'],
    correctAnswer: '99',
    solution: '99 is the largest 2-digit number'
  },
  {
    id: '237', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'Which digit is in the tens place of 762?', choices: ['6','2','7','0'],
    correctAnswer: '6',
    solution: '762 has 7 in hundreds, 6 in tens, 2 in ones'
  },

  // === Measurement (238–250) ===
  {
    id: '238', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 1 hour?', choices: ['30','45','60','90'],
    correctAnswer: '60',
    solution: '1 hour = 60 minutes'
  },
  {
    id: '239', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many days are in a week?', choices: ['5','6','7','8'],
    correctAnswer: '7',
    solution: 'There are 7 days in a week'
  },
  {
    id: '240', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many inches are in a foot?', choices: ['10','11','12','13'],
    correctAnswer: '12',
    solution: '1 foot = 12 inches'
  },
  {
    id: '241', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many feet are in a yard?', choices: ['2','3','4','5'],
    correctAnswer: '3',
    solution: '1 yard = 3 feet'
  },
  {
    id: '242', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many cents are in a dollar?', choices: ['25','50','75','100'],
    correctAnswer: '100',
    solution: '100 cents = 1 dollar'
  },
  {
    id: '243', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many hours are in 2 days?', choices: ['24','36','48','72'],
    correctAnswer: '48',
    solution: '2 x 24 = 48 hours'
  },
  {
    id: '244', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many centimeters are in 1 meter?', choices: ['10','100','1,000','10,000'],
    correctAnswer: '100',
    solution: '1 meter = 100 centimeters'
  },
  {
    id: '245', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many ounces are in a pound?', choices: ['8','12','16','20'],
    correctAnswer: '16',
    solution: '1 pound = 16 ounces'
  },
  {
    id: '246', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many months are in a year?', choices: ['10','11','12','13'],
    correctAnswer: '12',
    solution: '1 year = 12 months'
  },
  {
    id: '247', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'How many quarters make $2?', choices: ['4','6','8','10'],
    correctAnswer: '8',
    solution: '1 quarter = 25¢, $2 = 200¢, 200 ÷ 25 = 8 quarters'
  },
  {
    id: '248', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'How many hours are in 3 days?', choices: ['48','60','72','84'],
    correctAnswer: '72',
    solution: '3 x 24 = 72 hours'
  },
  {
    id: '249', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'How many minutes are in 5 hours?', choices: ['200','240','300','360'],
    correctAnswer: '300',
    solution: '5 x 60 = 300 minutes'
  },
  {
    id: '250', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'How many days are in 2 weeks?', choices: ['10','12','14','15'],
    correctAnswer: '14',
    solution: '2 x 7 = 14 days'
  },

   { id: '301', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 234 + 157?', choices: ['381','391','401','411'], correctAnswer: '391',
    solution: '234 + 157 = 391' },
  { id: '302', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 500 - 276?', choices: ['214','224','234','244'], correctAnswer: '224',
    solution: '500 - 276 = 224' },
  { id: '303', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'Which is greater: 482 or 428?', choices: ['482','428'], correctAnswer: '482',
    solution: '482 > 428' },
  { id: '304', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 763 + 129?', choices: ['872','882','892','902'], correctAnswer: '892',
    solution: '763 + 129 = 892' },
  { id: '305', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 602 - 458?', choices: ['134','144','154','164'], correctAnswer: '144',
    solution: '602 - 458 = 144' },
  { id: '306', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'What number comes just before 1,000?', choices: ['999','990','1001','100'], correctAnswer: '999',
    solution: 'Number before 1000 is 999' },
  { id: '307', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'Round 768 to the nearest hundred.', choices: ['700','750','760','800'], correctAnswer: '800',
    solution: 'Tens digit is 6 (≥5), round up -> 800' },
  { id: '308', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'Round 872 to the nearest ten.', choices: ['870','872','880','900'], correctAnswer: '870',
    solution: 'Ones digit is 2 (<5), round down -> 870' },

  // === Operations & Algebraic Thinking (309–317)
  { id: '309', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 6 x 7?', choices: ['40','41','42','43'], correctAnswer: '42',
    solution: '6 x 7 = 42' },
  { id: '310', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 56 ÷ 8?', choices: ['6','7','8','9'], correctAnswer: '7',
    solution: '56 ÷ 8 = 7' },
  { id: '311', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 9 x 5?', choices: ['40','45','50','55'], correctAnswer: '45',
    solution: '9 x 5 = 45' },
  { id: '312', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 64 ÷ 4?', choices: ['14','15','16','17'], correctAnswer: '16',
    solution: '64 ÷ 4 = 16' },
  { id: '313', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Solve: 5 x ___ = 60', choices: ['10','11','12','13'], correctAnswer: '12',
    solution: '5 x 12 = 60' },
  { id: '314', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Solve: ___ ÷ 9 = 8', choices: ['63','72','81','90'], correctAnswer: '72',
    solution: '72 ÷ 9 = 8' },
  { id: '315', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 11 x 12?', choices: ['120','121','132','144'], correctAnswer: '132',
    solution: '11 x 12 = 132' },
  { id: '316', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 144 ÷ 12?', choices: ['10','11','12','13'], correctAnswer: '12',
    solution: '144 ÷ 12 = 12' },
  { id: '317', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 8 x 9?', choices: ['70','71','72','73'], correctAnswer: '72',
    solution: '8 x 9 = 72' },

  // === Place Value (318–325)
  { id: '318', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 6 in 764?', choices: ['6','60','600','6,000'], correctAnswer: '60',
    solution: '6 is in the tens place' },
  { id: '319', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 8 in 8,524?', choices: ['8','80','800','8,000'], correctAnswer: '8,000',
    solution: '8 is in the thousands place' },
  { id: '320', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'Write 592 in expanded form.', choices: ['500+90+2','50+92','5+9+2','590+2'], correctAnswer: '500+90+2',
    solution: '592 = 500 + 90 + 2' },
  { id: '321', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 4,678 to the nearest hundred.', choices: ['4,600','4,700','4,800','5,000'], correctAnswer: '4,700',
    solution: 'Tens digit is 7 (≥5), round up' },
  { id: '322', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 8,145 to the nearest thousand.', choices: ['8,000','8,100','8,200','9,000'], correctAnswer: '8,000',
    solution: 'Hundreds digit is 1 (<5), round down' },
  { id: '323', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Which number has a 5 in the tens place?', choices: ['458','542','625','759'], correctAnswer: '542',
    solution: '542 has 5 in the tens place' },
  { id: '324', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the smallest 4-digit number?', choices: ['1000','1001','1010','1100'], correctAnswer: '1000',
    solution: '1000 is the smallest 4-digit number' },
  { id: '325', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 3-digit number?', choices: ['999','1000','1001','990'], correctAnswer: '999',
    solution: '999 is the largest 3-digit number' },

  // === Fractions (326–334)
  { id: '326', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equal to 1/2?', choices: ['2/3','3/6','2/5','3/4'], correctAnswer: '3/6',
    solution: '3 ÷ 6 = 1/2' },
  { id: '327', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 1/4 + 1/4?', choices: ['1/2','1/3','2/5','2/3'], correctAnswer: '1/2',
    solution: '1/4 + 1/4 = 2/4 = 1/2' },
  { id: '328', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 3/4 - 1/4?', choices: ['1/4','2/4','2/3','3/3'], correctAnswer: '2/4',
    solution: '3/4 - 1/4 = 2/4 = 1/2' },
  { id: '329', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'Which is greater: 2/3 or 3/5?', choices: ['2/3','3/5'], correctAnswer: '2/3',
    solution: '2/3 = 0.67; 3/5 = 0.6' },
  { id: '330', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 1/3 + 1/6?', choices: ['1/6','1/2','2/3','5/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6 -> 2/6 + 1/6 = 3/6 = 1/2' },
  { id: '331', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 2/3 - 1/6?', choices: ['1/2','1/3','2/6','3/6'], correctAnswer: '1/2',
    solution: '2/3 = 4/6 -> 4/6 - 1/6 = 3/6 = 1/2' },
  { id: '332', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 6/8.', choices: ['3/4','2/3','4/6','1/2'], correctAnswer: '3/4',
    solution: 'Divide numerator and denominator by 2 -> 3/4' },
  { id: '333', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 2/5 + 3/10?', choices: ['1/2','3/5','4/5','5/5'], correctAnswer: '4/5',
    solution: '2/5 = 4/10 -> 4/10 + 3/10 = 7/10' },
  { id: '334', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 5/6 - 1/3?', choices: ['1/6','2/6','3/6','4/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6 -> 5/6 - 2/6 = 3/6 = 1/2' },

  // === Geometry (335–343)
  { id: '335', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a hexagon have?', choices: ['5','6','7','8'], correctAnswer: '6',
    solution: 'Hexa = 6' },
  { id: '336', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a rectangle have?', choices: ['2','3','4','5'], correctAnswer: '4',
    solution: 'A rectangle has 4 right angles' },
  { id: '337', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does an octagon have?', choices: ['6','7','8','9'], correctAnswer: '8',
    solution: 'Octa = 8' },
  { id: '338', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'What is the perimeter of a square with side length 5?', choices: ['15','20','25','30'], correctAnswer: '20',
    solution: 'Perimeter = 4 x 5 = 20' },
  { id: '339', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'What is the area of a rectangle with length 7 and width 4?', choices: ['11','21','28','35'], correctAnswer: '28',
    solution: 'Area = 7 x 4 = 28' },
  { id: '340', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'How many equal sides does an equilateral triangle have?', choices: ['1','2','3','4'], correctAnswer: '3',
    solution: 'Equilateral triangle has 3 equal sides' },
  { id: '341', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'What is the perimeter of a triangle with sides 6, 7, and 8?', choices: ['19','20','21','22'], correctAnswer: '21',
    solution: '6 + 7 + 8 = 21' },
  { id: '342', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'How many degrees are in a straight angle?', choices: ['45°','90°','180°','360°'], correctAnswer: '180°',
    solution: 'A straight angle = 180°' },
  { id: '343', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'What is the area of a square with side length 9?', choices: ['72','81','90','99'], correctAnswer: '81',
    solution: 'Area = 9 x 9 = 81' },

  // === Measurement (344–352)
  { id: '344', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'How many inches are in 2 feet?', choices: ['12','18','24','30'], correctAnswer: '24',
    solution: '2 x 12 = 24 inches' },
  { id: '345', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 3 hours?', choices: ['120','150','180','210'], correctAnswer: '180',
    solution: '3 x 60 = 180 minutes' },
  { id: '346', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'How many days are in February (non-leap year)?', choices: ['28','29','30','31'], correctAnswer: '28',
    solution: 'February usually has 28 days' },
  { id: '347', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many cups are in 1 quart?', choices: ['2','3','4','5'], correctAnswer: '4',
    solution: '1 quart = 4 cups' },
  { id: '348', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many ounces are in 2 pounds?', choices: ['16','24','28','32'], correctAnswer: '32',
    solution: '1 lb = 16 oz -> 2 lb = 32 oz' },
  { id: '349', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many milliliters are in 3 liters?', choices: ['300','3000','30,000','3'], correctAnswer: '3000',
    solution: '1 L = 1000 mL -> 3 L = 3000 mL' },
  { id: '350', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'How many minutes are in 1/2 hour?', choices: ['15','20','25','30'], correctAnswer: '30',
    solution: 'Half of 60 minutes is 30 minutes' },
  { id: '351', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'How many yards are in 9 feet?', choices: ['2','3','4','5'], correctAnswer: '3',
    solution: '3 feet = 1 yard -> 9 ÷ 3 = 3 yards' },
  { id: '352', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'How many hours are in 5 days?', choices: ['100','108','120','144'], correctAnswer: '120',
    solution: '5 x 24 = 120 hours' }
];
