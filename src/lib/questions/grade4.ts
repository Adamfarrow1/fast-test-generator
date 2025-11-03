import { Question } from '../types';

export const grade4Questions: Question[] = [
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
    id: '45', gradeMin: 4, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'Which is greater?', choices: ['3/5', '2/3', 'They are equal', '1/2'], correctAnswer: '2/3',
    solution: '3/5 = 0.6, 2/3 = 0.666… so 2/3 is greater.'
  },

{
    id: '48', gradeMin: 4, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 45% to a decimal.', choices: ['0.45', '4.5', '0.045', '45.0'], correctAnswer: '0.45',
    solution: 'Move the decimal two places left.'
  },

{
    id: '49', gradeMin: 4, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 3.60 + 0.75?', choices: ['3.75', '4.25', '4.35', '4.45'], correctAnswer: '4.35',
    solution: '3.60 + 0.75 = 4.35.'
  },

{
    id: '50', gradeMin: 4, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Round 8.746 to the nearest tenth.', choices: ['8.7', '8.8', '8.74', '8.75'], correctAnswer: '8.7',
    solution: 'Hundredths digit is 4, so round down to 8.7.'
  },

{
    id: '68', gradeMin: 4, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the range of 5, 9, 2, 7?', choices: ['2', '4', '7', '9'], correctAnswer: '7',
    solution: 'Max - min = 9 - 2 = 7.'
  },

{
    id: '70', gradeMin: 4, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'Mean of 10, 12, 14?', choices: ['11', '12', '13', '14'], correctAnswer: '12',
    solution: '(10+12+14)/3 = 12.'
  },

{
    id: '401', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school library received a donation of 326 books in January and 478 books in February. How many books did the library receive in total during these two months?', choices: ['694', '704', '804', '814'], correctAnswer: '804',
    solution: 'Total books = 326 + 478 = 804'
  },

{
    id: '402', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'A movie theater had 900 seats available for the premiere. After all tickets were sold, 456 people attended the show. How many empty seats were there?', choices: ['444', '454', '464', '474'], correctAnswer: '444',
    solution: 'Empty seats = 900 - 456 = 444'
  },

{
    id: '403', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'A video game store sold 3,486 games last month. For their quarterly report, they need to round this number to the nearest hundred. What number should they report?', choices: ['3,400', '3,500', '3,600', '3,000'],
    correctAnswer: '3,500', solution: 'Tens digit is 8 (>=5), round up -> 3,500'
  },

{
    id: '404', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'The population of a small city is 7,248 people. For census purposes, they want to round this to the nearest thousand. What number should they use?', choices: ['7,000', '7,200', '7,500', '8,000'],
    correctAnswer: '7,000', solution: 'Hundreds digit is 2 (<5), round down -> 7,000'
  },

{
    id: '405', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 3,
    questionText: 'Two elementary schools are combining their fundraising efforts. Lincoln Elementary raised $2,345 and Washington Elementary raised $6,789. How much money did they raise together?', choices: ['9,034', '9,124', '9,134', '9,144'],
    correctAnswer: '9,134', solution: 'Total raised = $2,345 + $6,789 = $9,134'
  },

{
    id: '406',
    gradeMin: 4,
    gradeMax: 4,
    domain: 'Number Sense',
    difficulty: 3,
    questionText: 'A charity organization started with $5,000 in their account. They spent $2,376 on supplies for their event. How much money is left in their account?',
    choices: ['2,624', '2,634', '2,744', '2,764'],
    correctAnswer: '2,624',
    solution: 'Money remaining = $5,000 - $2,376 = $2,624'
  },

{
    id: '407', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The fourth-grade class is setting up chairs for their graduation ceremony. They need to arrange 12 rows with 8 chairs in each row. How many chairs do they need in total?', choices: ['86', '92', '96', '104'], correctAnswer: '96',
    solution: 'Total chairs = 12 rows x 8 chairs = 96 chairs'
  },

{
    id: '408', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'The school cafeteria ordered 84 apples and wants to distribute them equally among 7 classrooms. How many apples will each classroom receive?', choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: 'Apples per classroom = 84 ÷ 7 = 12'
  },

