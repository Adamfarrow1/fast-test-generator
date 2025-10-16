import { Question } from '../types';

export const grade2Questions: Question[] = [
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
    id: '42', gradeMin: 2, gradeMax: 3, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 7 in 7,452?', choices: ['7', '70', '700', '7,000'], correctAnswer: '7,000',
    solution: 'The 7 is in the thousands place.'
  },

{
    id: '201', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'Emma collected 25 seashells at the beach in the morning. In the afternoon, she found 16 more seashells. How many seashells does Emma have in total?', choices: ['31', '39', '40', '41'], correctAnswer: '41',
    solution: 'Total seashells = 25 + 16 = 41'
  },

{
    id: '202', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'Jake had 40 stickers in his collection. He gave 27 stickers to his friends. How many stickers does Jake have left?', choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: 'Remaining stickers = 40 - 27 = 13'
  },

{
    id: '203', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What number comes right after 199?', choices: ['198', '199', '200', '201'],
    correctAnswer: '200',
    solution: '199 + 1 = 200'
  },

{
    id: '204', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'Which is greater: 84 or 48?', choices: ['84', '48'],
    correctAnswer: '84',
    solution: '84 is greater than 48'
  },

{
    id: '205', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the library, there were 36 books on the shelf. Mrs. Wilson added 29 more books. How many books are on the shelf now?', choices: ['55', '64', '65', '66'], correctAnswer: '65',
    solution: 'Total books = 36 + 29 = 65'
  },

{
    id: '206', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school cafeteria started with 73 apples. During lunch, students ate 58 apples. How many apples are left?', choices: ['14', '15', '16', '17'], correctAnswer: '15',
    solution: 'Remaining apples = 73 - 58 = 15'
  },

{
    id: '207', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is even?', choices: ['35', '42', '57', '63'],
    correctAnswer: '42',
    solution: 'Even numbers are divisible by 2; 42 ÷ 2 = 21'
  },

{
    id: '208', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Tom saved 18 pennies last week and 25 pennies this week. How many pennies does Tom have altogether?', choices: ['42', '43', '44', '45'],
    correctAnswer: '43',
    solution: 'Total pennies = 18 + 25 = 43'
  },

{
    id: '209', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'There were 90 birds sitting on a tree. When a dog barked, 47 birds flew away. How many birds are still on the tree?', choices: ['42', '43', '44', '45'],
    correctAnswer: '43',
    solution: 'Birds remaining = 90 - 47 = 43'
  },

{
    id: '210', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is less: 128 or 182?', choices: ['128', '182'],
    correctAnswer: '128',
    solution: '128 is less than 182'
  },

{
    id: '211', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'The toy store had 125 teddy bears. They received a shipment of 38 more teddy bears. How many teddy bears does the store have now?', choices: ['152', '163', '164', '165'],
    correctAnswer: '163',
    solution: 'Total teddy bears = 125 + 38 = 163'
  },

{
    id: '212', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'A farmer had 200 carrots in his garden. He harvested 76 carrots for the market. How many carrots are still in the garden?', choices: ['122', '123', '124', '125'],
    correctAnswer: '124',
    solution: 'Carrots remaining = 200 - 76 = 124'
  },

{
    id: '213', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Sarah is making rows of cookies. She puts 6 cookies in each of 2 rows. How many cookies did Sarah use?', choices: ['10', '11', '12', '14'], correctAnswer: '12',
    solution: 'Total cookies = 6 x 2 = 12'
  },

{
    id: '214', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Mom bought 15 candies to share equally among 3 children. How many candies will each child get?', choices: ['4', '5', '6', '7'], correctAnswer: '5',
    solution: 'Candies per child = 15 ÷ 3 = 5'
  },

{
    id: '215', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Fill in the blank: 7 + ___ = 15', choices: ['6', '7', '8', '9'],
    correctAnswer: '8',
    solution: '7 + 8 = 15'
  },

