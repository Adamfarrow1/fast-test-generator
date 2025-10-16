import { Question } from '../types';

export const grade3Questions: Question[] = [
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

{
    id: '43', gradeMin: 3, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 402 - 178?', choices: ['214', '222', '224', '232'], correctAnswer: '224',
    solution: 'Borrow and subtract: 402 - 178 = 224.'
  },

{
    id: '44', gradeMin: 3, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is 7 x 6?', choices: ['36', '40', '42', '48'], correctAnswer: '42',
    solution: '7 x 6 = 42.'
  },

{
    id: '46', gradeMin: 3, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 5/8 + 1/8?', choices: ['3/8', '6/8', '5/16', '7/8'], correctAnswer: '6/8',
    solution: 'Like denominators: 5/8 + 1/8 = 6/8 = 3/4.'
  },

{
    id: '47', gradeMin: 3, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'Simplify 9/12.', choices: ['3/4', '2/3', '1/3', '4/9'], correctAnswer: '3/4',
    solution: 'Divide numerator and denominator by 3.'
  },

{
    id: '301', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school library had 234 fiction books and received a donation of 157 more books. How many fiction books does the library have now?',
    choices: ['381', '391', '401', '411'],
    correctAnswer: '391',
    solution: 'Total books = 234 + 157 = 391 books'
  },

{
    id: '302', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'A bakery started the day with 500 cookies. By lunchtime, they sold 276 cookies. How many cookies were left?',
    choices: ['214', '224', '234', '244'],
    correctAnswer: '224',
    solution: 'Remaining cookies = 500 - 276 = 224 cookies'
  },

{
    id: '303', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'The local movie theater sold 482 tickets on Friday and 428 tickets on Saturday. Which day had more ticket sales?', choices: ['Friday', 'Saturday'], correctAnswer: 'Friday',
    solution: 'Friday had more sales because 482 > 428'
  },

{
    id: '304', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'The elementary school raised $763 from their bake sale and $129 from their car wash. How much money did they raise in total?',
    choices: ['872', '882', '892', '902'],
    correctAnswer: '892',
    solution: 'Total money raised = $763 + $129 = $892'
  },

{
    id: '305', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'A clothing store had 602 shirts in stock. During the weekend sale, they sold 458 shirts. How many shirts are left in the store?', choices: ['134', '144', '154', '164'], correctAnswer: '144',
    solution: 'Remaining shirts = 602 - 458 = 144'
  },

{
    id: '306', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'Maya is counting her savings. She wants to reach 1,000 dollars. If she currently has 999 dollars, how much more money does she need?', choices: ['$1', '$10', '$99', '$100'], correctAnswer: '$1',
    solution: 'Money needed = 1000 - 999 = $1'
  },

{
    id: '307', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'The zoo counted 768 visitors on Saturday. For reporting purposes, they need to round this number to the nearest hundred. What number should they report?', choices: ['700', '750', '760', '800'], correctAnswer: '800',
    solution: 'Tens digit is 6 (>=5), round up -> 800'
  },

{
    id: '308', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'A factory produced 872 toys this month. The manager wants to round this to the nearest ten for the monthly report. What number should be reported?', choices: ['870', '872', '880', '900'], correctAnswer: '870',
    solution: 'Ones digit is 2 (<5), round down -> 870'
  },

{
    id: '309', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Sarah is arranging chairs for the school play. She needs to set up 6 rows with 7 chairs in each row. How many chairs does she need in total?',
    choices: ['40', '41', '42', '43'],
    correctAnswer: '42',
    solution: 'Total chairs = 6 rows x 7 chairs = 42 chairs'
  },

{
    id: '310', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Mrs. Johnson has 56 stickers and wants to give an equal number to each of her 8 students. How many stickers will each student receive?',
    choices: ['6', '7', '8', '9'],
    correctAnswer: '7',
    solution: 'Stickers per student = 56 ÷ 8 = 7 stickers'
  },

{
    id: '311', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Carlos is making friendship bracelets. Each bracelet needs 9 beads, and he wants to make 5 bracelets. How many beads does Carlos need in total?', choices: ['40', '45', '50', '55'], correctAnswer: '45',
    solution: 'Total beads = 9 beads x 5 bracelets = 45 beads'
  },

{
    id: '312', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The art teacher bought 64 crayons and wants to divide them equally among 4 tables. How many crayons will each table get?', choices: ['14', '15', '16', '17'], correctAnswer: '16',
    solution: 'Crayons per table = 64 ÷ 4 = 16'
  },

{
    id: '313', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Emma is organizing her stamp collection into books. Each book holds exactly 12 stamps. If she has 60 stamps total, how many books does she need?', choices: ['4', '5', '6', '7'], correctAnswer: '5',
    solution: 'Number of books = 60 ÷ 12 = 5 books'
  },

{
    id: '314', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The school cafeteria serves pizza in equal slices. If they cut 9 pizzas and get 72 slices total, how many slices come from each pizza?', choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: 'Slices per pizza = 72 ÷ 9 = 8 slices'
  },

{
    id: '315', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The local bakery makes cupcakes in batches. Each batch contains 11 cupcakes, and they made 12 batches today. How many cupcakes did they make in total?', choices: ['120', '121', '132', '144'], correctAnswer: '132',
    solution: 'Total cupcakes = 11 cupcakes x 12 batches = 132 cupcakes'
  },

{
    id: '316', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A toy company produced 144 action figures and wants to package them equally into 12 boxes. How many action figures will go in each box?', choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: 'Action figures per box = 144 ÷ 12 = 12'
  },

{
    id: '317', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The soccer team is selling candy bars for a fundraiser. They have 8 players, and each player sold 9 candy bars. How many candy bars did the team sell altogether?', choices: ['70', '71', '72', '73'], correctAnswer: '72',
    solution: 'Total candy bars = 8 players x 9 candy bars = 72 candy bars'
  },

{
    id: '318', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'In the number 764, which represents the population of a small town, what is the value of the digit 6?', choices: ['6', '60', '600', '6,000'], correctAnswer: '60',
    solution: '6 is in the tens place, so its value is 60'
  },

{
    id: '319', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'The attendance at a school assembly was 8,524 people. What is the value of the digit 8 in this number?', choices: ['8', '80', '800', '8,000'], correctAnswer: '8,000',
    solution: '8 is in the thousands place, so its value is 8,000'
  },

{
    id: '320', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'The cost of a new bicycle is $592. How should this number be written in expanded form?', choices: ['500+90+2', '50+92', '5+9+2', '590+2'], correctAnswer: '500+90+2',
    solution: '$592 = $500 + $90 + $2'
  },

{
    id: '321', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'A furniture store sold items worth $4,678 last week. For their monthly report, they need to round this amount to the nearest hundred dollars. What amount should they report?', choices: ['$4,600', '$4,700', '$4,800', '$5,000'], correctAnswer: '$4,700',
    solution: 'Tens digit is 7 (>=5), round up to $4,700'
  },

{
    id: '322', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'The city population is 8,145 people. For planning purposes, they want to round this to the nearest thousand. What number should they use?', choices: ['8,000', '8,100', '8,200', '9,000'], correctAnswer: '8,000',
    solution: 'Hundreds digit is 1 (<5), round down to 8,000'
  },

{
    id: '323', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Which number has a 5 in the tens place?', choices: ['458', '542', '625', '759'], correctAnswer: '542',
    solution: '542 has 5 in the tens place'
  },

{
    id: '324', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the smallest 4-digit number?', choices: ['1000', '1001', '1010', '1100'], correctAnswer: '1000',
    solution: '1000 is the smallest 4-digit number'
  },

{
    id: '325', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 3-digit number?', choices: ['999', '1000', '1001', '990'], correctAnswer: '999',
    solution: '999 is the largest 3-digit number'
  },

{
    id: '326', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Sophia cut a pizza into 6 equal slices and ate 3 of them. What fraction of the pizza did she eat, and what other fraction is equal to this amount?', choices: ['2/3', '3/6', '2/5', '3/4'], correctAnswer: '3/6',
    solution: 'Sophia ate 3/6 of the pizza, which equals 1/2'
  },

{
    id: '327', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Jake ate 1/4 of a chocolate bar in the morning and another 1/4 in the afternoon. What fraction of the chocolate bar has Jake eaten in total?', choices: ['1/2', '1/3', '2/5', '2/3'], correctAnswer: '1/2',
    solution: 'Total eaten = 1/4 + 1/4 = 2/4 = 1/2'
  },

{
    id: '328', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Maya had 3/4 of a bag of cookies. She gave away 1/4 of the bag to her friend. What fraction of the bag does Maya have left?', choices: ['1/4', '2/4', '2/3', '3/3'], correctAnswer: '2/4',
    solution: 'Cookies left = 3/4 - 1/4 = 2/4 = 1/2'
  },

{
    id: '329', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'Which is greater: 2/3 or 3/5?', choices: ['2/3', '3/5'], correctAnswer: '2/3',
    solution: '2/3 = 0.67; 3/5 = 0.6'
  },

{
    id: '330', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 1/3 + 1/6?', choices: ['1/6', '1/2', '2/3', '5/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6 -> 2/6 + 1/6 = 3/6 = 1/2'
  },

{
    id: '331', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 2/3 - 1/6?', choices: ['1/2', '1/3', '2/6', '3/6'], correctAnswer: '1/2',
    solution: '2/3 = 4/6 -> 4/6 - 1/6 = 3/6 = 1/2'
  },

{
    id: '332', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 6/8.', choices: ['3/4', '2/3', '4/6', '1/2'], correctAnswer: '3/4',
    solution: 'Divide numerator and denominator by 2 -> 3/4'
  },

{
    id: '333',
    gradeMin: 3,
    gradeMax: 3,
    domain: 'Fractions',
    difficulty: 3,
    questionText: 'What is 2/5 + 3/10?',
    choices: ['1/2', '7/10', '4/5', '5/5'],
    correctAnswer: '7/10',
    solution: '2/5 = 4/10, so 4/10 + 3/10 = 7/10.'
  },

{
    id: '334',
    gradeMin: 3,
    gradeMax: 3,
    domain: 'Fractions',
    difficulty: 3,
    questionText: 'What is 5/6 - 1/3?',
    choices: ['1/6', '1/2', '3/6', '4/6'],
    correctAnswer: '1/2',
    solution: '1/3 = 2/6 → 5/6 - 2/6 = 3/6 = 1/2.'
  },

{
    id: '335', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a hexagon have?', choices: ['5', '6', '7', '8'], correctAnswer: '6',
    solution: 'Hexa = 6'
  },

{
    id: '336', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a rectangle have?', choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A rectangle has 4 right angles'
  },

{
    id: '337', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does an octagon have?', choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: 'Octa = 8'
  },

{
    id: '338', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'Hannah is building a square sandbox for her little brother. Each side of the square is 5 feet long. How much fencing does she need to go around the entire sandbox?', choices: ['15 feet', '20 feet', '25 feet', '30 feet'], correctAnswer: '20 feet',
    solution: 'Perimeter of square = 4 x 5 = 20 feet'
  },

{
    id: '339', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'Mr. Rodriguez is making a rectangular garden bed that is 7 feet long and 4 feet wide. How many square feet of soil will he need to cover the entire garden bed?',
    choices: ['11', '21', '28', '35'],
    correctAnswer: '28',
    solution: 'Area of garden = length x width = 7 ft x 4 ft = 28 square feet'
  },

{
    id: '340', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'How many equal sides does an equilateral triangle have?', choices: ['1', '2', '3', '4'], correctAnswer: '3',
    solution: 'Equilateral triangle has 3 equal sides'
  },

{
    id: '341', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'David is making a triangular sign for his treehouse. The three sides of the triangle are 6 inches, 7 inches, and 8 inches long. How much trim does he need to go around the edge of the sign?', choices: ['19 inches', '20 inches', '21 inches', '22 inches'], correctAnswer: '21 inches',
    solution: 'Perimeter = 6 + 7 + 8 = 21 inches'
  },

{
    id: '342', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'How many degrees are in a straight angle?', choices: ['45°', '90°', '180°', '360°'], correctAnswer: '180°',
    solution: 'A straight angle = 180°'
  },

{
    id: '343', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'The school is installing new square tiles in the hallway. Each tile has sides that are 9 inches long. What is the area of each tile?', choices: ['72 square inches', '81 square inches', '90 square inches', '99 square inches'], correctAnswer: '81 square inches',
    solution: 'Area of square = 9 x 9 = 81 square inches'
  },

{
    id: '344', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'Tommy is 2 feet tall. His mom wants to know his height in inches for his doctor visit. How many inches tall is Tommy?', choices: ['12 inches', '18 inches', '24 inches', '30 inches'], correctAnswer: '24 inches',
    solution: 'Height in inches = 2 feet x 12 inches = 24 inches'
  },

{
    id: '345', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'The school play will last for 3 hours. The program director wants to know how many minutes this is for scheduling purposes. How many minutes will the play last?', choices: ['120 minutes', '150 minutes', '180 minutes', '210 minutes'], correctAnswer: '180 minutes',
    solution: 'Play duration = 3 hours x 60 minutes = 180 minutes'
  },

{
    id: '346', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'How many days are in February (non-leap year)?', choices: ['28', '29', '30', '31'], correctAnswer: '28',
    solution: 'February usually has 28 days'
  },

{
    id: '347', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many cups are in 1 quart?', choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: '1 quart = 4 cups'
  },

{
    id: '348', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many ounces are in 2 pounds?', choices: ['16', '24', '28', '32'], correctAnswer: '32',
    solution: '1 lb = 16 oz -> 2 lb = 32 oz'
  },

{
    id: '349', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'For a science experiment, Maria needs to convert 3 liters of water into milliliters. Her teacher told her that 1 liter equals 1000 milliliters. How many milliliters of water does Maria need?',
    choices: ['300', '3000', '30,000', '3'],
    correctAnswer: '3000',
    solution: '3 liters = 3 x 1000 milliliters = 3000 milliliters'
  },

{
    id: '350', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'The school bus ride to the field trip location takes half an hour. The teacher wants to tell parents how many minutes the ride will be. How many minutes is half an hour?', choices: ['15 minutes', '20 minutes', '25 minutes', '30 minutes'], correctAnswer: '30 minutes',
    solution: 'Half an hour = 1/2 of 60 minutes = 30 minutes'
  },

{
    id: '351', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'The football field is 9 feet wide for the youth league. The coach needs to know how many yards this is for the field setup. How many yards wide is the field?', choices: ['2 yards', '3 yards', '4 yards', '5 yards'], correctAnswer: '3 yards',
    solution: 'Field width = 9 feet ÷ 3 feet per yard = 3 yards'
  },

{
    id: '352', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'How many hours are in 5 days?', choices: ['100', '108', '120', '144'], correctAnswer: '120',
    solution: '5 x 24 = 120 hours'
  },

{
    id: '3rd-53', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school cafeteria prepared 347 sandwiches for lunch and 268 sandwiches for snack time. How many sandwiches did they prepare altogether?',
    choices: ['605 sandwiches', '615 sandwiches', '625 sandwiches', '635 sandwiches'], correctAnswer: '615 sandwiches',
    solution: 'Total sandwiches: 347 + 268 = 615 sandwiches.'
  },

{
    id: '3rd-54', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school received 824 new books for the library. After organizing them, 379 books were placed in the fiction section. How many books went to other sections?',
    choices: ['445 books', '455 books', '465 books', '475 books'], correctAnswer: '445 books',
    solution: 'Books for other sections: 824 - 379 = 445 books.'
  },

{
    id: '3rd-55', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 1,
    questionText: 'During the school fundraiser, third graders collected 156 dollars on Monday, 283 dollars on Tuesday, and 194 dollars on Wednesday. How much money did they collect in total?',
    choices: ['623 dollars', '633 dollars', '643 dollars', '653 dollars'], correctAnswer: '633 dollars',
    solution: 'Total collected: 156 + 283 + 194 = 633 dollars.'
  },

{
    id: '3rd-56',
    gradeMin: 3,
    gradeMax: 3,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'The school auditorium has 456 seats arranged in rows of 12. About how many rows are there? Estimate by rounding 456 to the nearest hundred.',
    choices: ['About 38 rows', 'About 40 rows', 'About 42 rows', 'About 45 rows'],
    correctAnswer: 'About 42 rows',
    solution: '456 rounds to 500. 500 ÷ 12 ≈ 41.7, so about 42 rows.'
  },

{
    id: '3rd-57', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'The third grade classes are comparing their reading points. Room A has 1,847 points, Room B has 1,784 points, and Room C has 1,874 points. Which room has the most points?',
    choices: ['Room A', 'Room B', 'Room C', 'They are tied'], correctAnswer: 'Room C',
    solution: 'Comparing: 1,874 > 1,847 > 1,784. Room C has the most points.'
  },

{
    id: '3rd-58', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 2,
    questionText: 'A toy manufacturer produced 2,456 action figures in January and 1,873 action figures in February. How many more action figures did they produce in January than February?',
    choices: ['583 figures', '593 figures', '603 figures', '613 figures'], correctAnswer: '583 figures',
    solution: 'Difference: 2,456 - 1,873 = 583 more action figures.'
  },

{
    id: '3rd-59', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'The school district ordered supplies for three schools. School A received 1,486 items, School B received 2,237 items, and School C received 1,759 items. What is the total number of items ordered?',
    choices: ['5,472 items', '5,482 items', '5,492 items', '5,502 items'], correctAnswer: '5,482 items',
    solution: 'Total items: 1,486 + 2,237 + 1,759 = 5,482 items.'
  },

{
    id: '3rd-60', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bookstore had 3,845 books at the beginning of the month. They sold 1,967 books and received 2,134 new books. How many books do they have now?',
    choices: ['4,012 books', '4,022 books', '4,032 books', '4,042 books'], correctAnswer: '4,012 books',
    solution: 'Final count: 3,845 - 1,967 + 2,134 = 1,878 + 2,134 = 4,012 books.'
  },

{
    id: '3rd-61', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'Which number is closest to 5,000: 4,789, 4,923, 5,156, or 5,287?',
    choices: ['4,789', '4,923', '5,156', '5,287'], correctAnswer: '4,923',
    solution: 'Distances from 5,000: 4,789 (211), 4,923 (77), 5,156 (156), 5,287 (287). 4,923 is closest.'
  },

{
    id: '3rd-62', gradeMin: 3, gradeMax: 3, domain: 'Number Sense', difficulty: 3,
    questionText: 'The school carnival had 6,234 visitors on Friday, 8,567 visitors on Saturday, and 5,892 visitors on Sunday. How many visitors came to the carnival in total?',
    choices: ['20,693 visitors', '20,703 visitors', '20,713 visitors', '20,723 visitors'], correctAnswer: '20,693 visitors',
    solution: 'Total visitors: 6,234 + 8,567 + 5,892 = 20,693 visitors.'
  },

{
    id: '3rd-63', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The school play has 8 scenes, and each scene requires 7 actors. How many actors are needed for the entire play?',
    choices: ['54 actors', '55 actors', '56 actors', '57 actors'], correctAnswer: '56 actors',
    solution: 'Total actors needed: 8 scenes x 7 actors = 56 actors.'
  },

{
    id: '3rd-64', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The art teacher has 84 colored pencils to distribute equally among 12 students. How many colored pencils will each student receive?',
    choices: ['6 pencils', '7 pencils', '8 pencils', '9 pencils'], correctAnswer: '7 pencils',
    solution: 'Pencils per student: 84 ÷ 12 = 7 colored pencils.'
  },

{
    id: '3rd-65', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The cafeteria orders pizza for a school event. Each pizza is cut into 6 slices, and they ordered 9 pizzas. How many slices of pizza do they have altogether?',
    choices: ['52 slices', '53 slices', '54 slices', '55 slices'], correctAnswer: '54 slices',
    solution: 'Total slices: 9 pizzas x 6 slices = 54 slices.'
  },

{
    id: '3rd-66', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the missing number: ___ x 8 = 96',
    choices: ['11', '12', '13', '14'], correctAnswer: '12',
    solution: '12 x 8 = 96, so the missing number is 12.'
  },

{
    id: '3rd-67', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The school library has 126 books to arrange on shelves. If each shelf holds 14 books, how many shelves will be completely filled?',
    choices: ['8 shelves', '9 shelves', '10 shelves', '11 shelves'], correctAnswer: '9 shelves',
    solution: 'Number of complete shelves: 126 ÷ 14 = 9 shelves.'
  },

{
    id: '3rd-68', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What number makes this equation true: 147 + ___ = 256?',
    choices: ['108', '109', '110', '111'], correctAnswer: '109',
    solution: 'Missing number: 256 - 147 = 109. Check: 147 + 109 = 256'
  },

{
    id: '3rd-69', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The school garden has vegetable plots arranged in a rectangle. There are 13 rows with 11 plots in each row. How many vegetable plots are there in total?',
    choices: ['143 plots', '144 plots', '145 plots', '146 plots'], correctAnswer: '143 plots',
    solution: 'Total plots: 13 rows x 11 plots = 143 vegetable plots.'
  },

{
    id: '3rd-70', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What comes next in this pattern: 7, 14, 21, 28, 35, ___?',
    choices: ['40', '41', '42', '43'], correctAnswer: '42',
    solution: 'The pattern increases by 7 each time: 35 + 7 = 42.'
  },

{
    id: '3rd-71', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'If 15 x 12 = 180, then what does 12 x 15 equal?',
    choices: ['170', '180', '190', '200'], correctAnswer: '180',
    solution: 'Multiplication is commutative, so 12 x 15 = 15 x 12 = 180.'
  },

{
    id: '3rd-72', gradeMin: 3, gradeMax: 3, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The school store sells pencils in packages of 16. If they need to fill 144 pencils into packages, how many complete packages can they make?',
    choices: ['8 packages', '9 packages', '10 packages', '11 packages'], correctAnswer: '9 packages',
    solution: 'Complete packages: 144 ÷ 16 = 9 packages.'
  },

{
    id: '3rd-73', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'In the number 2,847, what is the value of the digit 8?',
    choices: ['8', '80', '800', '8000'], correctAnswer: '800',
    solution: 'The digit 8 is in the hundreds place, so its value is 800.'
  },

{
    id: '3rd-74', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'Which number has a 6 in the thousands place?',
    choices: ['3,649', '4,637', '6,284', '7,468'], correctAnswer: '6,284',
    solution: 'In 6,284, the digit 6 is in the thousands place (leftmost position).'
  },

{
    id: '3rd-75', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 4,563 written in expanded form?',
    choices: ['4,000 + 500 + 60 + 3', '400 + 56 + 3', '4 + 5 + 6 + 3', '4,563'], correctAnswer: '4,000 + 500 + 60 + 3',
    solution: '4,563 = 4,000 (thousands) + 500 (hundreds) + 60 (tens) + 3 (ones).'
  },

{
    id: '3rd-76', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 5,472 to the nearest hundred.',
    choices: ['5,400', '5,470', '5,500', '5,600'], correctAnswer: '5,500',
    solution: 'The tens digit is 7, which is 5 or greater, so round up to 5,500.'
  },

{
    id: '3rd-77', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'What number is 1,000 more than 3,684?',
    choices: ['4,684', '4,694', '4,784', '5,684'], correctAnswer: '4,684',
    solution: 'Adding 1,000 to 3,684: 3,684 + 1,000 = 4,684.'
  },

{
    id: '3rd-78', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 2,
    questionText: 'Which number is between 7,250 and 7,350?',
    choices: ['7,249', '7,299', '7,351', '7,400'], correctAnswer: '7,299',
    solution: '7,299 is the only number that falls between 7,250 and 7,350.'
  },

{
    id: '3rd-79', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'Round 8,647 to the nearest thousand.',
    choices: ['8,000', '8,600', '8,700', '9,000'], correctAnswer: '9,000',
    solution: 'The hundreds digit is 6, which is 5 or greater, so round up to 9,000.'
  },

{
    id: '3rd-80', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'Which digit is in the tens place of the number 29,463?',
    choices: ['2', '9', '4', '6'], correctAnswer: '6',
    solution: 'In 29,463: 2 is ten-thousands, 9 is thousands, 4 is hundreds, 6 is tens, 3 is ones.'
  },

{
    id: '3rd-81', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 4-digit number you can make using the digits 3, 7, 1, and 9?',
    choices: ['9,731', '9,713', '9,371', '7,931'], correctAnswer: '9,731',
    solution: 'To make the largest number, arrange digits in descending order: 9,731.'
  },

{
    id: '3rd-82', gradeMin: 3, gradeMax: 3, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the smallest 5-digit number?',
    choices: ['10,000', '10,001', '11,111', '1,000'], correctAnswer: '10,000',
    solution: '10,000 is the smallest 5-digit number.'
  },

{
    id: '3rd-83', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Maria ate 2/8 of a pizza for lunch and 3/8 of the same pizza for dinner. How much pizza did Maria eat in total?',
    choices: ['4/8', '5/8', '6/8', '7/8'], correctAnswer: '5/8',
    solution: 'Total pizza eaten: 2/8 + 3/8 = 5/8.'
  },

{
    id: '3rd-84', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Tom had 7/10 of a chocolate bar. He gave 2/10 of it to his sister. How much chocolate bar does Tom have left?',
    choices: ['4/10', '5/10', '6/10', '9/10'], correctAnswer: '5/10',
    solution: 'Chocolate remaining: 7/10 - 2/10 = 5/10.'
  },

{
    id: '3rd-85', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 1/2?',
    choices: ['2/3', '3/6', '2/5', '1/3'], correctAnswer: '3/6',
    solution: '3/6 = 1/2 because 3 ÷ 3 = 1 and 6 ÷ 3 = 2.'
  },

{
    id: '3rd-86', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'Which is greater: 3/4 or 2/3?',
    choices: ['3/4', '2/3', 'They are equal', 'Cannot determine'], correctAnswer: '3/4',
    solution: '3/4 = 0.75 and 2/3 = 0.67, so 3/4 > 2/3.'
  },

{
    id: '3rd-87', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 1/4 + 2/4?',
    choices: ['2/4', '3/4', '3/8', '1/2'], correctAnswer: '3/4',
    solution: '1/4 + 2/4 = 3/4.'
  },

{
    id: '3rd-88', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 5/6 - 2/6?',
    choices: ['2/6', '3/6', '4/6', '7/6'], correctAnswer: '3/6',
    solution: '5/6 - 2/6 = 3/6, which can also be written as 1/2.'
  },

{
    id: '3rd-89', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'Simplify the fraction 8/12.',
    choices: ['2/3', '4/6', '1/2', '3/4'], correctAnswer: '2/3',
    solution: 'Divide both numerator and denominator by 4: 8/12 = 2/3.'
  },

{
    id: '3rd-90', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 1/3 + 1/6?',
    choices: ['1/6', '2/9', '1/2', '2/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2.'
  },

{
    id: '3rd-91', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 3/4 - 1/4?',
    choices: ['1/4', '2/4', '1/2', '3/8'], correctAnswer: '2/4',
    solution: '3/4 - 1/4 = 2/4, which can also be written as 1/2.'
  },

{
    id: '3rd-92', gradeMin: 3, gradeMax: 3, domain: 'Fractions', difficulty: 3,
    questionText: 'Which fraction is closest to 1: 7/8, 3/4, 5/6, or 2/3?',
    choices: ['7/8', '3/4', '5/6', '2/3'], correctAnswer: '7/8',
    solution: '7/8 = 0.875, which is closest to 1.000.'
  },

{
    id: '3rd-93', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a pentagon have?',
    choices: ['4', '5', '6', '7'], correctAnswer: '5',
    solution: 'A pentagon has 5 sides.'
  },

{
    id: '3rd-94', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'How many vertices does a triangle have?',
    choices: ['2', '3', '4', '5'], correctAnswer: '3',
    solution: 'A triangle has 3 vertices (corners).'
  },

{
    id: '3rd-95', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 1,
    questionText: 'What type of angle measures exactly 90 degrees?',
    choices: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'], correctAnswer: 'Right angle',
    solution: 'A right angle measures exactly 90 degrees.'
  },

{
    id: '3rd-96', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'Sarah is building a square garden bed. Each side of the square is 8 feet long. What is the perimeter of her garden?',
    choices: ['28 feet', '30 feet', '32 feet', '34 feet'], correctAnswer: '32 feet',
    solution: 'Perimeter of square = 4 x side length = 4 x 8 = 32 feet.'
  },

{
    id: '3rd-97', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'A rectangular playground is 12 meters long and 8 meters wide. What is the area of the playground?',
    choices: ['88 square meters', '92 square meters', '96 square meters', '100 square meters'], correctAnswer: '96 square meters',
    solution: 'Area of rectangle = length x width = 12 x 8 = 96 square meters.'
  },

{
    id: '3rd-98', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 2,
    questionText: 'How many equal sides does an isosceles triangle have?',
    choices: ['0', '1', '2', '3'], correctAnswer: '2',
    solution: 'An isosceles triangle has exactly 2 equal sides.'
  },

{
    id: '3rd-99', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'The school is installing a triangular flower bed. The three sides measure 9 feet, 12 feet, and 15 feet. What is the perimeter of the flower bed?',
    choices: ['34 feet', '35 feet', '36 feet', '37 feet'], correctAnswer: '36 feet',
    solution: 'Perimeter = 9 + 12 + 15 = 36 feet.'
  },

{
    id: '3rd-100', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'How many degrees are in a complete circle?',
    choices: ['180°', '270°', '360°', '450°'], correctAnswer: '360°',
    solution: 'A complete circle contains 360 degrees.'
  },

{
    id: '3rd-101', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'The art room has square tiles on the floor. Each tile has sides that are 6 inches long. What is the area of each tile?',
    choices: ['30 square inches', '32 square inches', '34 square inches', '36 square inches'], correctAnswer: '36 square inches',
    solution: 'Area of square = side x side = 6 x 6 = 36 square inches.'
  },

{
    id: '3rd-102', gradeMin: 3, gradeMax: 3, domain: 'Geometry', difficulty: 3,
    questionText: 'Which shape has exactly 4 equal sides and 4 right angles?',
    choices: ['Rectangle', 'Rhombus', 'Square', 'Trapezoid'], correctAnswer: 'Square',
    solution: 'A square has 4 equal sides and 4 right angles.'
  },

{
    id: '3rd-103', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'The school science fair starts at 10:30 AM and lasts for 3 hours. What time does the science fair end?',
    choices: ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'], correctAnswer: '1:30 PM',
    solution: 'End time: 10:30 AM + 3 hours = 1:30 PM.'
  },

{
    id: '3rd-104', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 4 meters?',
    choices: ['40 cm', '400 cm', '4,000 cm', '40,000 cm'], correctAnswer: '400 cm',
    solution: '4 meters = 4 x 100 = 400 centimeters.'
  },

{
    id: '3rd-105', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 1,
    questionText: 'Emma has 2 quarters, 4 dimes, 3 nickels, and 8 pennies. How much money does Emma have?',
    choices: ['103 cents', '113 cents', '123 cents', '133 cents'], correctAnswer: '113 cents',
    solution: 'Total: (2x25¢) + (4x10¢) + (3x5¢) + (8x1¢) = 50¢ + 40¢ + 15¢ + 8¢ = 113 cents.'
  },

{
    id: '3rd-106', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'Jake measured his bedroom using his feet as a unit. His room is 12 feet long. If each of his feet is 8 inches long, how long is his bedroom in inches?',
    choices: ['94 inches', '96 inches', '98 inches', '100 inches'], correctAnswer: '96 inches',
    solution: 'Room length: 12 feet x 8 inches = 96 inches.'
  },

{
    id: '3rd-107', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'The school swimming lesson starts at 2:15 PM and ends at 3:45 PM. How long is the swimming lesson?',
    choices: ['1 hour 15 minutes', '1 hour 30 minutes', '1 hour 45 minutes', '2 hours'], correctAnswer: '1 hour 30 minutes',
    solution: 'Duration: From 2:15 PM to 3:45 PM is 1 hour and 30 minutes.'
  },

{
    id: '3rd-108', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 3 kilograms?',
    choices: ['30 grams', '300 grams', '3,000 grams', '30,000 grams'], correctAnswer: '3,000 grams',
    solution: '3 kilograms = 3 x 1,000 = 3,000 grams.'
  },

{
    id: '3rd-109', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'The school field trip will last from 8:45 AM to 4:30 PM. How many hours and minutes long is the field trip?',
    choices: ['7 hours 45 minutes', '8 hours 15 minutes', '8 hours 45 minutes', '9 hours'], correctAnswer: '7 hours 45 minutes',
    solution: 'From 8:45 AM to 4:30 PM is 7 hours and 45 minutes.'
  },

{
    id: '3rd-110', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'Mrs. Garcia is making a rectangular bulletin board that is 15 inches long and 9 inches wide. What is the area of the bulletin board?',
    choices: ['125 square inches', '130 square inches', '135 square inches', '140 square inches'], correctAnswer: '135 square inches',
    solution: 'Area = length x width = 15 inches x 9 inches = 135 square inches.'
  },

{
    id: '3rd-111', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'How many minutes are in 2 hours and 45 minutes?',
    choices: ['160 minutes', '165 minutes', '170 minutes', '175 minutes'], correctAnswer: '165 minutes',
    solution: '2 hours = 120 minutes. Total: 120 + 45 = 165 minutes.'
  },

{
    id: '3rd-112', gradeMin: 3, gradeMax: 3, domain: 'Measurement', difficulty: 3,
    questionText: 'The third grade class needs ribbon for their art project. They have 4 pieces: 28 cm, 35 cm, 42 cm, and 29 cm long. What is the total length of all the ribbon?',
    choices: ['132 cm', '134 cm', '136 cm', '138 cm'], correctAnswer: '134 cm',
    solution: 'Total ribbon length: 28 + 35 + 42 + 29 = 134 centimeters.'
  },

];

export default grade3Questions;