{
    id: '409', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A basketball team practices 3 times per week. If they practiced for the same number of weeks and had 27 total practices, how many weeks did they practice?', choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: 'Number of weeks = 27 practices ÷ 3 practices per week = 9 weeks'
  },

{
    id: '410', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Maria is saving money for a new bike that costs $35. She already saved $10. If she saves $5 each week, how many more weeks does she need to save?', choices: ['4', '5', '6', '7'], correctAnswer: '5',
    solution: 'Money still needed = $35 - $10 = $25. Weeks needed = $25 ÷ $5 = 5 weeks'
  },

{
    id: '411', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A candy factory produces chocolates in boxes. Each box contains 12 chocolates, and they filled 144 chocolates today. How many boxes did they fill?', choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: 'Number of boxes = 144 chocolates ÷ 12 chocolates per box = 12 boxes'
  },

{
    id: '412', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'The school is ordering new textbooks. They need 15 books for each of 16 classrooms. How many textbooks should they order in total?', choices: ['220', '230', '240', '250'], correctAnswer: '240',
    solution: 'Total textbooks = 15 books x 16 classrooms = 240 textbooks'
  },

{
    id: '413', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 1,
    questionText: 'The attendance at the county fair was 7,482 people. What is the value of the digit 7 in this number?', choices: ['7', '70', '700', '7,000'], correctAnswer: '7,000',
    solution: '7 is in the thousands place, so its value is 7,000'
  },

{
    id: '414', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 1,
    questionText: 'A new car costs $2,463. What is the value of the digit 6 in this price?', choices: ['6', '60', '600', '6,000'], correctAnswer: '60',
    solution: '6 is in the tens place, so its value is 60'
  },

{
    id: '415', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 2,
    questionText: 'A electronics store made $5,489 in sales yesterday. For their daily report, they need to round this amount to the nearest hundred dollars. What amount should they report?', choices: ['$5,400', '$5,500', '$5,600', '$5,000'],
    correctAnswer: '$5,500', solution: 'Tens digit is 8 (>=5), round up to $5,500'
  },

{
    id: '416', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 2,
    questionText: 'The school district has 8,765 students enrolled. For budget planning, they want to round this to the nearest thousand. What number should they use?', choices: ['8,000', '8,500', '9,000', '9,500'],
    correctAnswer: '9,000', solution: 'Hundreds digit is 7 (>=5), round up to 9,000'
  },

{
    id: '417', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 3,
    questionText: 'The total number of visitors to the science museum this year was 6,309 people. How should this number be written in expanded form for their annual report?', choices: ['6000+30+9', '6000+300+9', '6000+309', '6300+9'],
    correctAnswer: '6000+300+9', solution: '6,309 = 6000 + 300 + 9'
  },

{
    id: '418', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 1,
    questionText: 'Sophie ate 1/2 of a sandwich for lunch and 1/4 of the same sandwich for a snack. What fraction of the sandwich did Sophie eat in total?', choices: ['2/6', '3/4', '4/6', '5/6'], correctAnswer: '3/4',
    solution: 'Total eaten = 1/2 + 1/4 = 2/4 + 1/4 = 3/4'
  },

{
    id: '419', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 1,
    questionText: 'Two pizzas are the same size. Pizza A is cut into 4 equal slices and Pizza B is cut into 5 equal slices. If you eat 3 slices of Pizza A and 4 slices of Pizza B, which pizza did you eat more of?', choices: ['Pizza A (3/4)', 'Pizza B (4/5)'], correctAnswer: 'Pizza B (4/5)',
    solution: '3/4 = 0.75 and 4/5 = 0.8, so 4/5 is greater'
  },

{
    id: '420', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 2,
    questionText: 'A recipe calls for 2/3 cup of flour. Sarah wants to make 3/5 of the recipe. How much flour does she need?', choices: ['2/5 cup', '3/5 cup', '6/15 cup', '6/10 cup'], correctAnswer: '6/15 cup',
    solution: 'Flour needed = 2/3 x 3/5 = 6/15 = 2/5 cup'
  },

