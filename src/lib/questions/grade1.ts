import { Question } from '../types';

export const grade1Questions: Question[] = [
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
    id: 'img-1',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Emma is building with blocks. She wants to use a shape that has 3 corners. Which shape should she pick?',
    choices: [
      { type: 'image', src: '/triangle.png', alt: 'Triangle' },
      { type: 'image', src: '/square.png', alt: 'Square' },
      { type: 'image', src: '/circle.png', alt: 'Circle' }
    ],
    correctAnswer: 'A',
    solution: 'A triangle has 3 corners and 3 sides.'
  },

{
    id: 'img-2',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Tommy is looking for a shape that looks like a window. All 4 sides are the same length. Which shape is he looking for?',
    choices: [
      { type: 'image', src: '/circle.png', alt: 'Circle' },
      { type: 'image', src: '/square.png', alt: 'Square' },
      { type: 'image', src: '/triangle.png', alt: 'Triangle' }
    ],
    correctAnswer: 'B',
    solution: 'A square has 4 equal sides, just like many windows.'
  },

{
    id: 'img-3',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Sarah is drawing the sun. She wants to use a shape that rolls and has no corners. Which shape should she choose?',
    choices: [
      { type: 'image', src: '/square.png', alt: 'Square' },
      { type: 'image', src: '/triangle.png', alt: 'Triangle' },
      { type: 'image', src: '/circle.png', alt: 'Circle' }
    ],
    correctAnswer: 'C',
    solution: 'A circle is round like the sun and has no corners.'
  },

{
    id: 'img-4',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Mike is making a pizza slice for his pretend restaurant. The slice has a pointy end and 3 straight edges. Which shape is his pizza slice?',
    choices: [
      { type: 'image', src: '/triangle.png', alt: 'Triangle' },
      { type: 'image', src: '/circle.png', alt: 'Circle' },
      { type: 'image', src: '/square.png', alt: 'Square' }
    ],
    correctAnswer: 'A',
    solution: 'A pizza slice is shaped like a triangle with 3 sides and 3 corners.'
  },

{
    id: 'img-5',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Anna is making a house with blocks. She needs a shape for the roof that has a point at the top. Which shape should she use?',
    choices: [
      { type: 'image', src: '/circle.png', alt: 'Circle' },
      { type: 'image', src: '/triangle.png', alt: 'Triangle' },
      { type: 'image', src: '/square.png', alt: 'Square' }
    ],
    correctAnswer: 'B',
    solution: 'A triangle has a point at the top, perfect for a roof.'
  },

{
    id: 'img-6',
    gradeMin: 1,
    gradeMax: 1,
    domain: 'Shapes',
    difficulty: 1,
    questionText: 'Ben is looking for a shape that looks like a ball or a wheel. It can roll in any direction. Which shape is he thinking of?',
    choices: [
      { type: 'image', src: '/square.png', alt: 'Square' },
      { type: 'image', src: '/circle.png', alt: 'Circle' },
      { type: 'image', src: '/triangle.png', alt: 'Triangle' }
    ],
    correctAnswer: 'B',
    solution: 'A circle is round like a ball or wheel and can roll.'
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
    id: '41', gradeMin: 1, gradeMax: 2, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 9 + 8?', choices: ['15', '16', '17', '18'], correctAnswer: '17',
    solution: '9 + 8 = 17'
  },

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

{
    id: '1st-45', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Emma is collecting stickers for her album. She has 3 sparkly stickers and 4 rainbow stickers. How many stickers does Emma have altogether?',
    choices: ['6 stickers', '7 stickers', '8 stickers', '9 stickers'], correctAnswer: '7 stickers',
    solution: 'Add the stickers together: 3 + 4 = 7 stickers.'
  },

{
    id: '1st-46', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Tommy has 9 toy cars in his collection. His little brother takes away 3 of them to play with. How many toy cars does Tommy have left?',
    choices: ['5 cars', '6 cars', '7 cars', '8 cars'], correctAnswer: '6 cars',
    solution: 'Subtract the cars taken away: 9 - 3 = 6 cars left.'
  },

{
    id: '1st-47', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school playground, there are 5 swings and 6 slides. How many pieces of playground equipment are there in total?',
    choices: ['10 pieces', '11 pieces', '12 pieces', '13 pieces'], correctAnswer: '11 pieces',
    solution: 'Add the swings and slides: 5 + 6 = 11 pieces of equipment.'
  },

{
    id: '1st-48', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Maria is counting by twos while jumping rope. She says: 2, 4, 6, 8. What number should she say next?',
    choices: ['9', '10', '11', '12'], correctAnswer: '10',
    solution: 'When counting by twos, add 2 to the last number: 8 + 2 = 10.'
  },

