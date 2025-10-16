import { Question } from '../types';

export const grade7Questions: Question[] = [
{
    id: '8',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 3,
    questionText: 'If 3(x - 2) = 15, what is x?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: '3(x - 2) = 15 -> x - 2 = 5 -> x = 7'
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

{
    id: '30',
    gradeMin: 7,
    gradeMax: 8,
    domain: 'Exponents & Roots',
    difficulty: 3,
    questionText: 'What is square root of 64?',
    choices: ['6', '8', '10', '12'],
    correctAnswer: '8',
    solution: '8 x 8 = 64, so square root of 64 = 8'
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
    id: '78', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 2,
    questionText: 'What is (-5)^2?', choices: ['-25', '0', '5', '25'], correctAnswer: '25',
    solution: 'Square of -5 is positive 25.'
  },

{
    id: '79', gradeMin: 7, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'Evaluate: 8 - 2^3 + 4', choices: ['0', '2', '4', '8'], correctAnswer: '4',
    solution: 'Exponent first: 2^3=8 -> 8-8+4=4.'
  },

{
    id: '59', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'For y = 2x - 3, what is y when x = 4?', choices: ['3', '5', '7', '11'], correctAnswer: '5',
    solution: '2(4) - 3 = 5.'
  },

{
    id: '60', gradeMin: 7, gradeMax: 8, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve the inequality: x + 7 < 12', choices: ['x < 5', 'x > 5', 'x < -5', 'x > -5'], correctAnswer: 'x < 5',
    solution: 'Subtract 7 from both sides.'
  },

{
    id: '62', gradeMin: 7, gradeMax: 8, domain: 'Geometry', difficulty: 3,
    questionText: 'Find the circumference of a circle with radius 7 (use pi = 3.14).', choices: ['21.98', '43.96', '49.00', '153.86'], correctAnswer: '43.96',
    solution: 'C = 2pir = 2 x 3.14 x 7 = 43.96.'
  },

{
    id: '65', gradeMin: 7, gradeMax: 8, domain: 'Geometry', difficulty: 3,
    questionText: 'In a right triangle with legs 6 and 8, what is the hypotenuse?', choices: ['7', '9', '10', '12'], correctAnswer: '10',
    solution: 'c = √(6²+8²) = √(36+64) = √100 = 10.'
  },

{
    id: '71', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'What is the y-intercept of y = -3x + 4?', choices: ['-3', '4', '(-3, 0)', '(0, -3)'], correctAnswer: '4',
    solution: 'In y = mx + b, b = 4 is the y-intercept.'
  },

{
    id: '72', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'If f(x) = x² - 5x + 6, find f(3).', choices: ['0', '2', '3', '6'], correctAnswer: '0',
    solution: '9 - 15 + 6 = 0.'
  },

{
    id: '73', gradeMin: 7, gradeMax: 8, domain: 'Functions', difficulty: 2,
    questionText: 'If g(x) = 3x, and g(x) = 24, what is x?', choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '3x = 24 -> x = 8.'
  },

{
    id: '74', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 1,
    questionText: 'What is √81?', choices: ['6', '8', '9', '12'], correctAnswer: '9',
    solution: '9 x 9 = 81.'
  },

{
    id: '75', gradeMin: 7, gradeMax: 8, domain: 'Exponents & Roots', difficulty: 3,
    questionText: 'Write 0.006 in scientific notation.', choices: ['6 x 10^3', '6 x 10^-3', '6 x 10^-2', '6 x 10^-4'], correctAnswer: '6 x 10^-3',
    solution: 'Move decimal 3 places to the right -> 10^-3.'
  },

{
    id: '77', gradeMin: 7, gradeMax: 8, domain: 'Probability', difficulty: 3,
    questionText: 'Probability of drawing a queen from a standard deck?', choices: ['1/52', '1/26', '1/13', '1/4'], correctAnswer: '1/13',
    solution: '4 queens out of 52 cards: 4/52 = 1/13.'
  },

{
    id: '7th-1', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is the value of 2,500 - 1,375?',
    choices: ['1,125', '1,135', '1,145', '1,155'], correctAnswer: '1,125',
    solution: '2,500 - 1,375 = 1,125'
  },

{
    id: '7th-2', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 18 x 14?',
    choices: ['242', '252', '262', '272'], correctAnswer: '252',
    solution: '18 x 14 = 252'
  },

{
    id: '7th-3', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1,
    questionText: 'Round 8,349 to the nearest hundred.',
    choices: ['8,300', '8,400', '8,350', '8,500'], correctAnswer: '8,300',
    solution: 'Tens digit is 4 (<5), round down to 8,300'
  },

{
    id: '7th-4', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'A store sold 4,567 pencils in May and 3,789 pencils in June. How many pencils did they sell in total?',
    choices: ['8,346', '8,356', '8,366', '8,376'], correctAnswer: '8,356',
    solution: '4,567 + 3,789 = 8,356'
  },

{
    id: '7th-5', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 9,000 - 4,678?',
    choices: ['4,222', '4,322', '4,332', '4,342'], correctAnswer: '4,322',
    solution: '9,000 - 4,678 = 4,322'
  },

{
    id: '7th-6', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is greater: 8,654 or 8,456?',
    choices: ['8,654', '8,456'], correctAnswer: '8,654',
    solution: '8,654 > 8,456'
  },

{
    id: '7th-7', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the sum of 3,345 and 4,456?',
    choices: ['7,801', '7,811', '7,821', '7,831'], correctAnswer: '7,801',
    solution: '3,345 + 4,456 = 7,801'
  },

{
    id: '7th-8', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3,
    questionText: 'A school has 4,456 students. If 1,234 are in grades 1-3, how many are in grades 4-7?',
    choices: ['3,222', '3,232', '3,242', '3,252'], correctAnswer: '3,222',
    solution: '4,456 - 1,234 = 3,222'
  },

{
    id: '7th-9', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 5,600 divided by 56?',
    choices: ['90', '95', '100', '105'], correctAnswer: '100',
    solution: '5,600 ÷ 56 = 100'
  },

{
    id: '7th-10', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bus travels 3,600 miles in 12 days. How many miles does it travel per day?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '3,600 ÷ 12 = 300'
  },

{
    id: '7th-11', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is the product of 32 and 17?',
    choices: ['534', '544', '554', '564'], correctAnswer: '544',
    solution: '32 x 17 = 544'
  },

{
    id: '7th-12', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the difference between 5,000 and 1,234?',
    choices: ['3,766', '3,776', '3,786', '3,796'], correctAnswer: '3,766',
    solution: '5,000 - 1,234 = 3,766'
  },

{
    id: '7th-13', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'Round 9,849 to the nearest thousand.',
    choices: ['9,000', '10,000', '9,800', '9,900'], correctAnswer: '10,000',
    solution: 'Hundreds digit is 8 (>=5), round up to 10,000'
  },

{
    id: '7th-14', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 14 x 8?',
    choices: ['102', '112', '122', '132'], correctAnswer: '112',
    solution: '14 x 8 = 112'
  },

{
    id: '7th-15', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 12 x 12?',
    choices: ['124', '132', '144', '154'], correctAnswer: '144',
    solution: '12 x 12 = 144'
  },

{
    id: '7th-16', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'A baker made 120 cupcakes and wants to put them equally into 15 boxes. How many cupcakes will go in each box?',
    choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '120 ÷ 15 = 8'
  },

{
    id: '7th-17', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is the value of 8 x 13?',
    choices: ['94', '104', '114', '124'], correctAnswer: '104',
    solution: '8 x 13 = 104'
  },

{
    id: '7th-18', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 11 x ___ = 121',
    choices: ['9', '10', '11', '12'], correctAnswer: '11',
    solution: '11 x 11 = 121'
  },

{
    id: '7th-19', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A class has 63 students. If they are divided into 7 equal groups, how many students are in each group?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '63 ÷ 7 = 9'
  },

{
    id: '7th-20', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 108 ÷ 9?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '108 ÷ 9 = 12'
  },

{
    id: '7th-21', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'If 9 x 8 = 72, what does 8 x 9 equal?',
    choices: ['72', '81', '64', '96'], correctAnswer: '72',
    solution: 'Multiplication is commutative: 8 x 9 = 9 x 8 = 72'
  },

{
    id: '7th-22', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A school has 8 classes with 28 students each. How many students are there in total?',
    choices: ['214', '224', '234', '244'], correctAnswer: '224',
    solution: '8 x 28 = 224'
  },

{
    id: '7th-23', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number: ___ ÷ 12 = 8',
    choices: ['88', '96', '100', '104'], correctAnswer: '96',
    solution: '96 ÷ 12 = 8'
  },

{
    id: '7th-24', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A store sold 182 apples in 14 days. How many apples did they sell per day?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '182 ÷ 14 = 13'
  },

{
    id: '7th-25', gradeMin: 7, gradeMax: 7, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 196 divided by 14?',
    choices: ['12', '13', '14', '15'], correctAnswer: '14',
    solution: '196 ÷ 14 = 14'
  },

{
    id: '7th-26', gradeMin: 7, gradeMax: 7, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 8 in 8,432?',
    choices: ['8', '80', '800', '8,000'], correctAnswer: '8,000',
    solution: '8 is in the thousands place'
  },

{
    id: '7th-27', gradeMin: 7, gradeMax: 7, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 6,210 written in expanded form?',
    choices: ['6,000+200+10', '6,000+200+10+0', '6,000+100+10', '6,000+100+20'], correctAnswer: '6,000+200+10',
    solution: '6,210 = 6,000 + 200 + 10'
  },

{
    id: '7th-28', gradeMin: 7, gradeMax: 7, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 10,489 to the nearest thousand.',
    choices: ['10,000', '10,500', '11,000', '11,500'], correctAnswer: '10,000',
    solution: 'Hundreds digit is 4 (<5), round down to 10,000'
  },

{
    id: '7th-29', gradeMin: 7, gradeMax: 7, domain: 'Place Value', difficulty: 2,
    questionText: 'Which digit is in the hundreds place of 9,482?',
    choices: ['4', '6', '8', '2'], correctAnswer: '4',
    solution: 'Hundreds place is 4'
  },

{
    id: '7th-30', gradeMin: 7, gradeMax: 7, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 7-digit number?',
    choices: ['9,999,999', '9,999,900', '9,999,990', '9,999,909'], correctAnswer: '9,999,999',
    solution: '9,999,999 is the largest 7-digit number'
  },

{
    id: '7th-31', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 3/7 + 2/7?',
    choices: ['4/7', '5/7', '6/7', '1'], correctAnswer: '5/7',
    solution: '3/7 + 2/7 = 5/7'
  },

{
    id: '7th-32', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 8/16?',
    choices: ['1/2', '2/3', '3/4', '1/3'], correctAnswer: '1/2',
    solution: '8/16 = 1/2'
  },

{
    id: '7th-33', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 7/8 - 1/4?',
    choices: ['5/8', '1/2', '2/3', '3/8'], correctAnswer: '5/8',
    solution: '1/4 = 2/8, so 7/8 - 2/8 = 5/8'
  },

{
    id: '7th-34', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 21/28.',
    choices: ['2/3', '3/4', '1/2', '4/6'], correctAnswer: '3/4',
    solution: '21/28 = 3/4'
  },

{
    id: '7th-35', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 5/6 x 3/5?',
    choices: ['1/2', '1/6', '3/10', '1/4'], correctAnswer: '1/2',
    solution: '5/6 x 3/5 = 15/30 = 1/2'
  },

{
    id: '7th-36', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 0.8 to a percent.',
    choices: ['8%', '80%', '0.8%', '800%'], correctAnswer: '80%',
    solution: '0.8 = 80%'
  },

{
    id: '7th-37', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'What is 60% of 200?',
    choices: ['60', '100', '120', '140'], correctAnswer: '120',
    solution: '0.6 x 200 = 120'
  },

{
    id: '7th-38', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Convert 0.25 to a fraction.',
    choices: ['1/25', '1/4', '25/100', '1/8'], correctAnswer: '1/4',
    solution: '0.25 = 1/4'
  },

{
    id: '7th-39', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 15% of 320?',
    choices: ['48', '50', '60', '80'], correctAnswer: '48',
    solution: '0.15 x 320 = 48'
  },

{
    id: '7th-40', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A $200 item is discounted by 15%. What is the sale price?',
    choices: ['$170', '$175', '$180', '$185'], correctAnswer: '$170',
    solution: '15% of $200 is $30; $200 - $30 = $170'
  },

{
    id: '7th-41', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a hexadecagon have?',
    choices: ['14', '15', '16', '17'], correctAnswer: '16',
    solution: 'A hexadecagon has 16 sides'
  },

{
    id: '7th-42', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a square have?',
    choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A square has 4 right angles'
  },

{
    id: '7th-43', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 2,
    questionText: 'A square has a side length of 18 cm. What is its area?',
    choices: ['324 cm²', '334 cm²', '344 cm²', '354 cm²'], correctAnswer: '324 cm²',
    solution: 'Area = 18 x 18 = 324 cm²'
  },

{
    id: '7th-44', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 2,
    questionText: 'A triangle has angles of 90°, 45°, and ___. What is the missing angle?',
    choices: ['30°', '45°', '60°', '90°'], correctAnswer: '45°',
    solution: 'Sum of angles in triangle = 180°. 180 - 90 - 45 = 45°'
  },

{
    id: '7th-45', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 3,
    questionText: 'A rectangle is 20 cm long and 9 cm wide. What is its perimeter?',
    choices: ['54 cm', '56 cm', '58 cm', '60 cm'], correctAnswer: '58 cm',
    solution: 'Perimeter = 2 x (20 + 9) = 2 x 29 = 58 cm'
  },

{
    id: '7th-46', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 9 meters?',
    choices: ['90', '900', '9,000', '90,000'], correctAnswer: '900',
    solution: '1 meter = 100 cm, so 9 x 100 = 900'
  },

{
    id: '7th-47', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 9 hours?',
    choices: ['540', '560', '580', '600'], correctAnswer: '540',
    solution: '9 x 60 = 540'
  },

{
    id: '7th-48', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 80 meters long. How many centimeters is that?',
    choices: ['800', '8,000', '80,000', '800,000'], correctAnswer: '8,000',
    solution: '80 x 100 = 8,000'
  },

{
    id: '7th-49', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 10 kilograms?',
    choices: ['1,000', '10,000', '100,000', '1,000,000'], correctAnswer: '10,000',
    solution: '10 x 1,000 = 10,000'
  },

{
    id: '7th-50', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 3,
    questionText: 'A car travels 840 kilometers in 14 hours. What is its average speed in km/h?',
    choices: ['50', '55', '60', '65'], correctAnswer: '60',
    solution: '840 ÷ 14 = 60 km/h'
  },

{
    id: '7th-51', gradeMin: 7, gradeMax: 7, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the mean of 14, 18, and 22?',
    choices: ['16', '18', '20', '22'], correctAnswer: '18',
    solution: '(14 + 18 + 22) ÷ 3 = 54 ÷ 3 = 18'
  },

{
    id: '7th-52', gradeMin: 7, gradeMax: 7, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the median of 9, 13, 17, 21, 25?',
    choices: ['13', '17', '21', '25'], correctAnswer: '17',
    solution: 'The middle number is 17'
  },

{
    id: '7th-53', gradeMin: 7, gradeMax: 7, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the mode of 5, 7, 7, 9, 11?',
    choices: ['5', '7', '9', '11'], correctAnswer: '7',
    solution: '7 appears most often'
  },

{
    id: '7th-54', gradeMin: 7, gradeMax: 7, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the range of 12, 16, 20, 24, 30?',
    choices: ['16', '17', '18', '19'], correctAnswer: '18',
    solution: '30 - 12 = 18'
  },

{
    id: '7th-55', gradeMin: 7, gradeMax: 7, domain: 'Statistics', difficulty: 3,
    questionText: 'The scores on a test are 86, 91, 99, 91, 94. What is the mode?',
    choices: ['86', '91', '94', '99'], correctAnswer: '91',
    solution: '91 appears most often'
  },

{
    id: '7th-56', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2,
    questionText: 'A school bus has 70 seats. If 57 are occupied, how many are empty?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '70 - 57 = 13'
  },

{
    id: '7th-57', gradeMin: 7, gradeMax: 7, domain: 'Measurement', difficulty: 2,
    questionText: 'A water bottle holds 1,500 milliliters. How many liters is that?',
    choices: ['1.5', '15', '150', '1,500'], correctAnswer: '1.5',
    solution: '1 liter = 1,000 mL, so 1,500 ÷ 1,000 = 1.5 L'
  },

{
    id: '7th-58', gradeMin: 7, gradeMax: 7, domain: 'Geometry', difficulty: 2,
    questionText: 'How many faces does a rectangular prism have?',
    choices: ['4', '5', '6', '7'], correctAnswer: '6',
    solution: 'A rectangular prism has 6 faces'
  },

{
    id: '7th-59', gradeMin: 7, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 40% of 350?',
    choices: ['120', '130', '140', '150'], correctAnswer: '140',
    solution: '0.40 x 350 = 140'
  },

{
    id: '7th-60', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 5/9 + 3/9?',
    choices: ['7/9', '8/9', '6/9', '1'], correctAnswer: '8/9',
    solution: '5/9 + 3/9 = 8/9'
  },

{ id: '7th-61', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2, questionText: 'What is the value of 4,000 - 2,345?', choices: ['1,655', '1,665', '1,675', '1,685'], correctAnswer: '1,655', solution: '4,000 - 2,345 = 1,655' },

{ id: '7th-62', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2, questionText: 'What is 23 x 12?', choices: ['256', '266', '276', '286'], correctAnswer: '276', solution: '23 x 12 = 276' },

{ id: '7th-63', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 1, questionText: 'Round 7,249 to the nearest hundred.', choices: ['7,200', '7,300', '7,250', '7,400'], correctAnswer: '7,200', solution: 'Tens digit is 4 (<5), round down to 7,200' },

{ id: '7th-64', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3, questionText: 'A store sold 2,345 pencils in May and 3,789 pencils in June. How many pencils did they sell in total?', choices: ['6,134', '6,144', '6,154', '6,164'], correctAnswer: '6,134', solution: '2,345 + 3,789 = 6,134' },

{ id: '7th-65', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2, questionText: 'What is 7,000 - 3,678?', choices: ['3,322', '3,332', '3,342', '3,352'], correctAnswer: '3,322', solution: '7,000 - 3,678 = 3,322' },

{ id: '7th-66', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2, questionText: 'Which is greater: 6,654 or 6,456?', choices: ['6,654', '6,456'], correctAnswer: '6,654', solution: '6,654 > 6,456' },

{ id: '7th-67', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 2, questionText: 'What is the sum of 1,345 and 2,456?', choices: ['3,801', '3,811', '3,821', '3,831'], correctAnswer: '3,801', solution: '1,345 + 2,456 = 3,801' },

{ id: '7th-68', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3, questionText: 'A school has 2,456 students. If 1,234 are in grades 1-3, how many are in grades 4-7?', choices: ['1,222', '1,232', '1,242', '1,252'], correctAnswer: '1,222', solution: '2,456 - 1,234 = 1,222' },

{ id: '7th-69', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3, questionText: 'What is 3,600 divided by 36?', choices: ['90', '95', '100', '105'], correctAnswer: '100', solution: '3,600 ÷ 36 = 100' },

{ id: '7th-70', gradeMin: 7, gradeMax: 7, domain: 'Number Sense', difficulty: 3, questionText: 'A bus travels 1,800 miles in 6 days. How many miles does it travel per day?', choices: ['200', '250', '300', '350'], correctAnswer: '300', solution: '1,800 ÷ 6 = 300' },

{ id: '7th-100', gradeMin: 7, gradeMax: 7, domain: 'Fractions', difficulty: 2, questionText: 'What is 2/5 + 3/5?', choices: ['4/5', '5/5', '1', '2'], correctAnswer: '1', solution: '2/5 + 3/5 = 5/5 = 1' },

];

export default grade7Questions;