{
    id: '216', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Fill in the blank: ___ - 9 = 4', choices: ['11', '12', '13', '14'],
    correctAnswer: '13',
    solution: '13 - 9 = 4'
  },

{
    id: '217', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Alex is planting flowers in his garden. He plants 3 flowers in each of 4 rows. How many flowers did Alex plant in total?', choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: 'Total flowers = 3 x 4 = 12'
  },

{
    id: '218', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The teacher has 20 pencils to give equally to 5 students. How many pencils will each student receive?', choices: ['3', '4', '5', '6'], correctAnswer: '4',
    solution: 'Pencils per student = 20 ÷ 5 = 4'
  },

{
    id: '219', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'At the zoo, there are 9 cages with 5 animals in each cage. How many animals are there in total?', choices: ['40', '42', '45', '50'],
    correctAnswer: '45',
    solution: 'Total animals = 9 x 5 = 45'
  },

{
    id: '220', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A baker made 36 muffins and wants to put them equally into 6 boxes. How many muffins will go in each box?', choices: ['4', '5', '6', '7'], correctAnswer: '6',
    solution: 'Muffins per box = 36 ÷ 6 = 6'
  },

{
    id: '221', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 5 x ___ = 35', choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: '5 x 7 = 35'
  },

{
    id: '222', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: ___ ÷ 4 = 9', choices: ['32', '36', '40', '44'],
    correctAnswer: '36',
    solution: '36 ÷ 4 = 9'
  },

{
    id: '223', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 8 x 7?', choices: ['54', '55', '56', '57'],
    correctAnswer: '56',
    solution: '8 x 7 = 56'
  },

{
    id: '224', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 72 ÷ 8?', choices: ['8', '9', '10', '11'], correctAnswer: '9',
    solution: '72 ÷ 8 = 9'
  },

{
    id: '225', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 6 x 9?', choices: ['52', '53', '54', '55'],
    correctAnswer: '54',
    solution: '6 x 9 = 54'
  },

{
    id: '226', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 3 in 348?', choices: ['3', '30', '300', '3,000'],
    correctAnswer: '300',
    solution: '3 is in the hundreds place'
  },

{
    id: '227', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 7 in 572?', choices: ['7', '70', '700', '7,000'],
    correctAnswer: '70',
    solution: '7 is in the tens place'
  },

{
    id: '228', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Round 246 to the nearest ten.', choices: ['240', '245', '246', '250'],
    correctAnswer: '250',
    solution: 'Ones digit is 6, so round up'
  },

{
    id: '229', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Round 572 to the nearest hundred.', choices: ['500', '600', '570', '580'],
    correctAnswer: '600',
    solution: 'Tens digit is 7 (>=5), so round up'
  },

{
    id: '230', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Which number has a 9 in the tens place?', choices: ['391', '912', '498', '729'],
    correctAnswer: '498',
    solution: 'In 498, 9 is in the tens place'
  },

{
    id: '231', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Write 427 in expanded form.', choices: ['400+20+7', '40+27', '427', '4+2+7'],
    correctAnswer: '400+20+7',
    solution: '427 = 400 + 20 + 7'
  },

{
    id: '232', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Which is greater: 389 or 398?', choices: ['389', '398'],
    correctAnswer: '398',
    solution: '398 is greater than 389'
  },

{
    id: '233', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 843 to the nearest ten.', choices: ['840', '843', '850', '800'],
    correctAnswer: '840',
    solution: 'Ones digit is 3 (<5), round down'
  },

{
    id: '234', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 843 to the nearest hundred.', choices: ['800', '840', '850', '900'],
    correctAnswer: '800',
    solution: 'Tens digit is 4 (<5), so round down to 800'
  },

{
    id: '235', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the smallest 3-digit number?', choices: ['100', '101', '110', '111'],
    correctAnswer: '100',
    solution: '100 is the smallest 3-digit number'
  },

{
    id: '236', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 2-digit number?', choices: ['98', '99', '100', '101'],
    correctAnswer: '99',
    solution: '99 is the largest 2-digit number'
  },