{
    id: '421', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 2,
    questionText: 'The art teacher has 12/16 cups of paint. She wants to simplify this fraction for her supply list. What is the simplest form of 12/16?', choices: ['3/4', '2/3', '4/6', '6/8'], correctAnswer: '3/4',
    solution: 'Divide both numerator and denominator by 4: 12÷4 = 3, 16÷4 = 4, so 3/4'
  },

{
    id: '422', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 3,
    questionText: 'Marcus had 7/8 of a chocolate bar. He gave away 3/8 of the bar to his sister. What fraction of the chocolate bar does Marcus have left?', choices: ['3/8', '4/8', '5/8', '6/8'], correctAnswer: '4/8',
    solution: 'Chocolate left = 7/8 - 3/8 = 4/8 = 1/2'
  },

{
    id: '423', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 3,
    questionText: 'A baker used 5/6 cup of sugar for cookies and 1/3 cup of sugar for frosting. How much sugar did the baker use in total?', choices: ['6/6 cup', '7/6 cup', '8/6 cup', '9/6 cup'], correctAnswer: '7/6 cup',
    solution: 'Total sugar = 5/6 + 1/3 = 5/6 + 2/6 = 7/6 cup'
  },

{
    id: '424', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'A runner completed 0.6 of the race course. What fraction represents the same amount?', choices: ['3/5', '2/5', '1/2', '5/6'], correctAnswer: '3/5',
    solution: '0.6 = 6/10 = 3/5'
  },

{
    id: '425', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'In a survey, 75% of students said they like pizza. What fraction of students like pizza?', choices: ['3/4', '2/3', '4/5', '5/6'], correctAnswer: '3/4',
    solution: '75% = 75/100 = 3/4'
  },

{
    id: '426', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'A clothing store is having a sale. A jacket originally costs $200, and it is marked down by 25%. How much money will a customer save?', choices: ['$25', '$40', '$50', '$75'], correctAnswer: '$50',
    solution: 'Savings = 25% of $200 = 1/4 x $200 = $50'
  },

{
    id: '427', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Two students are comparing their test scores. Alex scored 0.7 and Morgan scored 2/3. Who scored higher?', choices: ['Alex (0.7)', 'Morgan (2/3)'], correctAnswer: 'Alex (0.7)',
    solution: '0.7 = 0.70 and 2/3 = 0.67, so Alex scored higher'
  },

{
    id: '428', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A restaurant bill is $80. The family wants to leave a 12.5% tip. How much should they leave for the tip?', choices: ['$8', '$9', '$10', '$11'], correctAnswer: '$10',
    solution: 'Tip = 12.5% of $80 = 1/8 x $80 = $10'
  },

{
    id: '429', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a decagon have?', choices: ['8', '9', '10', '11'], correctAnswer: '10',
    solution: 'Deca = 10'
  },

{
    id: '430', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a square have?', choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A square has 4 right angles'
  },

{
    id: '431', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 2,
    questionText: 'The school is building a new rectangular playground. The playground will be 12 meters long and 5 meters wide. What is the area of the playground?', choices: ['50 square meters', '55 square meters', '60 square meters', '65 square meters'],
    correctAnswer: '60 square meters', solution: 'Area = length x width = 12 x 5 = 60 square meters'
  },

{
    id: '432', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 2,
    questionText: 'A farmer wants to put a fence around his square vegetable garden. Each side of the garden is 9 meters long. How much fencing does he need?', choices: ['27 meters', '36 meters', '45 meters', '54 meters'],
    correctAnswer: '36 meters', solution: 'Perimeter of square = 4 x side length = 4 x 9 = 36 meters'
  },

{
    id: '433', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 3,
    questionText: 'A construction company is installing square tiles in a lobby. Each tile has a side length of 15 centimeters. What is the area of each tile?', choices: ['200 cm²', '210 cm²', '220 cm²', '225 cm²'],
    correctAnswer: '225 cm²', solution: 'Area of square = side x side = 15 x 15 = 225 cm²'
  },