{
    id: '1st-49', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'In the classroom, there are 12 students sitting at tables and 4 students sitting on the carpet. How many students are in the classroom altogether?',
    choices: ['15 students', '16 students', '17 students', '18 students'], correctAnswer: '16 students',
    solution: 'Add all the students: 12 + 4 = 16 students in the classroom.'
  },

{
    id: '1st-50', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Jake is organizing his crayons. He puts them in groups of 5. If he makes 3 groups, how many crayons does Jake have?',
    choices: ['8 crayons', '12 crayons', '15 crayons', '18 crayons'], correctAnswer: '15 crayons',
    solution: 'Count by fives three times: 5 + 5 + 5 = 15 crayons, or 3 groups x 5 = 15.'
  },

{
    id: '1st-51', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Sarah has 8 flower stickers. She gives 2 stickers to her friend and 1 sticker to her sister. How many flower stickers does Sarah have left?',
    choices: ['4 stickers', '5 stickers', '6 stickers', '7 stickers'], correctAnswer: '5 stickers',
    solution: 'Sarah gives away 2 + 1 = 3 stickers. She has 8 - 3 = 5 stickers left.'
  },

{
    id: '1st-52', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The teacher is setting up chairs for story time. She arranges 4 chairs in the first row and 5 chairs in the second row. How many chairs did she set up?',
    choices: ['8 chairs', '9 chairs', '10 chairs', '11 chairs'], correctAnswer: '9 chairs',
    solution: 'Add the chairs in both rows: 4 + 5 = 9 chairs total.'
  },

{
    id: '1st-53', gradeMin: 1, gradeMax: 1, domain: 'Place Value', difficulty: 1,
    questionText: 'Look at the number 17. How many ones are in this number?',
    choices: ['1 one', '6 ones', '7 ones', '10 ones'], correctAnswer: '7 ones',
    solution: 'In the number 17, the digit 7 is in the ones place, so there are 7 ones.'
  },

{
    id: '1st-54', gradeMin: 1, gradeMax: 1, domain: 'Place Value', difficulty: 2,
    questionText: 'Mrs. Johnson has 2 bags of apples with 10 apples in each bag. How many apples does she have altogether?',
    choices: ['12 apples', '20 apples', '22 apples', '30 apples'], correctAnswer: '20 apples',
    solution: 'Each bag has 10 apples, so 2 bags have 10 + 10 = 20 apples.'
  },

{
    id: '1st-55', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'During art class, the students made paper butterflies. The first table made 6 butterflies, the second table made 3 butterflies, and the third table made 4 butterflies. How many butterflies did all the tables make together?',
    choices: ['11 butterflies', '12 butterflies', '13 butterflies', '14 butterflies'], correctAnswer: '13 butterflies',
    solution: 'Add all the butterflies: 6 + 3 + 4 = 13 butterflies.'
  },

{
    id: '1st-56', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Ben is feeding fish at the pond. He counts 7 goldfish and 5 black fish swimming near him. How many fish is Ben watching?',
    choices: ['11 fish', '12 fish', '13 fish', '14 fish'], correctAnswer: '12 fish',
    solution: 'Count all the fish: 7 + 5 = 12 fish that Ben is watching.'
  },

{
    id: '1st-57', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school fair, Lisa plays a ring toss game. She tosses 10 rings but only 4 rings land on the bottles. How many rings missed the bottles?',
    choices: ['5 rings', '6 rings', '7 rings', '8 rings'], correctAnswer: '6 rings',
    solution: 'Subtract the rings that landed from the total: 10 - 4 = 6 rings missed.'
  },

{
    id: '1st-58', gradeMin: 1, gradeMax: 1, domain: 'Measurement', difficulty: 1,
    questionText: 'Anna is measuring her pencil using paper clips. Her pencil is as long as 4 paper clips placed end to end. How long is Anna\'s pencil?',
    choices: ['3 paper clips long', '4 paper clips long', '5 paper clips long', '6 paper clips long'], correctAnswer: '4 paper clips long',
    solution: 'The pencil measures exactly 4 paper clips long.'
  },

{
    id: '1st-59', gradeMin: 1, gradeMax: 1, domain: 'Measurement', difficulty: 2,
    questionText: 'The teacher asks students to find something in the classroom that is longer than their hand. Which item would be longer than a first grader\'s hand?',
    choices: ['A crayon', 'A ruler', 'A paper clip', 'An eraser'], correctAnswer: 'A ruler',
    solution: 'A ruler is typically much longer than a first grader\'s hand, while the other items are shorter.'
  },