{
    id: '237', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'Which digit is in the tens place of 762?', choices: ['6', '2', '7', '0'],
    correctAnswer: '6',
    solution: '762 has 7 in hundreds, 6 in tens, 2 in ones'
  },

{
    id: '238', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 1 hour?', choices: ['30', '45', '60', '90'],
    correctAnswer: '60',
    solution: '1 hour = 60 minutes'
  },

{
    id: '239', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many days are in a week?', choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
    solution: 'There are 7 days in a week'
  },

{
    id: '240', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many inches are in a foot?', choices: ['10', '11', '12', '13'],
    correctAnswer: '12',
    solution: '1 foot = 12 inches'
  },

{
    id: '241', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many feet are in a yard?', choices: ['2', '3', '4', '5'],
    correctAnswer: '3',
    solution: '1 yard = 3 feet'
  },

{
    id: '242', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'How many cents are in a dollar?', choices: ['25', '50', '75', '100'],
    correctAnswer: '100',
    solution: '100 cents = 1 dollar'
  },

{
    id: '243', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'Maya is planning a sleepover that will last for 2 days. How many hours will her sleepover last?', choices: ['24', '36', '48', '72'],
    correctAnswer: '48',
    solution: 'Hours in sleepover = 2 days x 24 hours = 48 hours'
  },

{
    id: '244', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many centimeters are in 1 meter?', choices: ['10', '100', '1,000', '10,000'],
    correctAnswer: '100',
    solution: '1 meter = 100 centimeters'
  },

{
    id: '245', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many ounces are in a pound?', choices: ['8', '12', '16', '20'],
    correctAnswer: '16',
    solution: '1 pound = 16 ounces'
  },

{
    id: '246', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'How many months are in a year?', choices: ['10', '11', '12', '13'],
    correctAnswer: '12',
    solution: '1 year = 12 months'
  },

{
    id: '247', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'David wants to buy a toy that costs $2. If he only has quarters, how many quarters does he need?', choices: ['4', '6', '8', '10'],
    correctAnswer: '8',
    solution: 'Each quarter = 25¢, $2 = 200¢, so 200 ÷ 25 = 8 quarters'
  },

{
    id: '248', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'The class camping trip will last for 3 days. How many hours will they be camping?', choices: ['48', '60', '72', '84'],
    correctAnswer: '72',
    solution: 'Hours camping = 3 days x 24 hours = 72 hours'
  },

{
    id: '249', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'Lisa is watching a movie that is 5 hours long. How many minutes will she spend watching the movie?', choices: ['200', '240', '300', '360'],
    correctAnswer: '300',
    solution: 'Movie length = 5 hours x 60 minutes = 300 minutes'
  },

{
    id: '250', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'The school play rehearsals will happen for 2 weeks. How many days will they rehearse?', choices: ['10', '12', '14', '15'],
    correctAnswer: '14',
    solution: 'Rehearsal days = 2 weeks x 7 days = 14 days'
  },

{
    id: '2nd-59', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'During the school field day, the second grade collected 47 plastic bottles for recycling in the morning and 38 more bottles in the afternoon. How many bottles did they collect altogether?',
    choices: ['83 bottles', '84 bottles', '85 bottles', '86 bottles'], correctAnswer: '85 bottles',
    solution: 'Total bottles collected: 47 + 38 = 85 bottles.'
  },

{
    id: '2nd-60', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school cafeteria ordered 92 cartons of milk for the week. By Friday, students had consumed 67 cartons. How many cartons of milk were left over?',
    choices: ['24 cartons', '25 cartons', '26 cartons', '27 cartons'], correctAnswer: '25 cartons',
    solution: 'Milk cartons remaining: 92 - 67 = 25 cartons.'
  },

{
    id: '2nd-61', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Emma is counting her sticker collection by tens. She counts: 10, 20, 30, 40, 50, 60, 70. What number should she say next?',
    choices: ['75', '80', '85', '90'], correctAnswer: '80',
    solution: 'When counting by tens, add 10 to the previous number: 70 + 10 = 80.'
  },