{
    id: '434', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 3,
    questionText: 'How many degrees are in a right angle?', choices: ['45', '90', '120', '180'],
    correctAnswer: '90', solution: 'A right angle = 90°'
  },

{
    id: '435', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 1,
    questionText: 'The school concert will last for 4 hours. The music teacher wants to include this information in minutes on the program. How many minutes will the concert last?', choices: ['120 minutes', '180 minutes', '240 minutes', '300 minutes'], correctAnswer: '240 minutes',
    solution: 'Concert duration = 4 hours x 60 minutes = 240 minutes'
  },

{
    id: '436', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 1,
    questionText: 'The soccer field is 2 yards wide for the practice area. The coach needs to mark this distance in feet for the team setup. How many feet is this?', choices: ['4 feet', '5 feet', '6 feet', '7 feet'], correctAnswer: '6 feet',
    solution: 'Distance in feet = 2 yards x 3 feet per yard = 6 feet'
  },

{
    id: '437', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 2,
    questionText: 'A shipping company needs to weigh a package. The package weighs 3 pounds. How many ounces does the package weigh?', choices: ['36 ounces', '42 ounces', '48 ounces', '52 ounces'], correctAnswer: '48 ounces',
    solution: 'Weight in ounces = 3 pounds x 16 ounces per pound = 48 ounces'
  },

{
    id: '438', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 2 meters deep. The pool maintenance crew needs to know this measurement in centimeters. How many centimeters deep is the pool?', choices: ['20 cm', '100 cm', '200 cm', '1000 cm'], correctAnswer: '200 cm',
    solution: 'Pool depth = 2 meters x 100 centimeters per meter = 200 cm'
  },

{
    id: '439', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 3,
    questionText: 'How many hours are in 10 days?', choices: ['220', '230', '240', '250'], correctAnswer: '240',
    solution: '10 x 24 = 240 hours'
  },

{
    id: '440', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 3,
    questionText: 'How many minutes are in half a day?', choices: ['720', '760', '800', '900'], correctAnswer: '720',
    solution: '12 x 60 = 720 minutes'
  },

{
    id: '441', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 1,
    questionText: 'Find the mean of 5, 10, 15.', choices: ['5', '10', '15', '20'], correctAnswer: '10',
    solution: '(5 + 10 + 15)/3 = 30/3 = 10'
  },

{
    id: '442', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 2,
    questionText: 'Find the median of 4, 7, 9, 12, 15.', choices: ['7', '9', '10', '12'], correctAnswer: '9',
    solution: 'The middle number is 9'
  },

{
    id: '443', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 2,
    questionText: 'Find the mode of 2, 4, 4, 6, 8.', choices: ['2', '4', '6', '8'], correctAnswer: '4',
    solution: '4 appears most often'
  },

{
    id: '444', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 3,
    questionText: 'Find the range of 12, 15, 18, 22, 27.', choices: ['12', '13', '14', '15'], correctAnswer: '15',
    solution: '27 - 12 = 15'
  },

{
    id: '4th-1', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school collected 325 cans for a food drive in September and 187 cans in October. How many cans did they collect in total?',
    choices: ['502', '512', '522', '532'], correctAnswer: '512',
    solution: '325 + 187 = 512'
  },

{
    id: '4th-2', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'A classroom has 28 students. If 13 are boys, how many are girls?',
    choices: ['13', '14', '15', '16'], correctAnswer: '15',
    solution: '28 - 13 = 15'
  },

{
    id: '4th-3', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is the value of 7 x 8?',
    choices: ['54', '56', '58', '60'], correctAnswer: '56',
    solution: '7 x 8 = 56'
  },

{
    id: '4th-4', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'Round 2,487 to the nearest hundred.',
    choices: ['2,400', '2,500', '2,480', '2,490'], correctAnswer: '2,500',
    solution: 'Tens digit is 8 (>=5), round up to 2,500'
  },

{
    id: '4th-5', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'A store sold 1,234 pencils in January and 2,345 pencils in February. How many pencils did they sell in total?',
    choices: ['3,579', '3,589', '3,569', '3,599'], correctAnswer: '3,579',
    solution: '1,234 + 2,345 = 3,579'
  },

