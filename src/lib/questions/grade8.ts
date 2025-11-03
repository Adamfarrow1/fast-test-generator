import { Question } from '../types';

export const grade8Questions: Question[] = [
{
    id: '9',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 4,
    questionText: 'Solve: -2x + 7 = -5',
    choices: ['6', '5', '1', '-6'],
    correctAnswer: '6',
    solution: '-2x + 7 = -5 -> -2x = -12 -> x = 6'
  },

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

{
    id: '38',
    gradeMin: 8, gradeMax: 8,
    domain: 'Geometry Transformations', difficulty: 4,
    questionText: 'A dilation with scale factor 2 will make the shape’s **area** how many times larger?',
    choices: ['2 times', '3 times', '4 times', '8 times'],
    correctAnswer: '4 times',
    solution: 'Area scales by the square of the scale factor: 2² = 4.'
  },

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
    solution: 'Using the Pythagorean identity sin²(θ) + cos²(θ) = 1: cos(θ) = sqrt(1 - 0.8²) = 0.6'
  },

{
    id: '58', gradeMin: 8, gradeMax: 8, domain: 'Algebra', difficulty: 3,
    questionText: 'Find the slope between (1, 3) and (5, 11).', choices: ['1', '2', '3', '4'], correctAnswer: '2',
    solution: 'Δy/Δx = (11-3)/(5-1) = 8/4 = 2.'
  },

{
    id: '8th-1', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is the value of 3,200 - 1,875?',
    choices: ['1,325', '1,335', '1,345', '1,355'], correctAnswer: '1,325',
    solution: '3,200 - 1,875 = 1,325'
  },

{
    id: '8th-2', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 21 x 13?',
    choices: ['263', '273', '283', '293'], correctAnswer: '273',
    solution: '21 x 13 = 273'
  },

{
    id: '8th-3', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1,
    questionText: 'Round 9,749 to the nearest hundred.',
    choices: ['9,700', '9,800', '9,750', '9,900'], correctAnswer: '9,700',
    solution: 'Tens digit is 4 (<5), round down to 9,700'
  },

{
    id: '8th-4', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'A store sold 5,678 pencils in May and 4,789 pencils in June. How many pencils did they sell in total?',
    choices: ['10,457', '10,467', '10,477', '10,487'], correctAnswer: '10,467',
    solution: '5,678 + 4,789 = 10,467'
  },

{
    id: '8th-5', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 10,000 - 5,678?',
    choices: ['4,222', '4,322', '4,332', '4,342'], correctAnswer: '4,322',
    solution: '10,000 - 5,678 = 4,322'
  },

{
    id: '8th-6', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is greater: 9,654 or 9,456?',
    choices: ['9,654', '9,456'], correctAnswer: '9,654',
    solution: '9,654 > 9,456'
  },

{
    id: '8th-7', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the sum of 4,345 and 5,456?',
    choices: ['9,801', '9,811', '9,821', '9,831'], correctAnswer: '9,801',
    solution: '4,345 + 5,456 = 9,801'
  },

{
    id: '8th-8', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3,
    questionText: 'A school has 5,456 students. If 1,234 are in grades 1-3, how many are in grades 4-8?',
    choices: ['4,222', '4,232', '4,242', '4,252'], correctAnswer: '4,222',
    solution: '5,456 - 1,234 = 4,222'
  },

{
    id: '8th-9', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 6,400 divided by 64?',
    choices: ['90', '95', '100', '105'], correctAnswer: '100',
    solution: '6,400 ÷ 64 = 100'
  },

{
    id: '8th-10', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bus travels 4,800 miles in 16 days. How many miles does it travel per day?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '4,800 ÷ 16 = 300'
  },

{
    id: '8th-11', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is the product of 36 and 19?',
    choices: ['634', '644', '684', '694'], correctAnswer: '684',
    solution: '36 x 19 = 684'
  },

{
    id: '8th-12', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the difference between 6,000 and 1,234?',
    choices: ['4,766', '4,776', '4,786', '4,796'], correctAnswer: '4,766',
    solution: '6,000 - 1,234 = 4,766'
  },

{
    id: '8th-13', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'Round 10,849 to the nearest thousand.',
    choices: ['10,000', '11,000', '10,800', '10,900'], correctAnswer: '11,000',
    solution: 'Hundreds digit is 8 (>=5), round up to 11,000'
  },

{
    id: '8th-14', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 16 x 9?',
    choices: ['134', '144', '154', '164'], correctAnswer: '144',
    solution: '16 x 9 = 144'
  },