{
    id: '1st-60', gradeMin: 1, gradeMax: 1, domain: 'Geometry', difficulty: 1,
    questionText: 'Kevin is building a tower with blocks. He wants to put a round block on top that will roll if bumped. Which shape should Kevin choose for the top of his tower?',
    choices: ['Square', 'Triangle', 'Circle', 'Rectangle'], correctAnswer: 'Circle',
    solution: 'A circle is round and will roll, making it the shape that rolls if bumped.'
  },

{
    id: '1st-61', gradeMin: 1, gradeMax: 1, domain: 'Geometry', difficulty: 2,
    questionText: 'Mia is making a picture frame for her drawing. She needs a shape that has 4 equal sides and 4 corners that make perfect squares. Which shape should she use?',
    choices: ['Circle', 'Triangle', 'Rectangle', 'Square'], correctAnswer: 'Square',
    solution: 'A square has 4 equal sides and 4 right-angle corners, perfect for a frame.'
  },

{
    id: '1st-62', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'During lunch, the cafeteria served 8 cheese sandwiches and 7 peanut butter sandwiches. At the end of lunch, 3 sandwiches were left over. How many sandwiches were eaten?',
    choices: ['11 sandwiches', '12 sandwiches', '13 sandwiches', '14 sandwiches'], correctAnswer: '12 sandwiches',
    solution: 'Total sandwiches: 8 + 7 = 15. Sandwiches eaten: 15 - 3 = 12 sandwiches.'
  },

{
    id: '1st-63', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Alex is sorting his baseball card collection. He has 6 cards of pitchers and 4 cards of catchers. How many baseball cards does Alex have in these two groups?',
    choices: ['9 cards', '10 cards', '11 cards', '12 cards'], correctAnswer: '10 cards',
    solution: 'Add the pitcher and catcher cards: 6 + 4 = 10 baseball cards.'
  },

{
    id: '1st-64', gradeMin: 1, gradeMax: 1, domain: 'Pattern Recognition', difficulty: 2,
    questionText: 'Sophie is making a pattern with colored beads: red, blue, red, blue, red, blue. What color bead should come next in her pattern?',
    choices: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Red',
    solution: 'The pattern alternates red, blue, red, blue. After blue comes red.'
  },

{
    id: '1st-65', gradeMin: 1, gradeMax: 1, domain: 'Pattern Recognition', difficulty: 2,
    questionText: 'Danny is arranging toys in a pattern: car, truck, car, truck, car. What toy should Danny place next to continue his pattern?',
    choices: ['Car', 'Truck', 'Airplane', 'Bus'], correctAnswer: 'Truck',
    solution: 'The pattern alternates car, truck, car, truck, car. Next should be truck.'
  },

{
    id: '1st-66', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The first grade class is going on a field trip. There are 9 students in the morning group and 6 students in the afternoon group. How many students are going on the field trip altogether?',
    choices: ['14 students', '15 students', '16 students', '17 students'], correctAnswer: '15 students',
    solution: 'Add both groups of students: 9 + 6 = 15 students going on the trip.'
  },

{
    id: '1st-67', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Maya has 11 stickers in her collection. She uses 5 stickers to decorate her notebook. How many stickers does Maya have left in her collection?',
    choices: ['5 stickers', '6 stickers', '7 stickers', '8 stickers'], correctAnswer: '6 stickers',
    solution: 'Subtract the stickers she used: 11 - 5 = 6 stickers left.'
  },

{
    id: '1st-68', gradeMin: 1, gradeMax: 1, domain: 'Time', difficulty: 1,
    questionText: 'The school day starts in the morning and ends in the afternoon. Which time of day comes after afternoon?',
    choices: ['Morning', 'Noon', 'Evening', 'Midnight'], correctAnswer: 'Evening',
    solution: 'The order of day is: morning, afternoon, evening, then night.'
  },

{
    id: '1st-69', gradeMin: 1, gradeMax: 1, domain: 'Money', difficulty: 2,
    questionText: 'Carter has 3 pennies in his piggy bank. His mom gives him 4 more pennies. How many pennies does Carter have now?',
    choices: ['6 pennies', '7 pennies', '8 pennies', '9 pennies'], correctAnswer: '7 pennies',
    solution: 'Add the pennies together: 3 + 4 = 7 pennies total.'
  },

{
    id: '1st-70', gradeMin: 1, gradeMax: 1, domain: 'Data & Graphs', difficulty: 2,
    questionText: 'Mrs. Lee made a chart showing her students\' favorite pets. Dogs got 8 votes, cats got 5 votes, and fish got 2 votes. Which pet was the most popular?',
    choices: ['Dogs', 'Cats', 'Fish', 'All the same'], correctAnswer: 'Dogs',
    solution: 'Dogs had the most votes with 8, which is more than cats (5) or fish (2).'
  },