{
    id: '4th-6', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 4,000 - 2,356?',
    choices: ['1,644', '1,654', '1,664', '1,674'], correctAnswer: '1,644',
    solution: '4,000 - 2,356 = 1,644'
  },

{
    id: '4th-7', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is greater: 3,456 or 3,654?',
    choices: ['3,456', '3,654'], correctAnswer: '3,654',
    solution: '3,654 > 3,456'
  },

{
    id: '4th-8', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the sum of 789 and 987?',
    choices: ['1,666', '1,776', '1,786', '1,796'], correctAnswer: '1,776',
    solution: '789 + 987 = 1,776'
  },

{
    id: '4th-9', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 3,
    questionText: 'A school has 1,234 students. If 567 are in grades 1-2, how many are in grades 3-4?',
    choices: ['667', '677', '687', '697'], correctAnswer: '667',
    solution: '1,234 - 567 = 667'
  },

{
    id: '4th-10', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 2,500 divided by 25?',
    choices: ['100', '110', '120', '125'], correctAnswer: '100',
    solution: '2,500 ÷ 25 = 100'
  },

{
    id: '4th-11', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bus travels 1,200 miles in 4 days. How many miles does it travel per day?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '1,200 ÷ 4 = 300'
  },

{
    id: '4th-12', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is the product of 23 and 17?',
    choices: ['371', '381', '391', '401'], correctAnswer: '391',
    solution: '23 x 17 = 391'
  },

{
    id: '4th-13', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the difference between 2,000 and 1,234?',
    choices: ['756', '766', '776', '786'], correctAnswer: '766',
    solution: '2,000 - 1,234 = 766'
  },

{
    id: '4th-14', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'Round 3,849 to the nearest thousand.',
    choices: ['3,000', '4,000', '3,800', '3,900'], correctAnswer: '4,000',
    solution: 'Hundreds digit is 8 (>=5), round up to 4,000'
  },

{
    id: '4th-15', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 9 x 6?',
    choices: ['52', '54', '56', '58'], correctAnswer: '54',
    solution: '9 x 6 = 54'
  },

{
    id: '4th-16', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'A baker made 48 cupcakes and wants to put them equally into 6 boxes. How many cupcakes will go in each box?',
    choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '48 ÷ 6 = 8'
  },

{
    id: '4th-17', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is the value of 5 x 9?',
    choices: ['40', '45', '50', '55'], correctAnswer: '45',
    solution: '5 x 9 = 45'
  },

{
    id: '4th-18', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 7 x ___ = 63',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '7 x 9 = 63'
  },

{
    id: '4th-19', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A class has 36 students. If they are divided into 4 equal groups, how many students are in each group?',
    choices: ['8', '9', '10', '11'], correctAnswer: '9',
    solution: '36 ÷ 4 = 9'
  },

{
    id: '4th-20', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 72 ÷ 8?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '72 ÷ 8 = 9'
  },

{
    id: '4th-21', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'If 6 x 7 = 42, what does 7 x 6 equal?',
    choices: ['36', '42', '48', '54'], correctAnswer: '42',
    solution: 'Multiplication is commutative: 7 x 6 = 6 x 7 = 42'
  },

{
    id: '4th-22', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A school has 5 classes with 28 students each. How many students are there in total?',
    choices: ['130', '135', '140', '145'], correctAnswer: '140',
    solution: '5 x 28 = 140'
  },

{
    id: '4th-23', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number: ___ ÷ 7 = 8',
    choices: ['48', '54', '56', '64'], correctAnswer: '56',
    solution: '56 ÷ 7 = 8'
  },

{
    id: '4th-24', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A store sold 96 apples in 8 days. How many apples did they sell per day?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '96 ÷ 8 = 12'
  },

{
    id: '4th-25', gradeMin: 4, gradeMax: 4, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 144 divided by 12?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '144 ÷ 12 = 12'
  },

{
    id: '4th-26', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 5 in 5,432?',
    choices: ['5', '50', '500', '5,000'], correctAnswer: '5,000',
    solution: '5 is in the thousands place'
  },