{
    id: '8th-15', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 13 x 13?',
    choices: ['159', '169', '179', '189'], correctAnswer: '169',
    solution: '13 x 13 = 169'
  },

{
    id: '8th-16', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'A baker made 144 cupcakes and wants to put them equally into 18 boxes. How many cupcakes will go in each box?',
    choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '144 ÷ 18 = 8'
  },

{
    id: '8th-17', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is the value of 9 x 14?',
    choices: ['116', '126', '136', '146'], correctAnswer: '126',
    solution: '9 x 14 = 126'
  },

{
    id: '8th-18', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 12 x ___ = 144',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '12 x 12 = 144'
  },

{
    id: '8th-19', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A class has 72 students. If they are divided into 8 equal groups, how many students are in each group?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '72 ÷ 8 = 9'
  },

{
    id: '8th-20', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 120 ÷ 10?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '120 ÷ 10 = 12'
  },

{
    id: '8th-21', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'If 10 x 7 = 70, what does 7 x 10 equal?',
    choices: ['70', '77', '80', '90'], correctAnswer: '70',
    solution: 'Multiplication is commutative: 7 x 10 = 10 x 7 = 70'
  },

{
    id: '8th-22', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A school has 9 classes with 30 students each. How many students are there in total?',
    choices: ['260', '270', '280', '290'], correctAnswer: '270',
    solution: '9 x 30 = 270'
  },

{
    id: '8th-23', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number: ___ ÷ 13 = 9',
    choices: ['99', '108', '117', '126'], correctAnswer: '117',
    solution: '117 ÷ 13 = 9'
  },

{
    id: '8th-24', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A store sold 208 apples in 16 days. How many apples did they sell per day?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '208 ÷ 16 = 13'
  },

{
    id: '8th-25', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 210 divided by 15?',
    choices: ['12', '13', '14', '15'], correctAnswer: '14',
    solution: '210 ÷ 15 = 14'
  },

{
    id: '8th-26', gradeMin: 8, gradeMax: 8, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 9 in 9,432?',
    choices: ['9', '90', '900', '9,000'], correctAnswer: '9,000',
    solution: '9 is in the thousands place'
  },

{
    id: '8th-27', gradeMin: 8, gradeMax: 8, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 7,210 written in expanded form?',
    choices: ['7,000+200+10', '7,000+200', '7,000+100+10', '7,000+100+20'], correctAnswer: '7,000+200+10',
    solution: '7,210 = 7,000 + 200 + 10'
  },

{
    id: '8th-28', gradeMin: 8, gradeMax: 8, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 11,489 to the nearest thousand.',
    choices: ['11,000', '11,500', '12,000', '12,500'], correctAnswer: '11,000',
    solution: 'Hundreds digit is 4 (<5), round down to 11,000'
  },

{
    id: '8th-29', gradeMin: 8, gradeMax: 8, domain: 'Place Value', difficulty: 2,
    questionText: 'Which digit is in the hundreds place of 10,482?',
    choices: ['4', '6', '8', '2'], correctAnswer: '4',
    solution: 'Hundreds place is 4'
  },

{
    id: '8th-30', gradeMin: 8, gradeMax: 8, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 8-digit number?',
    choices: ['99,999,999', '99,999,900', '99,999,990', '99,999,909'], correctAnswer: '99,999,999',
    solution: '99,999,999 is the largest 8-digit number'
  },

{
    id: '8th-31', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 4/9 + 2/9?',
    choices: ['4/9', '5/9', '2/3', '1'], correctAnswer: '2/3',
    solution: '4/9 + 2/9 = 6/9 = 2/3'
  },

{
    id: '8th-32', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 10/20?',
    choices: ['1/2', '2/3', '3/4', '1/3'], correctAnswer: '1/2',
    solution: '10/20 = 1/2'
  },

{
    id: '8th-33', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 9/10 - 1/5?',
    choices: ['7/10', '1/2', '2/3', '3/10'], correctAnswer: '7/10',
    solution: '1/5 = 2/10, so 9/10 - 2/10 = 7/10'
  },

{
    id: '8th-34', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 24/32.',
    choices: ['2/3', '3/4', '1/2', '4/6'], correctAnswer: '3/4',
    solution: '24/32 = 3/4'
  },

{
    id: '8th-35', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 3/4 x 2/3?',
    choices: ['1/2', '1/6', '3/10', '1/4'], correctAnswer: '1/2',
    solution: '3/4 x 2/3 = 6/12 = 1/2'
  },