{
    id: '2nd-62', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school playground has 3 basketball hoops, and each hoop has 12 basketballs nearby. How many basketballs are there altogether?',
    choices: ['34 basketballs', '35 basketballs', '36 basketballs', '37 basketballs'], correctAnswer: '36 basketballs',
    solution: 'Total basketballs: 3 groups of 12 = 12 + 12 + 12 = 36 basketballs.'
  },

{
    id: '2nd-63', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school book fair, Oliver bought 2 books for 15 dollars each and 1 bookmark for 3 dollars. How much money did Oliver spend in total?',
    choices: ['30 dollars', '31 dollars', '32 dollars', '33 dollars'], correctAnswer: '33 dollars',
    solution: 'Books cost: 2 x 15 = 30 dollars. Total spent: 30 + 3 = 33 dollars.'
  },

{
    id: '2nd-64', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which number is odd: 24, 36, 47, or 52?',
    choices: ['24', '36', '47', '52'], correctAnswer: '47',
    solution: 'Odd numbers cannot be divided evenly by 2. Only 47 is odd among the choices.'
  },

{
    id: '2nd-65', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'The second grade class is organizing a penny drive for charity. Room 201 collected 156 pennies, Room 202 collected 89 pennies, and Room 203 collected 127 pennies. How many pennies did all three rooms collect together?',
    choices: ['362 pennies', '372 pennies', '382 pennies', '392 pennies'], correctAnswer: '372 pennies',
    solution: 'Total pennies: 156 + 89 + 127 = 372 pennies.'
  },

{
    id: '2nd-66', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'A toy store had 245 stuffed animals at the beginning of the month. During the month, they sold 178 stuffed animals and received 94 more from their supplier. How many stuffed animals does the store have now?',
    choices: ['151 animals', '161 animals', '171 animals', '181 animals'], correctAnswer: '161 animals',
    solution: 'Animals remaining: 245 - 178 + 94 = 67 + 94 = 161 stuffed animals.'
  },

{
    id: '2nd-67', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'Compare these numbers and choose the correct statement: 189 and 198.',
    choices: ['189 > 198', '189 = 198', '189 < 198', 'Cannot determine'], correctAnswer: '189 < 198',
    solution: '189 is less than 198 because when comparing hundreds (both 1), tens (8 vs 9), 8 < 9.'
  },

{
    id: '2nd-68', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'The school garden has 4 rows of vegetables with 25 plants in each row. If 8 plants did not grow properly and need to be replanted, how many healthy plants are growing?',
    choices: ['90 plants', '92 plants', '94 plants', '96 plants'], correctAnswer: '92 plants',
    solution: 'Total plants: 4 x 25 = 100. Healthy plants: 100 - 8 = 92 plants.'
  },

{
    id: '2nd-69', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'Mrs. Johnson is arranging chairs for parent night. She sets up 6 rows with 4 chairs in each row. How many chairs did she arrange?',
    choices: ['22 chairs', '23 chairs', '24 chairs', '25 chairs'], correctAnswer: '24 chairs',
    solution: 'Total chairs: 6 rows x 4 chairs = 24 chairs.'
  },

{
    id: '2nd-70', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The art teacher has 28 paintbrushes to distribute equally among 7 students. How many paintbrushes will each student receive?',
    choices: ['3 brushes', '4 brushes', '5 brushes', '6 brushes'], correctAnswer: '4 brushes',
    solution: 'Brushes per student: 28 ÷ 7 = 4 paintbrushes each.'
  },

{
    id: '2nd-71', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the missing number: 9 x ___ = 63',
    choices: ['6', '7', '8', '9'], correctAnswer: '7',
    solution: '9 x 7 = 63, so the missing number is 7.'
  },