{
    id: '4th-27', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 3,210 written in expanded form?',
    choices: ['3,000+200+10', '3,000+200+10+0', '3,000+100+10', '3,000+100+20'], correctAnswer: '3,000+200+10',
    solution: '3,210 = 3,000 + 200 + 10'
  },

{
    id: '4th-28', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 7,489 to the nearest thousand.',
    choices: ['7,000', '7,500', '8,000', '8,500'], correctAnswer: '7,000',
    solution: 'Hundreds digit is 4 (<5), round down to 7,000'
  },

{
    id: '4th-29', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 2,
    questionText: 'Which digit is in the hundreds place of 6,482?',
    choices: ['4', '6', '8', '2'], correctAnswer: '4',
    solution: 'Hundreds place is 4'
  },

{
    id: '4th-30', gradeMin: 4, gradeMax: 4, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 4-digit number?',
    choices: ['9,999', '9,900', '9,990', '9,909'], correctAnswer: '9,999',
    solution: '9,999 is the largest 4-digit number'
  },

{
    id: '4th-31', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 1/2 + 1/4?',
    choices: ['1/4', '1/2', '3/4', '1'], correctAnswer: '3/4',
    solution: '1/2 = 2/4, so 2/4 + 1/4 = 3/4'
  },

{
    id: '4th-32', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 3/6?',
    choices: ['1/2', '2/3', '3/4', '1/3'], correctAnswer: '1/2',
    solution: '3/6 = 1/2'
  },

{
    id: '4th-33', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 2/3 - 1/6?',
    choices: ['1/2', '1/3', '2/6', '3/6'], correctAnswer: '1/2',
    solution: '2/3 = 4/6, so 4/6 - 1/6 = 3/6 = 1/2'
  },

{
    id: '4th-34', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 8/12.',
    choices: ['2/3', '3/4', '1/2', '4/6'], correctAnswer: '2/3',
    solution: '8/12 = 2/3'
  },

{
    id: '4th-35', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 3/4 x 2/3?',
    choices: ['1/2', '1/3', '1/4', '2/3'], correctAnswer: '1/2',
    solution: '3/4 x 2/3 = 6/12 = 1/2'
  },

{
    id: '4th-36', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 0.5 to a percent.',
    choices: ['5%', '50%', '0.5%', '500%'], correctAnswer: '50%',
    solution: '0.5 = 50%'
  },

{
    id: '4th-37', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'What is 25% of 80?',
    choices: ['15', '18', '20', '25'], correctAnswer: '20',
    solution: '0.25 x 80 = 20'
  },

{
    id: '4th-38', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Convert 0.08 to a fraction.',
    choices: ['1/8', '2/25', '8/100', '1/12'], correctAnswer: '8/100',
    solution: '0.08 = 8/100'
  },

{
    id: '4th-39', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 10% of 250?',
    choices: ['20', '25', '30', '35'], correctAnswer: '25',
    solution: '0.10 x 250 = 25'
  },

{
    id: '4th-40', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A $60 item is discounted by 20%. What is the sale price?',
    choices: ['$40', '$45', '$48', '$50'], correctAnswer: '$48',
    solution: '20% of $60 is $12; $60 - $12 = $48'
  },

{
    id: '4th-41', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a nonagon have?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: 'A nonagon has 9 sides'
  },

{
    id: '4th-42', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a rectangle have?',
    choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A rectangle has 4 right angles'
  },

{
    id: '4th-43', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 2,
    questionText: 'A square has a side length of 11 cm. What is its area?',
    choices: ['111 cm²', '121 cm²', '131 cm²', '141 cm²'], correctAnswer: '121 cm²',
    solution: 'Area = 11 x 11 = 121 cm²'
  },

{
    id: '4th-44', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 2,
    questionText: 'A triangle has angles of 90°, 60°, and ___. What is the missing angle?',
    choices: ['20°', '30°', '40°', '50°'], correctAnswer: '30°',
    solution: 'Sum of angles in triangle = 180°. 180 - 90 - 60 = 30°'
  },