{
    id: '1st-71', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The art teacher gives each student 2 paintbrushes for their project. If there are 7 students in the art class, how many paintbrushes does the teacher give out?',
    choices: ['9 paintbrushes', '12 paintbrushes', '14 paintbrushes', '16 paintbrushes'], correctAnswer: '14 paintbrushes',
    solution: 'Each of 7 students gets 2 brushes: 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14 paintbrushes.'
  },

{
    id: '1st-72', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'During recess, 4 children are playing on the swings, 3 children are on the seesaw, and 5 children are playing tag. How many children are playing outside?',
    choices: ['11 children', '12 children', '13 children', '14 children'], correctAnswer: '12 children',
    solution: 'Add all the children playing: 4 + 3 + 5 = 12 children outside.'
  },

{
    id: '1st-73', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Zoe is collecting leaves for her science project. On Monday she found 4 leaves, on Tuesday she found 3 leaves, and on Wednesday she found 6 leaves. How many leaves has Zoe collected for her project?',
    choices: ['12 leaves', '13 leaves', '14 leaves', '15 leaves'], correctAnswer: '13 leaves',
    solution: 'Add leaves from all three days: 4 + 3 + 6 = 13 leaves total.'
  },

{
    id: '1st-74', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The librarian is arranging books on a shelf. She puts 5 picture books on the left side and 7 chapter books on the right side. Then she removes 2 books to put in the return pile. How many books are left on the shelf?',
    choices: ['8 books', '9 books', '10 books', '11 books'], correctAnswer: '10 books',
    solution: 'Total books placed: 5 + 7 = 12 books. Books removed: 2. Books left: 12 - 2 = 10 books.'
  },

{
    id: '1st-75', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 1,
    questionText: 'Lucy is helping her dad build a birdhouse. She needs to find a piece of wood that has 4 sides that are all the same length and 4 corners that are all the same. What shape should Lucy look for?',
    choices: ['Circle', 'Triangle', 'Rectangle', 'Square'], correctAnswer: 'Square',
    solution: 'A square has 4 equal sides and 4 equal corners (right angles), perfect for the birdhouse.'
  },

{
    id: '1st-76', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'During art class, Marcus is cutting out shapes for a collage. He wants a shape that has no corners and no straight edges, just like a ball or the moon. Which shape should Marcus cut out?',
    choices: ['Square', 'Triangle', 'Circle', 'Rectangle'], correctAnswer: 'Circle',
    solution: 'A circle has no corners and no straight edges, just like a ball or the moon.'
  },

{
    id: '1st-77', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 1,
    questionText: 'Isabella is making a sandwich and cuts it diagonally from one corner to the opposite corner. The sandwich is now in two pieces. What shape is each piece?',
    choices: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle',
    solution: 'When you cut a square sandwich diagonally, each piece becomes a triangle with 3 sides and 3 corners.'
  },

{
    id: '1st-78', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'Ryan is looking at the classroom door. The door is taller than it is wide and has 4 corners and 4 sides. Two sides are long and two sides are short. What shape is the door?',
    choices: ['Circle', 'Triangle', 'Square', 'Rectangle'], correctAnswer: 'Rectangle',
    solution: 'A rectangle has 4 corners and 4 sides, with two long sides and two short sides.'
  },