{
    id: '2nd-72', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The school library has 42 books to put on shelves. If each shelf holds 6 books, how many shelves will be completely filled?',
    choices: ['6 shelves', '7 shelves', '8 shelves', '9 shelves'], correctAnswer: '7 shelves',
    solution: 'Number of shelves: 42 ÷ 6 = 7 shelves will be completely filled.'
  },

{
    id: '2nd-73', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What number makes this equation true: ___ - 17 = 26?',
    choices: ['43', '44', '45', '46'], correctAnswer: '43',
    solution: 'To find the missing number: 26 + 17 = 43. Check: 43 - 17 = 26'
  },

{
    id: '2nd-74', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The cafeteria serves pizza in square slices. Each whole pizza is cut into 8 equal slices. If they need to serve 56 slices for lunch, how many whole pizzas should they prepare?',
    choices: ['6 pizzas', '7 pizzas', '8 pizzas', '9 pizzas'], correctAnswer: '7 pizzas',
    solution: 'Number of pizzas needed: 56 ÷ 8 = 7 whole pizzas.'
  },

{
    id: '2nd-75', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number in this pattern: 4, 8, 12, 16, ___, 24?',
    choices: ['18', '19', '20', '21'], correctAnswer: '20',
    solution: 'The pattern increases by 4 each time: 16 + 4 = 20.'
  },

{
    id: '2nd-76', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'If 8 x 9 = 72, then what does 9 x 8 equal?',
    choices: ['63', '71', '72', '81'], correctAnswer: '72',
    solution: 'Multiplication is commutative, so 9 x 8 = 8 x 9 = 72.'
  },

{
    id: '2nd-77', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'In the number 456, what is the value of the digit 4?',
    choices: ['4', '40', '400', '4000'], correctAnswer: '400',
    solution: 'The digit 4 is in the hundreds place, so its value is 400.'
  },

{
    id: '2nd-78', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Which number has a 7 in the ones place?',
    choices: ['372', '173', '731', '237'], correctAnswer: '237',
    solution: 'In 237, the digit 7 is in the ones place (rightmost position).'
  },

{
    id: '2nd-79', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 284 to the nearest ten.',
    choices: ['280', '285', '290', '300'], correctAnswer: '280',
    solution: 'The ones digit is 4, which is less than 5, so round down to 280.'
  },

{
    id: '2nd-80', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Write the number that is 10 more than 396.',
    choices: ['386', '397', '406', '486'], correctAnswer: '406',
    solution: 'Adding 10 to 396: 396 + 10 = 406.'
  },

{
    id: '2nd-81', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Which number is between 345 and 355?',
    choices: ['344', '349', '356', '360'], correctAnswer: '349',
    solution: '349 is the only number that falls between 345 and 355.'
  },

{
    id: '2nd-82', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is 627 written in expanded form?',
    choices: ['600 + 20 + 7', '60 + 27', '6 + 2 + 7', '627'], correctAnswer: '600 + 20 + 7',
    solution: '627 = 600 (hundreds) + 20 (tens) + 7 (ones).'
  },

{
    id: '2nd-83', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'Round 538 to the nearest hundred.',
    choices: ['500', '540', '600', '530'], correctAnswer: '500',
    solution: 'The tens digit is 3, which is less than 5, so round down to 500.'
  },

{
    id: '2nd-84', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'Which digit is in the tens place of the number 1,847?',
    choices: ['1', '8', '4', '7'], correctAnswer: '4',
    solution: 'In 1,847: 1 is thousands, 8 is hundreds, 4 is tens, 7 is ones.'
  },

{
    id: '2nd-85', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'The school assembly starts at 9:00 AM and lasts for 2 hours. What time does the assembly end?',
    choices: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'], correctAnswer: '11:00 AM',
    solution: 'Assembly end time: 9:00 AM + 2 hours = 11:00 AM.'
  },

{
    id: '2nd-86', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'Maya measured her pencil using paper clips. The pencil is 8 paper clips long. If each paper clip is 3 centimeters long, how long is the pencil?',
    choices: ['22 cm', '24 cm', '26 cm', '28 cm'], correctAnswer: '24 cm',
    solution: 'Pencil length: 8 paper clips x 3 cm = 24 centimeters.'
  },