{
    id: '8th-36', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 0.9 to a percent.',
    choices: ['9%', '90%', '0.9%', '900%'], correctAnswer: '90%',
    solution: '0.9 = 90%'
  },

{
    id: '8th-37', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'What is 70% of 300?',
    choices: ['70', '140', '210', '240'], correctAnswer: '210',
    solution: '0.7 x 300 = 210'
  },

{
    id: '8th-38', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Convert 0.4 to a fraction.',
    choices: ['1/4', '2/5', '4/10', '2/3'], correctAnswer: '2/5',
    solution: '0.4 = 2/5'
  },

{
    id: '8th-39', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 35% of 400?',
    choices: ['120', '130', '140', '150'], correctAnswer: '140',
    solution: '0.35 x 400 = 140'
  },

{
    id: '8th-40', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A $300 item is discounted by 20%. What is the sale price?',
    choices: ['$220', '$230', '$240', '$250'], correctAnswer: '$240',
    solution: '20% of $300 is $60; $300 - $60 = $240'
  },

{
    id: '8th-41', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a heptadecagon have?',
    choices: ['15', '16', '17', '18'], correctAnswer: '17',
    solution: 'A heptadecagon has 17 sides'
  },

{
    id: '8th-42', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a parallelogram have?',
    choices: ['0', '1', '2', '4'], correctAnswer: '0',
    solution: 'A parallelogram has 0 right angles unless it is a rectangle or square'
  },

{
    id: '8th-43', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 2,
    questionText: 'A square has a side length of 20 cm. What is its area?',
    choices: ['400 cm²', '410 cm²', '420 cm²', '430 cm²'], correctAnswer: '400 cm²',
    solution: 'Area = 20 x 20 = 400 cm²'
  },

{
    id: '8th-44', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 2,
    questionText: 'A triangle has angles of 90°, 60°, and ___. What is the missing angle?',
    choices: ['20°', '30°', '40°', '50°'], correctAnswer: '30°',
    solution: 'Sum of angles in triangle = 180°. 180 - 90 - 60 = 30°'
  },

{
    id: '8th-45', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 3,
    questionText: 'A rectangle is 22 cm long and 10 cm wide. What is its perimeter?',
    choices: ['60 cm', '62 cm', '64 cm', '66 cm'], correctAnswer: '64 cm',
    solution: 'Perimeter = 2 x (22 + 10) = 2 x 32 = 64 cm'
  },

{
    id: '8th-46', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 10 meters?',
    choices: ['100', '1,000', '10,000', '100,000'], correctAnswer: '1,000',
    solution: '1 meter = 100 cm, so 10 x 100 = 1,000'
  },

{
    id: '8th-47', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 10 hours?',
    choices: ['600', '620', '640', '660'], correctAnswer: '600',
    solution: '10 x 60 = 600'
  },

{
    id: '8th-48', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 90 meters long. How many centimeters is that?',
    choices: ['900', '9,000', '90,000', '900,000'], correctAnswer: '9,000',
    solution: '90 x 100 = 9,000'
  },

{
    id: '8th-49', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 12 kilograms?',
    choices: ['1,200', '12,000', '120,000', '1,200,000'], correctAnswer: '12,000',
    solution: '12 x 1,000 = 12,000'
  },

{
    id: '8th-50', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 3,
    questionText: 'A car travels 960 kilometers in 16 hours. What is its average speed in km/h?',
    choices: ['50', '55', '60', '65'], correctAnswer: '60',
    solution: '960 ÷ 16 = 60 km/h'
  },

{
    id: '8th-51', gradeMin: 8, gradeMax: 8, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the mean of 16, 20, and 24?',
    choices: ['18', '20', '22', '24'], correctAnswer: '20',
    solution: '(16 + 20 + 24) ÷ 3 = 60 ÷ 3 = 20'
  },

{
    id: '8th-52', gradeMin: 8, gradeMax: 8, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the median of 11, 15, 19, 23, 27?',
    choices: ['15', '19', '23', '27'], correctAnswer: '19',
    solution: 'The middle number is 19'
  },

{
    id: '8th-53', gradeMin: 8, gradeMax: 8, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the mode of 6, 8, 8, 10, 12?',
    choices: ['6', '8', '10', '12'], correctAnswer: '8',
    solution: '8 appears most often'
  },

{
    id: '8th-54',
    gradeMin: 8,
    gradeMax: 8,
    domain: 'Statistics',
    difficulty: 2,
    questionText: 'What is the range of 14, 18, 22, 26, 34?',
    choices: ['16', '18', '20', '19'],
    correctAnswer: '20',
    solution: 'Range = max - min = 34 - 14 = 20.'
  },