{
    id: '4th-45', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 3,
    questionText: 'A rectangle is 14 cm long and 6 cm wide. What is its perimeter?',
    choices: ['30 cm', '32 cm', '34 cm', '40 cm'], correctAnswer: '40 cm',
    solution: 'Perimeter = 2 x (14 + 6) = 2 x 20 = 40 cm'
  },

{
    id: '4th-46', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 3 meters?',
    choices: ['30', '300', '3,000', '30,000'], correctAnswer: '300',
    solution: '1 meter = 100 cm, so 3 x 100 = 300'
  },

{
    id: '4th-47', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 3 hours?',
    choices: ['120', '150', '180', '210'], correctAnswer: '180',
    solution: '3 x 60 = 180'
  },

{
    id: '4th-48', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 25 meters long. How many centimeters is that?',
    choices: ['250', '2,500', '25,000', '250,000'], correctAnswer: '2,500',
    solution: '25 x 100 = 2,500'
  },

{
    id: '4th-49', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 4 kilograms?',
    choices: ['400', '4,000', '40,000', '400,000'], correctAnswer: '4,000',
    solution: '4 x 1,000 = 4,000'
  },

{
    id: '4th-50', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 3,
    questionText: 'A car travels 360 kilometers in 6 hours. What is its average speed in km/h?',
    choices: ['50', '55', '60', '65'], correctAnswer: '60',
    solution: '360 ÷ 6 = 60 km/h'
  },

{
    id: '4th-51', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the mean of 8, 12, and 16?',
    choices: ['10', '12', '14', '16'], correctAnswer: '12',
    solution: '(8 + 12 + 16) ÷ 3 = 36 ÷ 3 = 12'
  },

{
    id: '4th-52', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the median of 3, 7, 9, 12, 15?',
    choices: ['7', '9', '10', '12'], correctAnswer: '9',
    solution: 'The middle number is 9'
  },

{
    id: '4th-53', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the mode of 2, 4, 4, 6, 8?',
    choices: ['2', '4', '6', '8'], correctAnswer: '4',
    solution: '4 appears most often'
  },

{
    id: '4th-54', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the range of 5, 9, 12, 15, 20?',
    choices: ['10', '11', '12', '15'], correctAnswer: '15',
    solution: '20 - 5 = 15'
  },

{
    id: '4th-55', gradeMin: 4, gradeMax: 4, domain: 'Statistics', difficulty: 3,
    questionText: 'The scores on a test are 78, 85, 92, 85, 90. What is the mode?',
    choices: ['78', '85', '90', '92'], correctAnswer: '85',
    solution: '85 appears most often'
  },

{
    id: '4th-56', gradeMin: 4, gradeMax: 4, domain: 'Number Sense', difficulty: 2,
    questionText: 'A school bus has 40 seats. If 27 are occupied, how many are empty?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '40 - 27 = 13'
  },

{
    id: '4th-57', gradeMin: 4, gradeMax: 4, domain: 'Measurement', difficulty: 2,
    questionText: 'A water bottle holds 750 milliliters. How many liters is that?',
    choices: ['0.75', '7.5', '75', '750'], correctAnswer: '0.75',
    solution: '1 liter = 1,000 mL, so 750 ÷ 1,000 = 0.75 L'
  },

{
    id: '4th-58', gradeMin: 4, gradeMax: 4, domain: 'Geometry', difficulty: 2,
    questionText: 'How many faces does a cube have?',
    choices: ['4', '6', '8', '12'], correctAnswer: '6',
    solution: 'A cube has 6 faces'
  },

{
    id: '4th-59', gradeMin: 4, gradeMax: 4, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 10% of 150?',
    choices: ['10', '15', '20', '25'], correctAnswer: '15',
    solution: '0.10 x 150 = 15'
  },

{
    id: '4th-60', gradeMin: 4, gradeMax: 4, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 2/5 + 1/5?',
    choices: ['2/5', '3/5', '4/5', '1'], correctAnswer: '3/5',
    solution: '2/5 + 1/5 = 3/5'
  },

];

export default grade4Questions;