{
    id: '2nd-87', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'The school garden measures 4 meters long and 3 meters wide. What is the perimeter of the garden?',
    choices: ['12 meters', '14 meters', '16 meters', '18 meters'], correctAnswer: '14 meters',
    solution: 'Perimeter = 2 x (length + width) = 2 x (4 + 3) = 2 x 7 = 14 meters.'
  },

{
    id: '2nd-88', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'Tommy has saved 3 quarters, 2 dimes, and 5 pennies. How much money does Tommy have?',
    choices: ['98 cents', '99 cents', '100 cents', '101 cents'], correctAnswer: '100 cents',
    solution: 'Total money: (3 x 25¢) + (2 x 10¢) + (5 x 1¢) = 75¢ + 20¢ + 5¢ = 100 cents.'
  },

{
    id: '2nd-89', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'The second grade field trip will last from 9:30 AM to 2:30 PM. How many hours long is the field trip?',
    choices: ['4 hours', '5 hours', '6 hours', '7 hours'], correctAnswer: '5 hours',
    solution: 'Time duration: From 9:30 AM to 2:30 PM is 5 hours.'
  },

{
    id: '2nd-90', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'Mrs. Chen is making a rectangular bulletin board that is 6 feet long and 4 feet wide. What is the area of the bulletin board?',
    choices: ['20 square feet', '22 square feet', '24 square feet', '26 square feet'], correctAnswer: '24 square feet',
    solution: 'Area = length x width = 6 feet x 4 feet = 24 square feet.'
  },

{
    id: '2nd-91', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school nurse counted the band-aids in her office. She has 3 boxes with 25 band-aids in each box, plus 14 loose band-aids. How many band-aids does she have in total?',
    choices: ['87 band-aids', '89 band-aids', '91 band-aids', '93 band-aids'], correctAnswer: '89 band-aids',
    solution: 'Band-aids in boxes: 3 x 25 = 75. Total: 75 + 14 = 89 band-aids.'
  },

{
    id: '2nd-92', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'During reading time, Jake counted 67 pages in his book. His friend Sam counted 45 pages in his book. How many pages did they count altogether?',
    choices: ['110 pages', '112 pages', '114 pages', '116 pages'], correctAnswer: '112 pages',
    solution: 'Total pages: 67 + 45 = 112 pages.'
  },

{
    id: '2nd-93', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'The classroom has 156 crayons. If 78 crayons are broken and need to be thrown away, how many good crayons are left?',
    choices: ['76 crayons', '78 crayons', '80 crayons', '82 crayons'], correctAnswer: '78 crayons',
    solution: 'Good crayons remaining: 156 - 78 = 78 crayons.'
  },

{
    id: '2nd-94', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'Skip counting by fives: 5, 10, 15, 20, 25, 30, ___. What comes next?',
    choices: ['32', '33', '35', '37'], correctAnswer: '35',
    solution: 'When skip counting by fives, add 5 to the previous number: 30 + 5 = 35.'
  },

{
    id: '2nd-95', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 2,
    questionText: 'The second grade classes are collecting food cans for charity. Room A collected 89 cans, Room B collected 67 cans, and Room C collected 94 cans. How many cans did all three rooms collect?',
    choices: ['248 cans', '250 cans', '252 cans', '254 cans'], correctAnswer: '250 cans',
    solution: 'Total cans: 89 + 67 + 94 = 250 cans.'
  },

{
    id: '2nd-96', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'Which number is even: 137, 248, 359, or 461?',
    choices: ['137', '248', '359', '461'], correctAnswer: '248',
    solution: 'Even numbers end in 0, 2, 4, 6, or 8. Only 248 ends in 8, so it is even.'
  },