{
    id: '8th-55', gradeMin: 8, gradeMax: 8, domain: 'Statistics', difficulty: 3,
    questionText: 'The scores on a test are 88, 93, 101, 93, 96. What is the mode?',
    choices: ['88', '93', '96', '101'], correctAnswer: '93',
    solution: '93 appears most often'
  },

{
    id: '8th-56', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2,
    questionText: 'A school bus has 80 seats. If 67 are occupied, how many are empty?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '80 - 67 = 13'
  },

{
    id: '8th-57', gradeMin: 8, gradeMax: 8, domain: 'Measurement', difficulty: 2,
    questionText: 'A water bottle holds 1,800 milliliters. How many liters is that?',
    choices: ['1.8', '18', '180', '1,800'], correctAnswer: '1.8',
    solution: '1 liter = 1,000 mL, so 1,800 ÷ 1,000 = 1.8 L'
  },

{
    id: '8th-58', gradeMin: 8, gradeMax: 8, domain: 'Geometry', difficulty: 2,
    questionText: 'How many faces does a pentagonal prism have?',
    choices: ['5', '6', '7', '10'], correctAnswer: '7',
    solution: 'A pentagonal prism has 7 faces'
  },

{
    id: '8th-59', gradeMin: 8, gradeMax: 8, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 50% of 380?',
    choices: ['180', '190', '200', '210'], correctAnswer: '190',
    solution: '0.50 x 380 = 190'
  },

{
    id: '8th-60', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 7/10 + 1/10?',
    choices: ['7/10', '4/5', '9/10', '1'], correctAnswer: '4/5',
    solution: '7/10 + 1/10 = 8/10 = 4/5'
  },