{
    id: '1st-79', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'Sophia is playing with shape blocks. She picks up a block that has 3 straight sides and 3 pointed corners. If she pushes it, it might tip over onto one of its sides. What shape is Sophia holding?',
    choices: ['Circle', 'Square', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle',
    solution: 'A triangle has exactly 3 straight sides and 3 pointed corners.'
  },

{
    id: '1st-80', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 1,
    questionText: 'Noah is drawing a picture of his house. For the front of the house, he draws a shape that looks like a box with 4 corners and 4 sides. The top and bottom sides are longer than the left and right sides. What shape did Noah draw?',
    choices: ['Circle', 'Triangle', 'Square', 'Rectangle'], correctAnswer: 'Rectangle',
    solution: 'A rectangle has 4 sides and 4 corners, with longer sides on top/bottom and shorter sides on the left/right.'
  },

{
    id: '1st-81', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'Emma is sorting shapes into groups. She has one group for shapes with corners and another group for shapes without corners. In which group should she put a circle?',
    choices: ['Shapes with corners', 'Shapes without corners', 'Both groups', 'Neither group'], correctAnswer: 'Shapes without corners',
    solution: 'A circle is perfectly round and has no corners or straight edges.'
  },

{
    id: '1st-82', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'At the playground, Lily sees different shapes around her. The merry-go-round is round, the sandbox is square, and the slide has a triangular ladder. How many different shapes did Lily notice?',
    choices: ['1 shape', '2 shapes', '3 shapes', '4 shapes'], correctAnswer: '3 shapes',
    solution: 'Lily noticed 3 different shapes: circle (merry-go-round), square (sandbox), and triangle (slide ladder).'
  },

{
    id: '1st-83', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 1,
    questionText: 'Jack is making a robot out of cardboard boxes. For the robot\'s head, he wants to use a shape that looks like a window or a picture frame, with 4 equal sides and 4 equal corners. What shape should Jack choose?',
    choices: ['Circle', 'Triangle', 'Rectangle', 'Square'], correctAnswer: 'Square',
    solution: 'A square has 4 equal sides and 4 equal corners, just like many windows and picture frames.'
  },

{
    id: '1st-84', gradeMin: 1, gradeMax: 1, domain: 'Shapes', difficulty: 2,
    questionText: 'Maya is learning about shapes by looking at real objects in her classroom. She sees a clock on the wall, a triangular flag, and a rectangular book. Which object matches the shape that has no straight sides and can roll?',
    choices: ['The clock', 'The flag', 'The book', 'None of them'], correctAnswer: 'The clock',
    solution: 'The clock is circular - it has no straight sides and a circle can roll. The flag is triangular and the book is rectangular, both have straight sides.'
  },

{
    id: '1st-85', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'At the zoo, Oliver sees 7 monkeys swinging on branches and 2 monkeys eating bananas on the ground. How many monkeys does Oliver see altogether?',
    choices: ['8 monkeys', '9 monkeys', '10 monkeys', '11 monkeys'], correctAnswer: '9 monkeys',
    solution: 'Add the monkeys together: 7 + 2 = 9 monkeys total.'
  },

{
    id: '1st-86', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Grace has 13 colorful hair ties in her collection. She gives 4 hair ties to her sister and 2 hair ties to her cousin. How many hair ties does Grace have left?',
    choices: ['6 hair ties', '7 hair ties', '8 hair ties', '9 hair ties'], correctAnswer: '7 hair ties',
    solution: 'Grace gives away 4 + 2 = 6 hair ties. She has 13 - 6 = 7 hair ties left.'
  },

{
    id: '1st-87', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'During snack time, the teacher puts 5 apple slices and 6 orange slices on each table. How many fruit slices are on one table?',
    choices: ['10 slices', '11 slices', '12 slices', '13 slices'], correctAnswer: '11 slices',
    solution: 'Add the apple and orange slices: 5 + 6 = 11 fruit slices on each table.'
  },

{
    id: '1st-88', gradeMin: 1, gradeMax: 1, domain: 'Measurement', difficulty: 2,
    questionText: 'Charlie is comparing the height of his teddy bears. His brown bear is taller than his white bear, but shorter than his black bear. Which bear is the tallest?',
    choices: ['Brown bear', 'White bear', 'Black bear', 'They are all the same'], correctAnswer: 'Black bear',
    solution: 'The black bear is taller than the brown bear, and the brown bear is taller than the white bear, so the black bear is tallest.'
  },

{
    id: '1st-89', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school bus makes 3 stops on the way to school. At the first stop, 4 children get on. At the second stop, 3 children get on. At the third stop, 5 children get on. How many children got on the bus?',
    choices: ['11 children', '12 children', '13 children', '14 children'], correctAnswer: '12 children',
    solution: 'Add children from all stops: 4 + 3 + 5 = 12 children got on the bus.'
  },

{
    id: '1st-90', gradeMin: 1, gradeMax: 1, domain: 'Place Value', difficulty: 1,
    questionText: 'Look at the number 25. How many tens and how many ones are in this number?',
    choices: ['1 ten and 5 ones', '2 tens and 5 ones', '5 tens and 2 ones', '3 tens and 2 ones'], correctAnswer: '2 tens and 5 ones',
    solution: 'In 25, the 2 is in the tens place (2 tens) and the 5 is in the ones place (5 ones).'
  },

{
    id: '1st-91', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Mia is organizing her toy animals. She has 8 farm animals and needs to put them into 2 equal groups. How many animals will be in each group?',
    choices: ['3 animals', '4 animals', '5 animals', '6 animals'], correctAnswer: '4 animals',
    solution: 'Divide 8 animals into 2 equal groups: 8 ÷ 2 = 4 animals in each group.'
  },

{
    id: '1st-92', gradeMin: 1, gradeMax: 1, domain: 'Time', difficulty: 1,
    questionText: 'Yesterday was Monday. What day is today?',
    choices: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'], correctAnswer: 'Tuesday',
    solution: 'If yesterday was Monday, then today is Tuesday.'
  },

{
    id: '1st-93', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'During PE class, the students are divided into teams. Team Red has 6 students, Team Blue has 7 students, and Team Green has 5 students. How many students are playing in PE class?',
    choices: ['17 students', '18 students', '19 students', '20 students'], correctAnswer: '18 students',
    solution: 'Add all team members: 6 + 7 + 5 = 18 students in PE class.'
  },

{
    id: '1st-94', gradeMin: 1, gradeMax: 1, domain: 'Money', difficulty: 1,
    questionText: 'Emma found 5 pennies under her bed and 3 pennies in her backpack. How many pennies did Emma find altogether?',
    choices: ['7 pennies', '8 pennies', '9 pennies', '10 pennies'], correctAnswer: '8 pennies',
    solution: 'Add the pennies from both places: 5 + 3 = 8 pennies total.'
  },

{
    id: '1st-95', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'The teacher has 12 crayons to share equally among 3 students. How many crayons will each student get?',
    choices: ['3 crayons', '4 crayons', '5 crayons', '6 crayons'], correctAnswer: '4 crayons',
    solution: 'Divide 12 crayons among 3 students equally: 12 ÷ 3 = 4 crayons each.'
  },

{
    id: '1st-96', gradeMin: 1, gradeMax: 1, domain: 'Patterns', difficulty: 2,
    questionText: 'Julia is making a bracelet with a pattern of shapes: star, heart, star, heart, star, heart. What shape should come next?',
    choices: ['Star', 'Heart', 'Circle', 'Triangle'], correctAnswer: 'Star',
    solution: 'The pattern alternates star, heart, star, heart. After heart comes star.'
  },

{
    id: '1st-97', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school carnival, Ryan plays a game where he knocks down bottles. He knocks down 6 bottles in the first round and 4 bottles in the second round. If there were 15 bottles total, how many bottles are still standing?',
    choices: ['4 bottles', '5 bottles', '6 bottles', '7 bottles'], correctAnswer: '5 bottles',
    solution: 'Bottles knocked down: 6 + 4 = 10. Bottles still standing: 15 - 10 = 5 bottles.'
  },

{
    id: '1st-98', gradeMin: 1, gradeMax: 1, domain: 'Measurement', difficulty: 1,
    questionText: 'Lily is measuring her desk with her hand spans. Her desk is 6 hand spans long. How long is Lily\'s desk?',
    choices: ['5 hand spans', '6 hand spans', '7 hand spans', '8 hand spans'], correctAnswer: '6 hand spans',
    solution: 'The desk measures exactly 6 hand spans long.'
  },

{
    id: '1st-99', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'In the school garden, there are 9 sunflowers in one row and 6 sunflowers in another row. How many sunflowers are in the garden?',
    choices: ['14 sunflowers', '15 sunflowers', '16 sunflowers', '17 sunflowers'], correctAnswer: '15 sunflowers',
    solution: 'Add sunflowers from both rows: 9 + 6 = 15 sunflowers in the garden.'
  },

{
    id: '1st-100', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Sam is collecting bottle caps. He has 7 red caps, 3 blue caps, and 2 green caps. How many bottle caps does Sam have in his collection?',
    choices: ['11 caps', '12 caps', '13 caps', '14 caps'], correctAnswer: '12 caps',
    solution: 'Add all the bottle caps: 7 + 3 + 2 = 12 bottle caps total.'
  },

{
    id: '1st-101', gradeMin: 1, gradeMax: 1, domain: 'Data', difficulty: 1,
    questionText: 'The class voted for their favorite ice cream flavors. Vanilla got 4 votes, chocolate got 7 votes, and strawberry got 3 votes. Which flavor was the least popular?',
    choices: ['Vanilla', 'Chocolate', 'Strawberry', 'All the same'], correctAnswer: 'Strawberry',
    solution: 'Strawberry had the fewest votes with 3, which is less than vanilla (4) and chocolate (7).'
  },

{
    id: '1st-102', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Kate has 14 stickers and wants to give an equal number to her 2 best friends. How many stickers will each friend receive?',
    choices: ['6 stickers', '7 stickers', '8 stickers', '9 stickers'], correctAnswer: '7 stickers',
    solution: 'Divide 14 stickers equally between 2 friends: 14 ÷ 2 = 7 stickers each.'
  },

{
    id: '1st-103', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The pet store has birds in cages. There are 4 cages with 3 birds in each cage. How many birds are in the pet store?',
    choices: ['10 birds', '11 birds', '12 birds', '13 birds'], correctAnswer: '12 birds',
    solution: 'Each of 4 cages has 3 birds: 3 + 3 + 3 + 3 = 12 birds total.'
  },

{
    id: '1st-104', gradeMin: 1, gradeMax: 1, domain: 'Geometry', difficulty: 1,
    questionText: 'Tyler is building with blocks that are shaped like cubes. Each cube has flat faces that are all the same shape. What shape are the faces of Tyler\'s blocks?',
    choices: ['Circles', 'Triangles', 'Squares', 'Rectangles'], correctAnswer: 'Squares',
    solution: 'A cube has 6 faces, and each face is a square.'
  },

{
    id: '1st-105', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'During story time, 8 children sit on the carpet and 5 children sit in chairs. How many children are listening to the story?',
    choices: ['12 children', '13 children', '14 children', '15 children'], correctAnswer: '13 children',
    solution: 'Add children in both locations: 8 + 5 = 13 children listening to the story.'
  },

{
    id: '1st-106', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Jessica is counting her toy blocks by color. She has 5 red blocks, 4 yellow blocks, and 6 blue blocks. If she uses 3 blocks to build a tower, how many blocks are left?',
    choices: ['11 blocks', '12 blocks', '13 blocks', '14 blocks'], correctAnswer: '12 blocks',
    solution: 'Total blocks: 5 + 4 + 6 = 15 blocks. Blocks left: 15 - 3 = 12 blocks.'
  },

{
    id: '1st-107', gradeMin: 1, gradeMax: 1, domain: 'Time', difficulty: 1,
    questionText: 'School starts in the morning and ends in the afternoon. Which meal do children usually eat at school?',
    choices: ['Breakfast', 'Lunch', 'Dinner', 'Midnight snack'], correctAnswer: 'Lunch',
    solution: 'Lunch is the meal eaten in the middle of the day while children are at school.'
  },

{
    id: '1st-108', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school library has 11 picture books on the shelf. Students check out 4 picture books. How many picture books are left on the shelf?',
    choices: ['6 books', '7 books', '8 books', '9 books'], correctAnswer: '7 books',
    solution: 'Subtract the books checked out: 11 - 4 = 7 books left on the shelf.'
  },

{
    id: '1st-109', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school fair, Michael buys 2 bags of popcorn for 3 tickets each and 1 cotton candy for 4 tickets. How many tickets did Michael spend?',
    choices: ['9 tickets', '10 tickets', '11 tickets', '12 tickets'], correctAnswer: '10 tickets',
    solution: 'Popcorn costs: 2 bags x 3 tickets = 6 tickets. Total spent: 6 + 4 = 10 tickets.'
  },

{
    id: '1st-110', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Anna is planting seeds in her garden. She plants 6 tomato seeds in the first row and 7 flower seeds in the second row. How many seeds did Anna plant?',
    choices: ['12 seeds', '13 seeds', '14 seeds', '15 seeds'], correctAnswer: '13 seeds',
    solution: 'Add seeds from both rows: 6 + 7 = 13 seeds planted.'
  },

{
    id: '1st-111', gradeMin: 1, gradeMax: 1, domain: 'Measurement', difficulty: 2,
    questionText: 'David is arranging his toy cars from shortest to longest. His red car is longer than his blue car but shorter than his green car. Which car should go in the middle?',
    choices: ['Red car', 'Blue car', 'Green car', 'All the same length'], correctAnswer: 'Red car',
    solution: 'If blue < red < green, then the red car goes in the middle position.'
  },

{
    id: '1st-112', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The first grade class is making friendship bracelets. Each bracelet needs 8 beads. If they want to make 3 bracelets, how many beads do they need?',
    choices: ['21 beads', '22 beads', '23 beads', '24 beads'], correctAnswer: '24 beads',
    solution: 'Each of 3 bracelets needs 8 beads: 8 + 8 + 8 = 24 beads total.'
  },

{
    id: '1st-113', gradeMin: 1, gradeMax: 1, domain: 'Money', difficulty: 2,
    questionText: 'Sophie has 8 pennies in her piggy bank. She spends 3 pennies on stickers and finds 2 more pennies in her desk. How many pennies does Sophie have now?',
    choices: ['6 pennies', '7 pennies', '8 pennies', '9 pennies'], correctAnswer: '7 pennies',
    solution: 'Sophie starts with 8, spends 3, and finds 2: 8 - 3 + 2 = 7 pennies.'
  },

{
    id: '1st-114', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'In the school cafeteria, there are 9 round tables and 4 square tables. How many tables are there altogether?',
    choices: ['12 tables', '13 tables', '14 tables', '15 tables'], correctAnswer: '13 tables',
    solution: 'Add both types of tables: 9 + 4 = 13 tables in the cafeteria.'
  },

{
    id: '1st-115', gradeMin: 1, gradeMax: 1, domain: 'Patterns', difficulty: 1,
    questionText: 'Logan is making a pattern with colored blocks: red, blue, green, red, blue, green, red, blue. What color should come next?',
    choices: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Green',
    solution: 'The pattern repeats red, blue, green. After blue comes green.'
  },

{
    id: '1st-116', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school nurse has bandages in her office. She has 12 small bandages and gives out 5 bandages to students who got hurt at recess. Then she receives 3 more bandages from the supply closet. How many bandages does she have now?',
    choices: ['9 bandages', '10 bandages', '11 bandages', '12 bandages'], correctAnswer: '10 bandages',
    solution: 'Start with 12, give out 5, receive 3: 12 - 5 + 3 = 10 bandages.'
  },

{
    id: '1st-117', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Maya is feeding ducks at the pond. She throws bread crumbs to 6 white ducks and 3 brown ducks. How many ducks is Maya feeding?',
    choices: ['8 ducks', '9 ducks', '10 ducks', '11 ducks'], correctAnswer: '9 ducks',
    solution: 'Add the white and brown ducks: 6 + 3 = 9 ducks total.'
  },

{
    id: '1st-118', gradeMin: 1, gradeMax: 1, domain: 'Data', difficulty: 2,
    questionText: 'The teacher asked students about their favorite playground equipment. Swings got 6 votes, slides got 4 votes, and monkey bars got 2 votes. How many students voted?',
    choices: ['10 students', '11 students', '12 students', '13 students'], correctAnswer: '12 students',
    solution: 'Add all the votes: 6 + 4 + 2 = 12 students voted.'
  },

{
    id: '1st-119', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'Ethan has 15 marbles and wants to put them into 3 equal groups to share with his friends. How many marbles will be in each group?',
    choices: ['4 marbles', '5 marbles', '6 marbles', '7 marbles'], correctAnswer: '5 marbles',
    solution: 'Divide 15 marbles into 3 equal groups: 15 ÷ 3 = 5 marbles in each group.'
  },

{
    id: '1st-120', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school book fair, Chloe buys 2 books for 4 dollars each and 1 bookmark for 2 dollars. How much money did Chloe spend?',
    choices: ['8 dollars', '9 dollars', '10 dollars', '11 dollars'], correctAnswer: '10 dollars',
    solution: 'Books cost: 2 x 4 = 8 dollars. Total spent: 8 + 2 = 10 dollars.'
  },

{
    id: '1st-121', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 1,
    questionText: 'The art teacher gives each student 3 paintbrushes. If there are 4 students at the art table, how many paintbrushes does the teacher give out?',
    choices: ['10 paintbrushes', '11 paintbrushes', '12 paintbrushes', '13 paintbrushes'], correctAnswer: '12 paintbrushes',
    solution: 'Each of 4 students gets 3 brushes: 3 + 3 + 3 + 3 = 12 paintbrushes.'
  },

{
    id: '1st-122', gradeMin: 1, gradeMax: 1, domain: 'Time', difficulty: 1,
    questionText: 'Tomorrow is Saturday. What day is today?',
    choices: ['Thursday', 'Friday', 'Saturday', 'Sunday'], correctAnswer: 'Friday',
    solution: 'If tomorrow is Saturday, then today is Friday.'
  },

{
    id: '1st-123', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'Isabella is organizing her stuffed animals on shelves. She puts 4 animals on the top shelf, 6 animals on the middle shelf, and 3 animals on the bottom shelf. How many stuffed animals does Isabella have?',
    choices: ['12 animals', '13 animals', '14 animals', '15 animals'], correctAnswer: '13 animals',
    solution: 'Add animals from all shelves: 4 + 6 + 3 = 13 stuffed animals.'
  },

{
    id: '1st-124', gradeMin: 1, gradeMax: 1, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school picnic, there are 3 tables with 5 students sitting at each table. If 2 more students join the picnic, how many students are at the picnic now?',
    choices: ['15 students', '16 students', '17 students', '18 students'], correctAnswer: '17 students',
    solution: 'Students at tables: 3 x 5 = 15 students. Total with 2 more: 15 + 2 = 17 students.'
  },

];

export default grade1Questions;