{
    id: '2nd-97', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'A toy store started the week with 324 puzzles. During the week, they sold 187 puzzles and received a shipment of 156 new puzzles. How many puzzles do they have now?',
    choices: ['291 puzzles', '293 puzzles', '295 puzzles', '297 puzzles'], correctAnswer: '293 puzzles',
    solution: 'Puzzles remaining: 324 - 187 + 156 = 137 + 156 = 293 puzzles.'
  },

{
    id: '2nd-98', gradeMin: 2, gradeMax: 2, domain: 'Number Sense', difficulty: 3,
    questionText: 'Compare these numbers: 276 and 267. Which statement is correct?',
    choices: ['276 < 267', '276 = 267', '276 > 267', 'Cannot compare'], correctAnswer: '276 > 267',
    solution: 'Comparing hundreds (both 2), then tens: 7 > 6, so 276 > 267.'
  },

{
    id: '2nd-99', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The music teacher is arranging students for the concert. She puts them in 7 rows with 6 students in each row. How many students are performing?',
    choices: ['40 students', '41 students', '42 students', '43 students'], correctAnswer: '42 students',
    solution: 'Total students: 7 rows x 6 students = 42 students.'
  },

{
    id: '2nd-100', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The gym teacher has 35 jump ropes to share equally among 5 classes. How many jump ropes will each class get?',
    choices: ['6 jump ropes', '7 jump ropes', '8 jump ropes', '9 jump ropes'], correctAnswer: '7 jump ropes',
    solution: 'Jump ropes per class: 35 ÷ 5 = 7 jump ropes.'
  },

{
    id: '2nd-101', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What number makes this equation true: 8 x ___ = 48?',
    choices: ['5', '6', '7', '8'], correctAnswer: '6',
    solution: '8 x 6 = 48, so the missing number is 6.'
  },

{
    id: '2nd-102', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'The school store has 54 pencils to put into packages. If each package holds 9 pencils, how many complete packages can they make?',
    choices: ['5 packages', '6 packages', '7 packages', '8 packages'], correctAnswer: '6 packages',
    solution: 'Number of packages: 54 ÷ 9 = 6 complete packages.'
  },

{
    id: '2nd-103', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Find the missing number: ___ + 29 = 65',
    choices: ['34', '35', '36', '37'], correctAnswer: '36',
    solution: 'To find the missing number: 65 - 29 = 36. Check: 36 + 29 = 65'
  },

{
    id: '2nd-104', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The school carnival game has prizes arranged in rows. There are 8 rows with 11 prizes in each row. How many prizes are there in total?',
    choices: ['86 prizes', '87 prizes', '88 prizes', '89 prizes'], correctAnswer: '88 prizes',
    solution: 'Total prizes: 8 rows x 11 prizes = 88 prizes.'
  },

{
    id: '2nd-105', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What comes next in this pattern: 3, 6, 9, 12, 15, ___?',
    choices: ['16', '17', '18', '19'], correctAnswer: '18',
    solution: 'The pattern increases by 3 each time: 15 + 3 = 18.'
  },

{
    id: '2nd-106', gradeMin: 2, gradeMax: 2, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'If 7 x 8 = 56, then what does 8 x 7 equal?',
    choices: ['49', '54', '56', '63'], correctAnswer: '56',
    solution: 'Multiplication is commutative, so 8 x 7 = 7 x 8 = 56.'
  },

{
    id: '2nd-107', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'In the number 683, what is the value of the digit 8?',
    choices: ['8', '80', '800', '8000'], correctAnswer: '80',
    solution: 'The digit 8 is in the tens place, so its value is 80.'
  },

{
    id: '2nd-108', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 1,
    questionText: 'Which number has a 9 in the hundreds place?',
    choices: ['291', '129', '921', '912'], correctAnswer: '921',
    solution: 'In 921, the digit 9 is in the hundreds place (leftmost position).'
  },

{
    id: '2nd-109', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 347 to the nearest ten.',
    choices: ['340', '345', '350', '400'], correctAnswer: '350',
    solution: 'The ones digit is 7, which is 5 or greater, so round up to 350.'
  },