{ id: '8th-61', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is the value of 5,000 - 2,345?', choices: ['2,655', '2,665', '2,675', '2,685'], correctAnswer: '2,655', solution: '5,000 - 2,345 = 2,655' },

{ id: '8th-62', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is 25 x 14?', choices: ['340', '350', '360', '370'], correctAnswer: '350', solution: '25 x 14 = 350' },

{ id: '8th-63', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1, questionText: 'Round 8,249 to the nearest hundred.', choices: ['8,200', '8,300', '8,250', '8,400'], correctAnswer: '8,200', solution: 'Tens digit is 4 (<5), round down to 8,200' },

{ id: '8th-64', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A store sold 3,345 pencils in May and 4,789 pencils in June. How many pencils did they sell in total?', choices: ['8,134', '8,144', '8,154', '8,164'], correctAnswer: '8,134', solution: '3,345 + 4,789 = 8,134' },

{ id: '8th-65', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is 8,000 - 3,678?', choices: ['4,322', '4,332', '4,342', '4,352'], correctAnswer: '4,322', solution: '8,000 - 3,678 = 4,322' },

{ id: '8th-66', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'Which is greater: 7,654 or 7,456?', choices: ['7,654', '7,456'], correctAnswer: '7,654', solution: '7,654 > 7,456' },

{ id: '8th-67', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is the sum of 2,345 and 3,456?', choices: ['5,801', '5,811', '5,821', '5,831'], correctAnswer: '5,801', solution: '2,345 + 3,456 = 5,801' },

{ id: '8th-68', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A school has 3,456 students. If 1,234 are in grades 1-3, how many are in grades 4-8?', choices: ['2,222', '2,232', '2,242', '2,252'], correctAnswer: '2,222', solution: '3,456 - 1,234 = 2,222' },

{ id: '8th-69', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'What is 4,800 divided by 48?', choices: ['90', '95', '100', '105'], correctAnswer: '100', solution: '4,800 ÷ 48 = 100' },

{ id: '8th-70', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A bus travels 2,400 miles in 8 days. How many miles does it travel per day?', choices: ['200', '250', '300', '350'], correctAnswer: '300', solution: '2,400 ÷ 8 = 300' },

{ id: '8th-100', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2, questionText: 'What is 3/7 + 4/7?', choices: ['6/7', '5/7', '1', '2'], correctAnswer: '1', solution: '3/7 + 4/7 = 7/7 = 1' },

{ id: '8th-101', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is the value of 6,000 - 3,245?', choices: ['2,755', '2,765', '2,775', '2,785'], correctAnswer: '2,755', solution: '6,000 - 3,245 = 2,755' },

{ id: '8th-102', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is 27 x 15?', choices: ['385', '405', '415', '425'], correctAnswer: '405', solution: '27 x 15 = 405' },

{ id: '8th-103', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 1, questionText: 'Round 9,149 to the nearest hundred.', choices: ['9,100', '9,200', '9,150', '9,300'], correctAnswer: '9,100', solution: 'Tens digit is 4 (<5), round down to 9,100' },

{ id: '8th-104', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A store sold 4,345 pencils in May and 5,789 pencils in June. How many pencils did they sell in total?', choices: ['10,134', '10,144', '10,154', '10,164'], correctAnswer: '10,134', solution: '4,345 + 5,789 = 10,134' },

{ id: '8th-105', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is 9,000 - 4,678?', choices: ['4,322', '4,332', '4,342', '4,352'], correctAnswer: '4,322', solution: '9,000 - 4,678 = 4,322' },

{ id: '8th-106', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'Which is greater: 8,654 or 8,456?', choices: ['8,654', '8,456'], correctAnswer: '8,654', solution: '8,654 > 8,456' },

{ id: '8th-107', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 2, questionText: 'What is the sum of 3,345 and 4,456?', choices: ['7,801', '7,811', '7,821', '7,831'], correctAnswer: '7,801', solution: '3,345 + 4,456 = 7,801' },

{ id: '8th-108', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A school has 4,456 students. If 1,234 are in grades 1-3, how many are in grades 4-8?', choices: ['3,222', '3,232', '3,242', '3,252'], correctAnswer: '3,222', solution: '4,456 - 1,234 = 3,222' },

{ id: '8th-109', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'What is 5,600 divided by 56?', choices: ['90', '95', '100', '105'], correctAnswer: '100', solution: '5,600 ÷ 56 = 100' },

{ id: '8th-110', gradeMin: 8, gradeMax: 8, domain: 'Number Sense', difficulty: 3, questionText: 'A bus travels 3,600 miles in 12 days. How many miles does it travel per day?', choices: ['200', '250', '300', '350'], correctAnswer: '300', solution: '3,600 ÷ 12 = 300' },

{ id: '8th-111', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2, questionText: 'What is 144 ÷ 12?', choices: ['10', '11', '12', '13'], correctAnswer: '12', solution: '144 ÷ 12 = 12' },

{ id: '8th-112', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 2, questionText: 'If 11 x 8 = 88, what does 8 x 11 equal?', choices: ['88', '81', '96', '99'], correctAnswer: '88', solution: 'Multiplication is commutative: 8 x 11 = 11 x 8 = 88' },

{ id: '8th-113', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3, questionText: 'A school has 10 classes with 25 students each. How many students are there in total?', choices: ['250', '225', '275', '300'], correctAnswer: '250', solution: '10 x 25 = 250' },

{ id: '8th-114', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3, questionText: 'What is the missing number: ___ ÷ 10 = 11', choices: ['110', '120', '130', '140'], correctAnswer: '110', solution: '110 ÷ 10 = 11' },

{ id: '8th-115', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3, questionText: 'A store sold 156 apples in 12 days. How many apples did they sell per day?', choices: ['11', '12', '13', '14'], correctAnswer: '13', solution: '156 ÷ 12 = 13' },

{ id: '8th-116', gradeMin: 8, gradeMax: 8, domain: 'Operations & Algebraic Thinking', difficulty: 3, questionText: 'What is 169 divided by 13?', choices: ['11', '12', '13', '14'], correctAnswer: '13', solution: '169 ÷ 13 = 13' },

{ id: '8th-117', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2, questionText: 'What is 1/2 + 1/4?', choices: ['1/2', '3/4', '2/4', '1'], correctAnswer: '3/4', solution: '1/2 + 1/4 = 2/4 + 1/4 = 3/4' },

{ id: '8th-118', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2, questionText: 'What is 2/3 - 1/6?', choices: ['1/2', '1/3', '1/6', '2/6'], correctAnswer: '1/2', solution: '2/3 = 4/6, so 4/6 - 1/6 = 3/6 = 1/2' },

{ id: '8th-119', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2, questionText: 'What is 3/8 + 1/8?', choices: ['3/8', '4/8', '1/2', '1'], correctAnswer: '1/2', solution: '3/8 + 1/8 = 4/8 = 1/2' },

{ id: '8th-120', gradeMin: 8, gradeMax: 8, domain: 'Fractions', difficulty: 2, questionText: 'What is 5/6 - 1/3?', choices: ['1/6', '1/2', '2/3', '3/6'], correctAnswer: '1/2', solution: '1/3 = 2/6, so 5/6 - 2/6 = 3/6 = 1/2' },

];

export default grade8Questions;
