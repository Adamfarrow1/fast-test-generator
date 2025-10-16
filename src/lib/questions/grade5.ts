import { Question } from '../types';

export const grade5Questions: Question[] = [
{
    id: '5-1',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Fractions',
    difficulty: 2,
    questionText: 'Maria is making trail mix for her camping trip. She uses 3/4 cup of nuts and 1/8 cup of dried fruit. How many cups of ingredients has she used so far for her trail mix?',
    choices: ['7/8 cup', '5/8 cup', '1 cup', '3/8 cup'],
    correctAnswer: '7/8 cup',
    solution: 'To add fractions, find common denominator: 3/4 = 6/8, so 6/8 + 1/8 = 7/8 cup.'
  },

{
    id: '5-2',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Decimals & Percents',
    difficulty: 2,
    questionText: 'The Jefferson Elementary School has 60 fifth-grade students. During a survey about favorite subjects, exactly 25% of the students said mathematics was their favorite. How many fifth-grade students chose mathematics as their favorite subject?',
    choices: ['15 students', '12 students', '20 students', '30 students'],
    correctAnswer: '15 students',
    solution: '25% of 60 = 0.25 x 60 = 15 students.'
  },

{
    id: '5-3',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Measurement',
    difficulty: 2,
    questionText: 'Dr. Rodriguez is studying insects in her laboratory. She needs to measure a beetle that is exactly 5 centimeters long. Her measuring tool only shows millimeters. How many millimeters long is the beetle?',
    choices: ['50 mm', '5 mm', '500 mm', '25 mm'],
    correctAnswer: '50 mm',
    solution: 'Convert centimeters to millimeters: 1 cm = 10 mm, so 5 x 10 = 50 mm.'
  },

{
    id: '5-4',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Geometry',
    difficulty: 2,
    questionText: 'Mrs. Chen is designing a rectangular flower garden for the school courtyard. The garden will be 8 centimeters long and 3 centimeters wide on her scale drawing. She needs to calculate the perimeter to determine how much decorative border material to order. What is the perimeter of the rectangular garden on her drawing?',
    choices: ['22 cm', '24 cm', '11 cm', '16 cm'],
    correctAnswer: '22 cm',
    solution: 'Perimeter of rectangle = 2 x (length + width) = 2 x (8 + 3) = 2 x 11 = 22 cm.'
  },

{
    id: '5-5',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Number Sense',
    difficulty: 2,
    questionText: 'In mathematics class, students are learning about perfect squares and the Pythagorean theorem. Tommy needs to calculate 3^2 + 4^2 for a special right triangle problem. What is the value of this expression?',
    choices: ['25', '12', '7', '16'],
    correctAnswer: '25',
    solution: 'Calculate each square: 3^2 = 3 x 3 = 9, and 4^2 = 4 x 4 = 16. Then add: 9 + 16 = 25.'
  },

{
    id: '5-6', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'The art teacher ordered 125 colored pencils for her fifth-grade classes. She wants to distribute them equally among 5 different classrooms so each room gets the same number of pencils. How many colored pencils will each classroom receive?', choices: ['20', '25', '30', '15'], correctAnswer: '25', solution: 'Divide the total by the number of classrooms: 125 / 5 = 25 pencils per classroom.'
  },

{
    id: '5-7', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'Sarah and Jessica are comparing how much of their homework they completed last night. Sarah finished 2/3 of her assignments, while Jessica completed 3/5 of hers. Who completed a greater fraction of their homework?', choices: ['Sarah (2/3)', 'Jessica (3/5)', 'They completed equal amounts', 'Cannot determine'], correctAnswer: 'Sarah (2/3)', solution: 'Convert to decimals to compare: 2/3 = 0.667 and 3/5 = 0.6. Since 0.667 > 0.6, Sarah completed more.'
  },

{
    id: '5-8', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'During a basketball game, the home team made 0.75 of their free throw attempts. The sports announcer wants to report this statistic as a percentage for the audience. What percentage of free throws did the home team make?', choices: ['7.5%', '75%', '0.75%', '750%'], correctAnswer: '75%', solution: 'To convert decimal to percent, multiply by 100: 0.75 x 100 = 75%.'
  },

{
    id: '5-9', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'A chemistry teacher is preparing an experiment that requires precise measurements. She needs to measure 2 kilograms of a special compound, but her digital scale only displays weights in grams. How many grams should the scale show when she has the correct amount?', choices: ['200 g', '2000 g', '20 g', '2 g'], correctAnswer: '2000 g', solution: 'Convert kilograms to grams: 1 kg = 1000 g, so 2 kg = 2 x 1000 = 2000 g.'
  },

{
    id: '5-10', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'The school custodian needs to order new carpet tiles for a rectangular section of the library. The area measures 7 centimeters long and 4 centimeters wide on the architectural blueprint. What is the area of this rectangular section on the blueprint?', choices: ['28 sq cm', '11 sq cm', '14 sq cm', '21 sq cm'], correctAnswer: '28 sq cm', solution: 'Area of rectangle = length x width = 7 cm x 4 cm = 28 sq cm.'
  },

{
    id: '5-11', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the school fundraiser, each student volunteer worked for 6 hours on Saturday and 3 hours on Sunday. If there were 2 student volunteers, what was the total number of hours worked by all volunteers combined?', choices: ['18 hours', '12 hours', '9 hours', '15 hours'], correctAnswer: '18 hours', solution: 'First find hours per volunteer: 6 + 3 = 9 hours. Then multiply by number of volunteers: 2 x 9 = 18 hours.'
  },

{
    id: '5-12', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'The cafeteria staff prepared 36 sandwiches for the field trip. Due to dietary restrictions, exactly half of the sandwiches needed to be vegetarian options. How many vegetarian sandwiches did the cafeteria staff need to prepare?', choices: ['18 sandwiches', '12 sandwiches', '24 sandwiches', '36 sandwiches'], correctAnswer: '18 sandwiches', solution: 'Find 1/2 of 36: 36 / 2 = 18 vegetarian sandwiches.'
  },

{
    id: '5-13', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'A local grocery store is offering a special discount where customers save 0.2 times the original price on bulk purchases. If a family is buying $50 worth of groceries in bulk, how much money will they save with this discount?', choices: ['$10', '$20', '$5', '$15'], correctAnswer: '$10', solution: 'Calculate the savings: 0.2 x $50 = $10.'
  },

{
    id: '5-14', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'The school track team is measuring the distance for their new running course. The coach measured 3 meters for one section, but the official record sheet requires all measurements to be recorded in centimeters. How many centimeters should be recorded for this section?', choices: ['30 cm', '300 cm', '3 cm', '100 cm'], correctAnswer: '300 cm', solution: 'Convert meters to centimeters: 1 m = 100 cm, so 3 m = 3 x 100 = 300 cm.'
  },

{
    id: '5-15', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'The art class is creating geometric patterns using polygon shapes. Jennifer is working on a design that requires a polygon with exactly 6 equal sides and 6 equal angles. What type of polygon should Jennifer use for her design?', choices: ['Pentagon (5 sides)', 'Hexagon (6 sides)', 'Heptagon (7 sides)', 'Octagon (8 sides)'], correctAnswer: 'Hexagon (6 sides)', solution: 'A hexagon is a polygon with exactly 6 sides and 6 angles.'
  },

{
    id: '5-16', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school library is organizing books into sections. The librarian needs to arrange 9 rows of bookshelves, with exactly 7 books on each shelf. How many books will be displayed in total across all the shelves?', choices: ['63 books', '56 books', '72 books', '49 books'], correctAnswer: '63 books', solution: 'Multiply the number of rows by books per shelf: 9 x 7 = 63 books.'
  },

{
    id: '5-17', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'During the school bake sale, the parent volunteers sold 25 cupcakes total. At the end of the event, they discovered that exactly 2/5 of the cupcakes sold were chocolate flavor. How many chocolate cupcakes were sold?', choices: ['10 cupcakes', '5 cupcakes', '15 cupcakes', '20 cupcakes'], correctAnswer: '10 cupcakes', solution: 'Find 2/5 of 25: (2/5) x 25 = (2 x 25) / 5 = 50 / 5 = 10 cupcakes.'
  },

{
    id: '5-18', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Washington Elementary School has 120 students in the fifth grade. During the annual reading challenge, exactly 10% of these students earned the "Super Reader" award for reading more than 20 books. How many fifth-grade students earned the Super Reader award?', choices: ['12 students', '10 students', '120 students', '20 students'], correctAnswer: '12 students', solution: 'Calculate 10% of 120: 10% = 0.1, so 0.1 x 120 = 12 students.'
  },

{
    id: '5-19', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'The science teacher is preparing a chemistry demonstration that requires exactly 2 liters of distilled water. However, her measuring tools are marked only in milliliters. How many milliliters of distilled water does she need for the demonstration?', choices: ['200 mL', '2000 mL', '20 mL', '2 mL'], correctAnswer: '2000 mL', solution: 'Convert liters to milliliters: 1 L = 1000 mL, so 2 L = 2 x 1000 = 2000 mL.'
  },

{
    id: '5-20', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'In geometry class, students are learning about the properties of triangles. Marcus needs to find the total measure of all three interior angles in any triangle for his homework assignment. What is the sum of all interior angles in a triangle?', choices: ['180 degrees', '90 degrees', '360 degrees', '270 degrees'], correctAnswer: '180 degrees', solution: 'The sum of all interior angles in any triangle is always 180 degrees.'
  },

{
    id: '5-21', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school chess club is setting up for their annual tournament. They need to arrange the tables in a perfect square formation with 8 tables along each side. How many tables will they need in total for this square arrangement?', choices: ['64 tables', '56 tables', '72 tables', '48 tables'], correctAnswer: '64 tables', solution: 'For a square arrangement: 8 x 8 = 64 tables total.'
  },

{
    id: '5-22', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'The school fundraising committee collected 40 prizes for their raffle drawing. They decided that 3/4 of these prizes should be gift cards, while the rest would be physical items. How many gift card prizes did they designate for the raffle?', choices: ['30 prizes', '10 prizes', '20 prizes', '40 prizes'], correctAnswer: '30 prizes', solution: 'Find 3/4 of 40: (3/4) x 40 = (3 x 40) / 4 = 120 / 4 = 30 gift cards.'
  },

{
    id: '5-23', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'During a math competition, students earn points based on their accuracy. Emily scored 0.6 points for each correct answer, and she answered exactly 100 questions correctly. What was Emily\'s total score in the competition?', choices: ['60 points', '6 points', '600 points', '10 points'], correctAnswer: '60 points', solution: 'Multiply the points per question by number of correct answers: 0.6 x 100 = 60 points.'
  },

{
    id: '5-24', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'The school maintenance crew needs to install a new bulletin board that is exactly 2 feet wide. The hardware store measures materials in inches, so they need to convert this measurement. How many inches wide should the bulletin board be?', choices: ['24 inches', '12 inches', '6 inches', '18 inches'], correctAnswer: '24 inches', solution: 'Convert feet to inches: 1 foot = 12 inches, so 2 feet = 2 x 12 = 24 inches.'
  },

{
    id: '5-25', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'A toy company is designing a new puzzle cube where each edge measures exactly 3 centimeters. The packaging department needs to know the total volume of space inside each cube to determine shipping costs. What is the volume of this cube?', choices: ['27 cm³', '9 cm³', '18 cm³', '12 cm³'], correctAnswer: '27 cm³', solution: 'Volume of cube = side x side x side = 3 x 3 x 3 = 27 cm³.'
  },

{
    id: '5-26', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'At the beginning of the school year, the supply closet contained 100 notebooks. Throughout the first semester, teachers distributed 37 notebooks to students who needed them. How many notebooks remain in the supply closet?', choices: ['63 notebooks', '73 notebooks', '67 notebooks', '57 notebooks'], correctAnswer: '63 notebooks', solution: 'Subtract notebooks distributed from the original amount: 100 - 37 = 63 notebooks.'
  },

{
    id: '5-27', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'The fifth-grade class collected 21 canned goods for the food drive. Their teacher announced that exactly 1/3 of these donations would be given to the local shelter, while the remaining cans would go to the community food bank. How many canned goods will be donated to the local shelter?', choices: ['7 cans', '3 cans', '14 cans', '21 cans'], correctAnswer: '7 cans', solution: 'Find 1/3 of 21: 21 x (1/3) = 21 ÷ 3 = 7 canned goods.'
  },

{
    id: '5-28',
    gradeMin: 5,
    gradeMax: 5,
    domain: 'Decimals & Percents',
    difficulty: 2,
    questionText: 'Lincoln Middle School ordered 80 new tablets for their computer lab. Due to a special educational discount, they received 50% off the regular price. If the regular price was the full amount, how much did they actually pay in comparison to the original price?',
    choices: ['50% of original price', '80% of original price', '20% of original price', '60% of original price'],
    correctAnswer: '50% of original price',
    solution: 'With 50% off, they pay 50% of the original price (i.e., half).'
  },

{
    id: '5-29', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'The school play rehearsals are scheduled to run for exactly 3 weeks before the performance. The drama teacher wants to tell parents how many days their children will be involved in rehearsals. How many days will the rehearsal period last?', choices: ['21 days', '14 days', '7 days', '28 days'], correctAnswer: '21 days', solution: 'Convert weeks to days: 1 week = 7 days, so 3 weeks = 3 x 7 = 21 days.'
  },

{
    id: '5-30', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'The art class is studying three-dimensional shapes by examining dice and building blocks. Students need to count all the flat surfaces on a standard cube to complete their geometry worksheet. How many flat faces does a cube have?', choices: ['6 faces', '8 faces', '12 faces', '4 faces'], correctAnswer: '6 faces', solution: 'A cube has 6 flat faces: top, bottom, front, back, left side, and right side.'
  },

{
    id: '5-31', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'The school cafeteria received a shipment of 45 apples that need to be distributed equally among 9 lunch tables. Each table should receive the same number of apples for the daily fruit serving. How many apples will each table receive?', choices: ['5 apples', '4 apples', '6 apples', '9 apples'], correctAnswer: '5 apples', solution: 'Divide the total apples by the number of tables: 45 ÷ 9 = 5 apples per table.'
  },

{
    id: '5-32', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'The school band has 12 members preparing for their spring concert. The band director determined that 5/6 of the band members need to attend the extra practice session this Saturday. How many band members must attend the Saturday practice?', choices: ['10 members', '6 members', '8 members', '12 members'], correctAnswer: '10 members', solution: 'Find 5/6 of 12: (5/6) x 12 = (5 x 12) ÷ 6 = 60 ÷ 6 = 10 members.'
  },

{
    id: '5-33', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'A local bookstore is having a clearance sale where all books are priced at 0.4 times their original cost. If a popular children\'s book originally cost $25, what is the sale price that customers will pay?', choices: ['$10', '$4', '$25', '$8'], correctAnswer: '$10', solution: 'Calculate the sale price: 0.4 x $25 = $10.'
  },

{
    id: '5-34', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'The school science fair will run continuously for 3 full days, from Friday morning until Sunday evening. The event coordinator needs to calculate the total number of hours for staffing purposes. How many hours will the science fair last?', choices: ['72 hours', '24 hours', '36 hours', '48 hours'], correctAnswer: '72 hours', solution: 'Convert days to hours: 1 day = 24 hours, so 3 days = 3 x 24 = 72 hours.'
  },

{
    id: '5-35', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'The school garden club is designing a triangular flower bed for the front entrance. On their blueprint, the triangle has a base of 10 centimeters and a height of 6 centimeters. What is the area of this triangular flower bed on the blueprint?', choices: ['30 cm²', '60 cm²', '16 cm²', '36 cm²'], correctAnswer: '30 cm²', solution: 'Area of triangle = (1/2) x base x height = (1/2) x 10 x 6 = 30 cm².'
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
    id: '80', gradeMin: 5, gradeMax: 6, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 3/4 ÷ 1/2?', choices: ['3/8', '3/2', '2/3', '1/2'], correctAnswer: '3/2',
    solution: 'Divide by a fraction = multiply by its reciprocal: 3/4 x 2 = 3/2.'
  },

{
    id: '61', gradeMin: 5, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'What is the area of a triangle with base 10 and height 6?', choices: ['16', '20', '30', '60'], correctAnswer: '30',
    solution: 'A = 1/2 x b x h = 30.'
  },

{
    id: '5th-1', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school library has 1,250 books. If 375 are checked out, how many are left?',
    choices: ['875', '885', '895', '905'], correctAnswer: '875',
    solution: '1,250 - 375 = 875'
  },

{
    id: '5th-2', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is the value of 12 x 8?',
    choices: ['86', '92', '96', '104'], correctAnswer: '96',
    solution: '12 x 8 = 96'
  },

{
    id: '5th-3', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 1,
    questionText: 'Round 4,678 to the nearest hundred.',
    choices: ['4,600', '4,700', '4,800', '4,900'], correctAnswer: '4,700',
    solution: 'Tens digit is 7 (>=5), round up to 4,700'
  },

{
    id: '5th-4', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'A store sold 2,345 pencils in March and 1,789 pencils in April. How many pencils did they sell in total?',
    choices: ['4,034', '4,124', '4,134', '4,144'], correctAnswer: '4,134',
    solution: '2,345 + 1,789 = 4,134'
  },

{
    id: '5th-5', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 5,000 - 2,678?',
    choices: ['2,222', '2,322', '2,332', '2,342'], correctAnswer: '2,322',
    solution: '5,000 - 2,678 = 2,322'
  },

{
    id: '5th-6', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is greater: 4,567 or 4,765?',
    choices: ['4,567', '4,765'], correctAnswer: '4,765',
    solution: '4,765 > 4,567'
  },

{
    id: '5th-7', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the sum of 1,234 and 2,345?',
    choices: ['3,579', '3,589', '3,599', '3,609'], correctAnswer: '3,579',
    solution: '1,234 + 2,345 = 3,579'
  },

{
    id: '5th-8', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 3,
    questionText: 'A school has 2,345 students. If 1,234 are in grades 1-3, how many are in grades 4-5?',
    choices: ['1,111', '1,121', '1,131', '1,141'], correctAnswer: '1,111',
    solution: '2,345 - 1,234 = 1,111'
  },

{
    id: '5th-9', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 3,600 divided by 36?',
    choices: ['90', '95', '100', '105'], correctAnswer: '100',
    solution: '3,600 ÷ 36 = 100'
  },

{
    id: '5th-10', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bus travels 1,800 miles in 6 days. How many miles does it travel per day?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '1,800 ÷ 6 = 300'
  },

{
    id: '5th-11', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is the product of 34 and 15?',
    choices: ['490', '500', '510', '520'], correctAnswer: '510',
    solution: '34 x 15 = 510'
  },

{
    id: '5th-12', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the difference between 3,000 and 1,234?',
    choices: ['1,766', '1,776', '1,786', '1,796'], correctAnswer: '1,766',
    solution: '3,000 - 1,234 = 1,766'
  },

{
    id: '5th-13', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'Round 5,849 to the nearest thousand.',
    choices: ['5,000', '6,000', '5,800', '5,900'], correctAnswer: '6,000',
    solution: 'Hundreds digit is 8 (>=5), round up to 6,000'
  },

{
    id: '5th-14', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 11 x 7?',
    choices: ['67', '76', '77', '87'], correctAnswer: '77',
    solution: '11 x 7 = 77'
  },

{
    id: '5th-15', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 8 x 9?',
    choices: ['64', '72', '80', '88'], correctAnswer: '72',
    solution: '8 x 9 = 72'
  },

{
    id: '5th-16', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'A baker made 72 cupcakes and wants to put them equally into 9 boxes. How many cupcakes will go in each box?',
    choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '72 ÷ 9 = 8'
  },

{
    id: '5th-17', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is the value of 6 x 12?',
    choices: ['62', '72', '82', '92'], correctAnswer: '72',
    solution: '6 x 12 = 72'
  },

{
    id: '5th-18', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 8 x ___ = 96',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '8 x 12 = 96'
  },

{
    id: '5th-19', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A class has 45 students. If they are divided into 5 equal groups, how many students are in each group?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '45 ÷ 5 = 9'
  },

{
    id: '5th-20', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 81 ÷ 9?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '81 ÷ 9 = 9'
  },

{
    id: '5th-21', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'If 7 x 8 = 56, what does 8 x 7 equal?',
    choices: ['56', '64', '72', '80'], correctAnswer: '56',
    solution: 'Multiplication is commutative: 8 x 7 = 7 x 8 = 56'
  },

{
    id: '5th-22', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A school has 6 classes with 25 students each. How many students are there in total?',
    choices: ['130', '140', '150', '160'], correctAnswer: '150',
    solution: '6 x 25 = 150'
  },

{
    id: '5th-23', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number: ___ ÷ 8 = 7',
    choices: ['48', '54', '56', '64'], correctAnswer: '56',
    solution: '56 ÷ 8 = 7'
  },

{
    id: '5th-24', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A store sold 108 apples in 9 days. How many apples did they sell per day?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '108 ÷ 9 = 12'
  },

{
    id: '5th-25', gradeMin: 5, gradeMax: 5, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 156 divided by 12?',
    choices: ['10', '11', '12', '13'], correctAnswer: '13',
    solution: '156 ÷ 12 = 13'
  },

{
    id: '5th-26', gradeMin: 5, gradeMax: 5, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 6 in 6,432?',
    choices: ['6', '60', '600', '6,000'], correctAnswer: '6,000',
    solution: '6 is in the thousands place'
  },

{
    id: '5th-27', gradeMin: 5, gradeMax: 5, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 4,210 written in expanded form?',
    choices: ['4,000+200+10', '4,000+200+10+0', '4,000+100+10', '4,000+100+20'], correctAnswer: '4,000+200+10',
    solution: '4,210 = 4,000 + 200 + 10'
  },

{
    id: '5th-28', gradeMin: 5, gradeMax: 5, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 8,489 to the nearest thousand.',
    choices: ['8,000', '8,500', '9,000', '9,500'], correctAnswer: '8,000',
    solution: 'Hundreds digit is 4 (<5), round down to 8,000'
  },

{
    id: '5th-29', gradeMin: 5, gradeMax: 5, domain: 'Place Value', difficulty: 2,
    questionText: 'Which digit is in the hundreds place of 7,482?',
    choices: ['4', '6', '8', '2'], correctAnswer: '4',
    solution: 'Hundreds place is 4'
  },

{
    id: '5th-30', gradeMin: 5, gradeMax: 5, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 5-digit number?',
    choices: ['99,999', '99,900', '99,990', '99,909'], correctAnswer: '99,999',
    solution: '99,999 is the largest 5-digit number'
  },

{
    id: '5th-31', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 1/3 + 1/6?',
    choices: ['1/4', '1/2', '2/3', '5/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2'
  },

{
    id: '5th-32', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 4/8?',
    choices: ['1/2', '2/3', '3/4', '1/3'], correctAnswer: '1/2',
    solution: '4/8 = 1/2'
  },

{
    id: '5th-33', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 3/4 - 1/8?',
    choices: ['1/4', '1/2', '5/8', '7/8'], correctAnswer: '5/8',
    solution: '3/4 = 6/8, so 6/8 - 1/8 = 5/8'
  },

{
    id: '5th-34', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 12/18.',
    choices: ['2/3', '3/4', '1/2', '4/6'], correctAnswer: '2/3',
    solution: '12/18 = 2/3'
  },

{
    id: '5th-35', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 5/6 x 3/5?',
    choices: ['1/2', '1/3', '1/4', '2/3'], correctAnswer: '1/2',
    solution: '5/6 x 3/5 = 15/30 = 1/2'
  },

{
    id: '5th-36', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 0.6 to a percent.',
    choices: ['6%', '60%', '0.6%', '600%'], correctAnswer: '60%',
    solution: '0.6 = 60%'
  },

{
    id: '5th-37', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'What is 30% of 90?',
    choices: ['18', '24', '27', '30'], correctAnswer: '27',
    solution: '0.3 x 90 = 27'
  },

{
    id: '5th-38', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Convert 0.12 to a fraction.',
    choices: ['1/12', '3/25', '12/100', '1/8'], correctAnswer: '12/100',
    solution: '0.12 = 12/100'
  },

{
    id: '5th-39', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 15% of 200?',
    choices: ['20', '25', '30', '35'], correctAnswer: '30',
    solution: '0.15 x 200 = 30'
  },

{
    id: '5th-40', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A $80 item is discounted by 25%. What is the sale price?',
    choices: ['$50', '$55', '$60', '$65'], correctAnswer: '$60',
    solution: '25% of $80 is $20; $80 - $20 = $60'
  },

{
    id: '5th-41', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a dodecagon have?',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: 'A dodecagon has 12 sides'
  },

{
    id: '5th-42', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a square have?',
    choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A square has 4 right angles'
  },

{
    id: '5th-43', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'A square has a side length of 13 cm. What is its area?',
    choices: ['143 cm²', '153 cm²', '163 cm²', '169 cm²'], correctAnswer: '169 cm²',
    solution: 'Area = 13 x 13 = 169 cm²'
  },

{
    id: '5th-44', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'A triangle has angles of 90°, 45°, and ___. What is the missing angle?',
    choices: ['35°', '45°', '55°', '65°'], correctAnswer: '45°',
    solution: 'Sum of angles in triangle = 180°. 180 - 90 - 45 = 45°'
  },

{
    id: '5th-45', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 3,
    questionText: 'A rectangle is 16 cm long and 7 cm wide. What is its perimeter?',
    choices: ['40 cm', '42 cm', '44 cm', '46 cm'], correctAnswer: '46 cm',
    solution: 'Perimeter = 2 x (16 + 7) = 2 x 23 = 46 cm'
  },

{
    id: '5th-46', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 5 meters?',
    choices: ['50', '500', '5,000', '50,000'], correctAnswer: '500',
    solution: '1 meter = 100 cm, so 5 x 100 = 500'
  },

{
    id: '5th-47', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 5 hours?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '5 x 60 = 300'
  },

{
    id: '5th-48', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 50 meters long. How many centimeters is that?',
    choices: ['500', '5,000', '50,000', '500,000'], correctAnswer: '5,000',
    solution: '50 x 100 = 5,000'
  },

{
    id: '5th-49', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 7 kilograms?',
    choices: ['700', '7,000', '70,000', '700,000'], correctAnswer: '7,000',
    solution: '7 x 1,000 = 7,000'
  },

{
    id: '5th-50', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 3,
    questionText: 'A car travels 480 kilometers in 8 hours. What is its average speed in km/h?',
    choices: ['50', '55', '60', '65'], correctAnswer: '60',
    solution: '480 ÷ 8 = 60 km/h'
  },

{
    id: '5th-51', gradeMin: 5, gradeMax: 5, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the mean of 10, 14, and 18?',
    choices: ['12', '14', '16', '18'], correctAnswer: '14',
    solution: '(10 + 14 + 18) ÷ 3 = 42 ÷ 3 = 14'
  },

{
    id: '5th-52', gradeMin: 5, gradeMax: 5, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the median of 5, 9, 13, 17, 21?',
    choices: ['9', '13', '15', '17'], correctAnswer: '13',
    solution: 'The middle number is 13'
  },

{
    id: '5th-53', gradeMin: 5, gradeMax: 5, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the mode of 3, 5, 5, 7, 9?',
    choices: ['3', '5', '7', '9'], correctAnswer: '5',
    solution: '5 appears most often'
  },

{
    id: '5th-54', gradeMin: 5, gradeMax: 5, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the range of 8, 12, 15, 19, 24?',
    choices: ['12', '13', '14', '16'], correctAnswer: '16',
    solution: '24 - 8 = 16'
  },

{
    id: '5th-55', gradeMin: 5, gradeMax: 5, domain: 'Statistics', difficulty: 3,
    questionText: 'The scores on a test are 82, 88, 95, 88, 90. What is the mode?',
    choices: ['82', '88', '90', '95'], correctAnswer: '88',
    solution: '88 appears most often'
  },

{
    id: '5th-56', gradeMin: 5, gradeMax: 5, domain: 'Number Sense', difficulty: 2,
    questionText: 'A school bus has 50 seats. If 37 are occupied, how many are empty?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '50 - 37 = 13'
  },

{
    id: '5th-57', gradeMin: 5, gradeMax: 5, domain: 'Measurement', difficulty: 2,
    questionText: 'A water bottle holds 900 milliliters. How many liters is that?',
    choices: ['0.9', '9', '90', '900'], correctAnswer: '0.9',
    solution: '1 liter = 1,000 mL, so 900 ÷ 1,000 = 0.9 L'
  },

{
    id: '5th-58', gradeMin: 5, gradeMax: 5, domain: 'Geometry', difficulty: 2,
    questionText: 'How many faces does a rectangular prism have?',
    choices: ['4', '6', '8', '12'], correctAnswer: '6',
    solution: 'A rectangular prism has 6 faces'
  },

{
    id: '5th-59', gradeMin: 5, gradeMax: 5, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 20% of 250?',
    choices: ['20', '25', '30', '50'], correctAnswer: '50',
    solution: '0.20 x 250 = 50'
  },

{
    id: '5th-60', gradeMin: 5, gradeMax: 5, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 3/7 + 2/7?',
    choices: ['3/7', '4/7', '5/7', '1'], correctAnswer: '5/7',
    solution: '3/7 + 2/7 = 5/7'
  },

{
    id: '67', gradeMin: 5, gradeMax: 6, domain: 'Measurement', difficulty: 2,
    questionText: 'Convert 30 inches to feet.', choices: ['2 ft', '2.5 ft', '3 ft', '3.5 ft'], correctAnswer: '2.5 ft',
    solution: '12 in = 1 ft -> 30 ÷ 12 = 2.5 ft.'
  },

];

export default grade5Questions;