{
    id: '2nd-110', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'What number is 100 more than 258?',
    choices: ['358', '359', '368', '368'], correctAnswer: '358',
    solution: 'Adding 100 to 258: 258 + 100 = 358.'
  },

{
    id: '2nd-111', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 2,
    questionText: 'Which number is between 456 and 466?',
    choices: ['455', '461', '467', '470'], correctAnswer: '461',
    solution: '461 is the only number that falls between 456 and 466.'
  },

{
    id: '2nd-112', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'What is 734 written in expanded form?',
    choices: ['700 + 30 + 4', '70 + 34', '7 + 3 + 4', '734'], correctAnswer: '700 + 30 + 4',
    solution: '734 = 700 (hundreds) + 30 (tens) + 4 (ones).'
  },

{
    id: '2nd-113', gradeMin: 2, gradeMax: 2, domain: 'Place Value', difficulty: 3,
    questionText: 'Round 862 to the nearest hundred.',
    choices: ['800', '860', '870', '900'], correctAnswer: '900',
    solution: 'The tens digit is 6, which is 5 or greater, so round up to 900.'
  },

{
    id: '2nd-114', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 1,
    questionText: 'The school movie starts at 1:30 PM and lasts for 1 hour and 30 minutes. What time does the movie end?',
    choices: ['2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'], correctAnswer: '3:00 PM',
    solution: 'Movie end time: 1:30 PM + 1 hour 30 minutes = 3:00 PM.'
  },

{
    id: '2nd-115', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'Lily measured her desk using paper clips. The desk is 12 paper clips long. If each paper clip is 4 centimeters long, how long is her desk?',
    choices: ['46 cm', '48 cm', '50 cm', '52 cm'], correctAnswer: '48 cm',
    solution: 'Desk length: 12 paper clips x 4 cm = 48 centimeters.'
  },

{
    id: '2nd-116', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'The playground measures 8 meters long and 6 meters wide. What is the perimeter of the playground?',
    choices: ['26 meters', '28 meters', '30 meters', '32 meters'], correctAnswer: '28 meters',
    solution: 'Perimeter = 2 x (length + width) = 2 x (8 + 6) = 2 x 14 = 28 meters.'
  },

{
    id: '2nd-117', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 2,
    questionText: 'Sarah has 4 quarters, 3 dimes, and 7 pennies in her piggy bank. How much money does Sarah have?',
    choices: ['135 cents', '137 cents', '139 cents', '141 cents'], correctAnswer: '137 cents',
    solution: 'Total money: (4 x 25¢) + (3 x 10¢) + (7 x 1¢) = 100¢ + 30¢ + 7¢ = 137 cents.'
  },

{
    id: '2nd-118', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'The school picnic starts at 11:15 AM and ends at 3:45 PM. How long does the picnic last?',
    choices: ['4 hours 15 minutes', '4 hours 30 minutes', '4 hours 45 minutes', '5 hours'], correctAnswer: '4 hours 30 minutes',
    solution: 'From 11:15 AM to 3:45 PM is 4 hours and 30 minutes.'
  },

{
    id: '2nd-119', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'Mr. Thompson is making a rectangular poster that is 9 inches long and 7 inches wide. What is the area of the poster?',
    choices: ['61 square inches', '63 square inches', '65 square inches', '67 square inches'], correctAnswer: '63 square inches',
    solution: 'Area = length x width = 9 inches x 7 inches = 63 square inches.'
  },

{
    id: '2nd-120', gradeMin: 2, gradeMax: 2, domain: 'Measurement', difficulty: 3,
    questionText: 'The art teacher needs ribbon for a project. She has 3 pieces of ribbon: one that is 25 centimeters long, one that is 38 centimeters long, and one that is 47 centimeters long. What is the total length of all the ribbon?',
    choices: ['108 cm', '110 cm', '112 cm', '114 cm'], correctAnswer: '110 cm',
    solution: 'Total ribbon length: 25 + 38 + 47 = 110 centimeters.'
  },

];

export default grade2Questions;
