import { Question } from '../types';

export const grade6Questions: Question[] = [
{
    id: '7',
    gradeMin: 6,
    gradeMax: 8,
    domain: 'Algebra',
    difficulty: 3,
    questionText: 'Solve for x: 2x + 5 = 13',
    choices: ['3', '4', '6', '8'],
    correctAnswer: '4',
    solution: '2x + 5 = 13 -> 2x = 8  -> x = 4'
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
    id: '76', gradeMin: 6, gradeMax: 7, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'A $50 item is discounted by 20%. What is the sale price?', choices: ['$10', '$30', '$40', '$45'], correctAnswer: '$40',
    solution: '20% of $50 is $10; $50 - $10 = $40.'
  },

{
    id: '51', gradeMin: 6, gradeMax: 7, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'A car travels 120 miles in 3 hours. What is the unit rate in mph?', choices: ['30', '35', '40', '45'], correctAnswer: '40',
    solution: '120 ÷ 3 = 40 mph.'
  },

{
    id: '52', gradeMin: 6, gradeMax: 7, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'Solve: x/5 = 18/15', choices: ['4', '5', '6', '9'], correctAnswer: '6',
    solution: 'x = 5 x 18 ÷ 15 = 6.'
  },

{
    id: '53', gradeMin: 6, gradeMax: 7, domain: 'Integers & Rational Numbers', difficulty: 1,
    questionText: 'Evaluate: -7 + 12', choices: ['-19', '5', '-5', '19'], correctAnswer: '5',
    solution: '-7 + 12 = 5.'
  },

{
    id: '54', gradeMin: 6, gradeMax: 7, domain: 'Integers & Rational Numbers', difficulty: 1,
    questionText: 'What is |-3| + |-5|?', choices: ['-8', '0', '8', '2'], correctAnswer: '8',
    solution: 'Absolute values: 3 + 5 = 8.'
  },

{
    id: '55', gradeMin: 6, gradeMax: 7, domain: 'Exponents & Roots', difficulty: 2,
    questionText: 'Evaluate: 2^3 x 3^2', choices: ['24', '48', '72', '96'], correctAnswer: '72',
    solution: '2^3=8, 3^2=9, 8x9=72.'
  },

{
    id: '56', gradeMin: 6, gradeMax: 7, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve for x: 5x - 9 = 16', choices: ['3', '4', '5', '6'], correctAnswer: '5',
    solution: '5x=25 -> x=5.'
  },

{
    id: '57', gradeMin: 6, gradeMax: 7, domain: 'Algebra', difficulty: 2,
    questionText: 'Solve: 3(x + 4) = 27', choices: ['3', '5', '7', '9'], correctAnswer: '5',
    solution: 'x+4=9 -> x=5.'
  },

{
    id: '63', gradeMin: 6, gradeMax: 7, domain: 'Geometry', difficulty: 2,
    questionText: 'Volume of a rectangular prism with l=4, w=3, h=5?', choices: ['12', '20', '40', '60'], correctAnswer: '60',
    solution: 'V = lwh = 4x3x5 = 60.'
  },

{
    id: '64', gradeMin: 6, gradeMax: 7, domain: 'Geometry', difficulty: 1,
    questionText: 'Sum of the interior angles of a quadrilateral?', choices: ['90°', '180°', '270°', '360°'], correctAnswer: '360°',
    solution: 'Quadrilateral can be split into two triangles: 2x180°.'
  },

{
    id: '66', gradeMin: 6, gradeMax: 7, domain: 'Measurement', difficulty: 2,
    questionText: 'Convert 3.5 kilograms to grams.', choices: ['350 g', '3,500 g', '35,000 g', '0.35 g'], correctAnswer: '3,500 g',
    solution: '1 kg = 1000 g -> 3.5 kg = 3500 g.'
  },

{
    id: '69', gradeMin: 6, gradeMax: 7, domain: 'Probability', difficulty: 2,
    questionText: 'Flip a fair coin twice. P(Heads then Tails)?', choices: ['1/2', '1/3', '1/4', '1/8'], correctAnswer: '1/4',
    solution: 'Independent events: 1/2 x 1/2 = 1/4.'
  },

{
    id: '6-1', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 2,
    questionText: 'The school library charges $3 for each day a book is overdue. If Maria owes $15 in late fees, how many days was her book overdue? Write and solve the equation 3x = 15.',
    choices: ['3 days', '4 days', '5 days', '6 days'], correctAnswer: '5 days',
    solution: 'Solve 3x = 15 by dividing both sides by 3: x = 15 / 3 = 5 days.'
  },

{
    id: '6-2', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 2,
    questionText: 'The school cafeteria ordered pizzas for a special event. Each pizza was cut into 8 slices, and there were 24 slices left over. How many whole pizzas were left? Solve: 8p = 24.',
    choices: ['2 pizzas', '3 pizzas', '4 pizzas', '5 pizzas'], correctAnswer: '3 pizzas',
    solution: 'Solve 8p = 24 by dividing both sides by 8: p = 24 / 8 = 3 pizzas.'
  },

{
    id: '6-3', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 3,
    questionText: 'Tommy saved money for a new video game that costs $45. He already has $20 and earns $5 per week doing chores. How many weeks will it take him to save enough? Solve: 20 + 5w = 45.',
    choices: ['4 weeks', '5 weeks', '6 weeks', '7 weeks'], correctAnswer: '5 weeks',
    solution: 'Solve 20 + 5w = 45: Subtract 20 from both sides: 5w = 25. Divide by 5: w = 5 weeks.'
  },

{
    id: '6-4',
    gradeMin: 6,
    gradeMax: 6,
    domain: 'Algebra',
    difficulty: 3,
    questionText: 'The school theater sold tickets for their play. Adult tickets cost $12 each and student tickets cost $8 each. If they sold 15 adult tickets and earned a total of $276, how many student tickets did they sell? Solve: 12(15) + 8s = 276.',
    choices: ['8 tickets', '10 tickets', '12 tickets', '14 tickets'],
    correctAnswer: '12 tickets',
    solution: 'Adult revenue: 12 x 15 = $180. Then 180 + 8s = 276 → 8s = 96 → s = 12 student tickets.'
  },

{
    id: '6-5', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 2,
    questionText: 'A rectangle has a length that is 3 units more than its width. If the width is w units, which expression represents the length of the rectangle?',
    choices: ['w - 3', 'w + 3', '3w', 'w / 3'], correctAnswer: 'w + 3',
    solution: 'If width is w and length is 3 units more than width, then length = w + 3.'
  },

{
    id: '6-6', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 3,
    questionText: 'The science club is selling candy bars to raise money for a field trip. They need to raise $150. If each candy bar sells for $2 and they have already raised $50, how many more candy bars do they need to sell? Solve: 50 + 2x = 150.',
    choices: ['40 bars', '45 bars', '50 bars', '55 bars'], correctAnswer: '50 bars',
    solution: 'Solve 50 + 2x = 150: Subtract 50 from both sides: 2x = 100. Divide by 2: x = 50 candy bars.'
  },

{
    id: '6-7', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 2,
    questionText: 'If x = 7, what is the value of the expression 4x - 9?',
    choices: ['19', '21', '23', '25'], correctAnswer: '19',
    solution: 'Substitute x = 7 into 4x - 9: 4(7) - 9 = 28 - 9 = 19.'
  },

{
    id: '6-8', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 3,
    questionText: 'The basketball team scored 3 times as many points in the second half as they did in the first half. If they scored 21 points in the second half, how many points did they score in the first half? Solve: 3f = 21.',
    choices: ['6 points', '7 points', '8 points', '9 points'], correctAnswer: '7 points',
    solution: 'Solve 3f = 21 by dividing both sides by 3: f = 21 / 3 = 7 points.'
  },

{
    id: '6-9', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 3,
    questionText: 'A parking garage charges $4 to enter plus $2 for each hour parked. If someone paid $16 total, how many hours did they park? Solve: 4 + 2h = 16.',
    choices: ['5 hours', '6 hours', '7 hours', '8 hours'], correctAnswer: '6 hours',
    solution: 'Solve 4 + 2h = 16: Subtract 4 from both sides: 2h = 12. Divide by 2: h = 6 hours.'
  },

{
    id: '6-10', gradeMin: 6, gradeMax: 6, domain: 'Algebra', difficulty: 2,
    questionText: 'Which of the following expressions is equivalent to 5(x + 3)?',
    choices: ['5x + 3', '5x + 15', 'x + 15', '5x + 8'], correctAnswer: '5x + 15',
    solution: 'Use the distributive property: 5(x + 3) = 5x + 5(3) = 5x + 15.'
  },

{
    id: '6-11', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'The recipe for the school bake sale calls for 2 cups of flour for every 3 cups of sugar. If the parent volunteers want to make a larger batch using 8 cups of flour, how many cups of sugar will they need?',
    choices: ['10 cups', '11 cups', '12 cups', '14 cups'], correctAnswer: '12 cups',
    solution: 'Set up proportion: 2/3 = 8/x. Cross multiply: 2x = 24. Divide by 2: x = 12 cups of sugar.'
  },

{
    id: '6-12', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'The school track team runs at a rate of 200 meters in 45 seconds during practice. At this rate, how long will it take them to run 400 meters?',
    choices: ['80 seconds', '85 seconds', '90 seconds', '95 seconds'], correctAnswer: '90 seconds',
    solution: 'Set up proportion: 200/45 = 400/x. Cross multiply: 200x = 18,000. Divide by 200: x = 90 seconds.'
  },

{
    id: '6-13', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 3,
    questionText: 'A map of the school district uses a scale where 1 inch represents 2 miles. If two schools are 3.5 inches apart on the map, what is the actual distance between them?',
    choices: ['6 miles', '7 miles', '8 miles', '9 miles'], correctAnswer: '7 miles',
    solution: 'Set up proportion: 1 inch/2 miles = 3.5 inches/x miles. Cross multiply: x = 3.5 x 2 = 7 miles.'
  },

{
    id: '6-14', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'The student council is mixing fruit punch for the school dance. The ratio of cranberry juice to apple juice should be 3:5. If they use 15 cups of apple juice, how many cups of cranberry juice should they use?',
    choices: ['8 cups', '9 cups', '10 cups', '12 cups'], correctAnswer: '9 cups',
    solution: 'Set up proportion: 3/5 = x/15. Cross multiply: 5x = 45. Divide by 5: x = 9 cups of cranberry juice.'
  },

{
    id: '6-15', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 3,
    questionText: 'During a charity car wash, the math club washed 24 cars in 3 hours. At this unit rate, how many cars can they wash in 5 hours?',
    choices: ['35 cars', '38 cars', '40 cars', '42 cars'], correctAnswer: '40 cars',
    solution: 'Find unit rate: 24 cars / 3 hours = 8 cars per hour. For 5 hours: 8 x 5 = 40 cars.'
  },

{
    id: '6-16', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'The art supply store sells paintbrushes in packs. A pack of 6 brushes costs $18. What is the unit price per brush?',
    choices: ['$2.50', '$3.00', '$3.50', '$4.00'], correctAnswer: '$3.00',
    solution: 'Unit price = Total cost / Number of brushes = $18 / 6 = $3.00 per brush.'
  },

{
    id: '6-17', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 3,
    questionText: 'The school cafeteria serves lunch to 450 students. The ratio of students who choose pizza to those who choose salad is 5:4. How many students choose pizza?',
    choices: ['200 students', '225 students', '250 students', '275 students'], correctAnswer: '250 students',
    solution: 'Total ratio parts: 5 + 4 = 9. Pizza students: (5/9) x 450 = 250 students.'
  },

{
    id: '6-18', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'A recipe calls for 4 tablespoons of oil for every 6 servings. How many tablespoons of oil are needed for 15 servings?',
    choices: ['8 tablespoons', '9 tablespoons', '10 tablespoons', '12 tablespoons'], correctAnswer: '10 tablespoons',
    solution: 'Set up proportion: 4/6 = x/15. Cross multiply: 6x = 60. Divide by 6: x = 10 tablespoons.'
  },

{
    id: '6-19', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 3,
    questionText: 'The school bus travels 180 miles and uses 12 gallons of fuel. At this rate, how many gallons will the bus use to travel 375 miles?',
    choices: ['23 gallons', '24 gallons', '25 gallons', '26 gallons'], correctAnswer: '25 gallons',
    solution: 'Set up proportion: 180/12 = 375/x. Cross multiply: 180x = 4500. Divide by 180: x = 25 gallons.'
  },

{
    id: '6-20', gradeMin: 6, gradeMax: 6, domain: 'Ratios & Proportions', difficulty: 2,
    questionText: 'In the school garden, the ratio of tomato plants to pepper plants is 7:3. If there are 21 tomato plants, how many pepper plants are there?',
    choices: ['7 plants', '8 plants', '9 plants', '12 plants'], correctAnswer: '9 plants',
    solution: 'Set up proportion: 7/3 = 21/x. Cross multiply: 7x = 63. Divide by 7: x = 9 pepper plants.'
  },

{
    id: '6-21', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'The school is building a new rectangular courtyard. The courtyard will be 15 meters long and 8 meters wide. What is the area of the courtyard in square meters?',
    choices: ['23 sq meters', '46 sq meters', '120 sq meters', '240 sq meters'], correctAnswer: '120 sq meters',
    solution: 'Area of rectangle = length x width = 15 x 8 = 120 square meters.'
  },

{
    id: '6-22', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'The maintenance crew needs to install a fence around the school\'s rectangular garden. The garden is 12 feet long and 9 feet wide. How much fencing do they need?',
    choices: ['21 feet', '42 feet', '108 feet', '216 feet'], correctAnswer: '42 feet',
    solution: 'Perimeter of rectangle = 2(length + width) = 2(12 + 9) = 2(21) = 42 feet.'
  },

{
    id: '6-23', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'The art teacher wants to create a triangular banner for the school play. The banner has a base of 6 feet and a height of 4 feet. What is the area of the triangular banner?',
    choices: ['10 sq feet', '12 sq feet', '20 sq feet', '24 sq feet'], correctAnswer: '12 sq feet',
    solution: 'Area of triangle = (1/2) x base x height = (1/2) x 6 x 4 = 12 square feet.'
  },

{
    id: '6-24', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'The school is building a storage room in the shape of a rectangular prism. The room will be 8 feet long, 6 feet wide, and 10 feet tall. What is the volume of the storage room?',
    choices: ['240 cubic feet', '280 cubic feet', '480 cubic feet', '640 cubic feet'], correctAnswer: '480 cubic feet',
    solution: 'Volume of rectangular prism = length x width x height = 8 x 6 x 10 = 480 cubic feet.'
  },

{
    id: '6-25', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'On the coordinate plane, point A is located at (3, 5). If you move 4 units to the right and 2 units down from point A, what are the coordinates of the new point?',
    choices: ['(7, 3)', '(7, 7)', '(-1, 3)', '(1, 7)'], correctAnswer: '(7, 3)',
    solution: 'Moving right increases x-coordinate, moving down decreases y-coordinate: (3+4, 5-2) = (7, 3).'
  },

{
    id: '6-26', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'The school playground has a circular sandbox with a radius of 4 meters. What is the approximate area of the sandbox? (Use 3.14 for pi)',
    choices: ['12.56 sq meters', '25.12 sq meters', '50.24 sq meters', '100.48 sq meters'], correctAnswer: '50.24 sq meters',
    solution: 'Area of circle = pi x radius^2 = 3.14 x 4^2 = 3.14 x 16 = 50.24 square meters.'
  },

{
    id: '6-27', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'The cafeteria has a square tile floor. Each tile has an area of 16 square inches. What is the length of one side of each tile?',
    choices: ['4 inches', '8 inches', '12 inches', '256 inches'], correctAnswer: '4 inches',
    solution: 'For a square, area = side^2. If area is 16, then side = √16 = 4 inches.'
  },

{
    id: '6-28', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'The school flag is in the shape of a parallelogram with a base of 10 feet and a height of 6 feet. What is the area of the flag?',
    choices: ['16 sq feet', '32 sq feet', '60 sq feet', '120 sq feet'], correctAnswer: '60 sq feet',
    solution: 'Area of parallelogram = base x height = 10 x 6 = 60 square feet.'
  },

{
    id: '6-29', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'On a coordinate grid, what is the distance between point P(2, 1) and point Q(2, 7)?',
    choices: ['5 units', '6 units', '7 units', '8 units'], correctAnswer: '6 units',
    solution: 'Since both points have the same x-coordinate (2), the distance is |7 - 1| = 6 units.'
  },

{
    id: '6-30', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'The gymnasium ceiling is supported by triangular trusses. Each truss is an isosceles triangle with two angles measuring 65 degrees each. What is the measure of the third angle?',
    choices: ['40 degrees', '45 degrees', '50 degrees', '55 degrees'], correctAnswer: '50 degrees',
    solution: 'Sum of angles in triangle = 180 degrees. Third angle = 180 - 65 - 65 = 50 degrees.'
  },

{
    id: '6-31', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'The math class recorded the number of books each student read over summer break: 3, 7, 5, 8, 6, 4, 9, 7, 5, 6. What is the mean number of books read?',
    choices: ['5.5 books', '6.0 books', '6.5 books', '7.0 books'], correctAnswer: '6.0 books',
    solution: 'Mean = (3+7+5+8+6+4+9+7+5+6) / 10 = 60 / 10 = 6.0 books.'
  },

{
    id: '6-32', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'During a basketball tournament, the home team scored the following points in their games: 58, 62, 45, 71, 66, 59, 63. What is the median score?',
    choices: ['59 points', '62 points', '63 points', '66 points'], correctAnswer: '62 points',
    solution: 'First arrange in order: 45, 58, 59, 62, 63, 66, 71. The median is the middle value: 62 points.'
  },

{
    id: '6-33', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'The student council surveyed students about their favorite school lunch: Pizza (28 students), Burgers (15 students), Salad (12 students), Tacos (25 students). What is the mode of this data?',
    choices: ['Pizza', 'Burgers', 'Salad', 'Tacos'], correctAnswer: 'Pizza',
    solution: 'The mode is the most frequently chosen option. Pizza was chosen by 28 students, which is the highest.'
  },

{
    id: '6-34', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'The science class measured the heights of sunflowers in their garden (in inches): 45, 52, 38, 61, 47, 55, 49. What is the range of the sunflower heights?',
    choices: ['16 inches', '18 inches', '21 inches', '23 inches'], correctAnswer: '23 inches',
    solution: 'Range = Maximum - Minimum = 61 - 38 = 23 inches.'
  },

{
    id: '6-35', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'The school track team recorded their race times (in seconds): 12.5, 13.2, 11.8, 14.1, 12.9, 13.0. If a new runner joins with a time of 12.7 seconds, what will be the new mean time?',
    choices: ['12.7 seconds', '12.8 seconds', '12.9 seconds', '13.0 seconds'], correctAnswer: '12.9 seconds',
    solution: 'Original sum: 12.5+13.2+11.8+14.1+12.9+13.0 = 77.5. New sum: 77.5+12.7 = 90.2. New mean: 90.2/7 = 12.9 seconds.'
  },

{
    id: '6-36', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'A histogram shows the number of pets owned by students in 6th grade. The data shows: 0 pets (8 students), 1 pet (15 students), 2 pets (12 students), 3 pets (5 students). How many students were surveyed in total?',
    choices: ['35 students', '38 students', '40 students', '42 students'], correctAnswer: '40 students',
    solution: 'Total students = 8 + 15 + 12 + 5 = 40 students.'
  },

{
    id: '6-37', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'The school cafeteria tracked daily milk sales for a week: Monday (125), Tuesday (118), Wednesday (132), Thursday (128), Friday (147). What is the average daily milk sales?',
    choices: ['128 cartons', '130 cartons', '132 cartons', '135 cartons'], correctAnswer: '130 cartons',
    solution: 'Average = (125+118+132+128+147) / 5 = 650 / 5 = 130 cartons per day.'
  },

{
    id: '6-38', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'A box plot shows the test scores for two classes. Class A has a median of 78 and Class B has a median of 82. Which statement is correct?',
    choices: ['Class A performed better', 'Class B performed better', 'Both classes performed equally', 'Cannot determine from median alone'], correctAnswer: 'Class B performed better',
    solution: 'A higher median indicates that the middle score in Class B (82) is higher than Class A (78), suggesting better performance.'
  },

{
    id: '6-39', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'The school library recorded the number of books checked out each day for 6 days: 45, 52, 38, 61, 47, 51. If the librarian wants to represent this data with a single number that shows the "typical" value, which measure would be most appropriate?',
    choices: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 'Mean',
    solution: 'The mean (average) is typically the best measure for showing the typical value when there are no extreme outliers in the data.'
  },

{
    id: '6-40', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'A survey asked 60 sixth graders about their favorite season. The results were: Spring (18), Summer (24), Fall (12), Winter (6). What percentage of students chose Summer as their favorite season?',
    choices: ['30%', '35%', '40%', '45%'], correctAnswer: '40%',
    solution: 'Percentage = (24 students who chose Summer / 60 total students) x 100% = 40%.'
  },

{
    id: '6th-1', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 1,
    questionText: 'The school library has 2,400 books. If 1,350 are checked out, how many are left?',
    choices: ['1,050', '1,150', '1,250', '1,350'], correctAnswer: '1,050',
    solution: '2,400 - 1,350 = 1,050'
  },

{
    id: '6th-2', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is the value of 15 x 12?',
    choices: ['170', '180', '190', '200'], correctAnswer: '180',
    solution: '15 x 12 = 180'
  },

{
    id: '6th-3', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 1,
    questionText: 'Round 7,489 to the nearest hundred.',
    choices: ['7,400', '7,500', '7,600', '7,700'], correctAnswer: '7,500',
    solution: 'Tens digit is 8 (>=5), round up to 7,500'
  },

{
    id: '6th-4', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'A store sold 3,456 pencils in May and 2,789 pencils in June. How many pencils did they sell in total?',
    choices: ['6,145', '6,245', '6,255', '6,345'], correctAnswer: '6,245',
    solution: '3,456 + 2,789 = 6,245'
  },

{
    id: '6th-5', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is 8,000 - 3,678?',
    choices: ['4,222', '4,322', '4,332', '4,342'], correctAnswer: '4,322',
    solution: '8,000 - 3,678 = 4,322'
  },

{
    id: '6th-6', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'Which is greater: 7,654 or 7,456?',
    choices: ['7,654', '7,456'], correctAnswer: '7,654',
    solution: '7,654 > 7,456'
  },

{
    id: '6th-7', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the sum of 2,345 and 3,456?',
    choices: ['5,801', '5,811', '5,821', '5,831'], correctAnswer: '5,801',
    solution: '2,345 + 3,456 = 5,801'
  },

{
    id: '6th-8', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 3,
    questionText: 'A school has 3,456 students. If 1,234 are in grades 1-3, how many are in grades 4-6?',
    choices: ['2,222', '2,232', '2,242', '2,252'], correctAnswer: '2,222',
    solution: '3,456 - 1,234 = 2,222'
  },

{
    id: '6th-9', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is 4,800 divided by 48?',
    choices: ['90', '95', '100', '105'], correctAnswer: '100',
    solution: '4,800 ÷ 48 = 100'
  },

{
    id: '6th-10', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 3,
    questionText: 'A bus travels 2,400 miles in 8 days. How many miles does it travel per day?',
    choices: ['200', '250', '300', '350'], correctAnswer: '300',
    solution: '2,400 ÷ 8 = 300'
  },

{
    id: '6th-11', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 3,
    questionText: 'What is the product of 27 and 19?',
    choices: ['493', '503', '513', '523'], correctAnswer: '513',
    solution: '27 x 19 = 513'
  },

{
    id: '6th-12', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'What is the difference between 4,000 and 1,234?',
    choices: ['2,766', '2,776', '2,786', '2,796'], correctAnswer: '2,766',
    solution: '4,000 - 1,234 = 2,766'
  },

{
    id: '6th-13', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'Round 8,849 to the nearest thousand.',
    choices: ['8,000', '9,000', '8,800', '8,900'], correctAnswer: '9,000',
    solution: 'Hundreds digit is 8 (>=5), round up to 9,000'
  },

{
    id: '6th-14', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 13 x 7?',
    choices: ['81', '82', '91', '101'], correctAnswer: '91',
    solution: '13 x 7 = 91'
  },

{
    id: '6th-15', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 1,
    questionText: 'What is 9 x 11?',
    choices: ['88', '99', '100', '110'], correctAnswer: '99',
    solution: '9 x 11 = 99'
  },

{
    id: '6th-16', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'A baker made 96 cupcakes and wants to put them equally into 12 boxes. How many cupcakes will go in each box?',
    choices: ['6', '7', '8', '9'], correctAnswer: '8',
    solution: '96 ÷ 12 = 8'
  },

{
    id: '6th-17', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 1,
    questionText: 'What is the value of 7 x 13?',
    choices: ['81', '91', '101', '111'], correctAnswer: '91',
    solution: '7 x 13 = 91'
  },

{
    id: '6th-18', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'Fill in the blank: 9 x ___ = 108',
    choices: ['10', '11', '12', '13'], correctAnswer: '12',
    solution: '9 x 12 = 108'
  },

{
    id: '6th-19', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'A class has 54 students. If they are divided into 6 equal groups, how many students are in each group?',
    choices: ['7', '8', '9', '10'], correctAnswer: '9',
    solution: '54 ÷ 6 = 9'
  },

{
    id: '6th-20', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'What is 99 ÷ 9?',
    choices: ['9', '10', '11', '12'], correctAnswer: '11',
    solution: '99 ÷ 9 = 11'
  },

{
    id: '6th-21', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 2,
    questionText: 'If 8 x 7 = 56, what does 7 x 8 equal?',
    choices: ['56', '64', '72', '80'], correctAnswer: '56',
    solution: 'Multiplication is commutative: 7 x 8 = 8 x 7 = 56'
  },

{
    id: '6th-22', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A school has 7 classes with 32 students each. How many students are there in total?',
    choices: ['214', '224', '234', '244'], correctAnswer: '224',
    solution: '7 x 32 = 224'
  },

{
    id: '6th-23', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is the missing number: ___ ÷ 11 = 9',
    choices: ['88', '99', '100', '110'], correctAnswer: '99',
    solution: '99 ÷ 11 = 9'
  },

{
    id: '6th-24', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'A store sold 156 apples in 12 days. How many apples did they sell per day?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '156 ÷ 12 = 13'
  },

{
    id: '6th-25', gradeMin: 6, gradeMax: 6, domain: 'Operations & Algebraic Thinking', difficulty: 3,
    questionText: 'What is 169 divided by 13?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '169 ÷ 13 = 13'
  },

{
    id: '6th-26', gradeMin: 6, gradeMax: 6, domain: 'Place Value', difficulty: 1,
    questionText: 'What is the value of the 7 in 7,432?',
    choices: ['7', '70', '700', '7,000'], correctAnswer: '7,000',
    solution: '7 is in the thousands place'
  },

{
    id: '6th-27', gradeMin: 6, gradeMax: 6, domain: 'Place Value', difficulty: 1,
    questionText: 'What is 5,210 written in expanded form?',
    choices: ['5,000+200+10', '5,000+200+10+0', '5,000+100+10', '5,000+100+20'], correctAnswer: '5,000+200+10',
    solution: '5,210 = 5,000 + 200 + 10'
  },

{
    id: '6th-28', gradeMin: 6, gradeMax: 6, domain: 'Place Value', difficulty: 2,
    questionText: 'Round 9,489 to the nearest thousand.',
    choices: ['9,000', '9,500', '10,000', '10,500'], correctAnswer: '9,000',
    solution: 'Hundreds digit is 4 (<5), round down to 9,000'
  },

{
    id: '6th-29', gradeMin: 6, gradeMax: 6, domain: 'Place Value', difficulty: 2,
    questionText: 'Which digit is in the hundreds place of 8,482?',
    choices: ['4', '6', '8', '2'], correctAnswer: '4',
    solution: 'Hundreds place is 4'
  },

{
    id: '6th-30', gradeMin: 6, gradeMax: 6, domain: 'Place Value', difficulty: 3,
    questionText: 'What is the largest 6-digit number?',
    choices: ['999,999', '999,900', '999,990', '999,909'], correctAnswer: '999,999',
    solution: '999,999 is the largest 6-digit number'
  },

{
    id: '6th-31', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 1,
    questionText: 'What is 2/5 + 1/5?',
    choices: ['2/5', '3/5', '4/5', '1'], correctAnswer: '3/5',
    solution: '2/5 + 1/5 = 3/5'
  },

{
    id: '6th-32', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 1,
    questionText: 'Which fraction is equivalent to 6/12?',
    choices: ['1/2', '2/3', '3/4', '1/3'], correctAnswer: '1/2',
    solution: '6/12 = 1/2'
  },

{
    id: '6th-33', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 5/6 - 1/3?',
    choices: ['1/6', '1/2', '2/3', '3/6'], correctAnswer: '1/2',
    solution: '1/3 = 2/6, so 5/6 - 2/6 = 3/6 = 1/2'
  },

{
    id: '6th-34', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 2,
    questionText: 'Simplify 18/27.',
    choices: ['2/3', '3/4', '1/2', '4/6'], correctAnswer: '2/3',
    solution: '18/27 = 2/3'
  },

{
    id: '6th-35', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 3,
    questionText: 'What is 7/8 x 2/7?',
    choices: ['1/4', '1/8', '1/2', '2/7'], correctAnswer: '1/4',
    solution: '7/8 x 2/7 = 14/56 = 1/4'
  },

{
    id: '6th-36', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'Convert 0.7 to a percent.',
    choices: ['7%', '70%', '0.7%', '700%'], correctAnswer: '70%',
    solution: '0.7 = 70%'
  },

{
    id: '6th-37', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 1,
    questionText: 'What is 40% of 150?',
    choices: ['40', '50', '60', '70'], correctAnswer: '60',
    solution: '0.4 x 150 = 60'
  },

{
    id: '6th-38', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'Convert 0.18 to a fraction.',
    choices: ['1/18', '9/50', '18/100', '1/8'], correctAnswer: '18/100',
    solution: '0.18 = 18/100'
  },

{
    id: '6th-39', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 25% of 320?',
    choices: ['60', '70', '80', '90'], correctAnswer: '80',
    solution: '0.25 x 320 = 80'
  },

{
    id: '6th-40', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 3,
    questionText: 'A $120 item is discounted by 25%. What is the sale price?',
    choices: ['$80', '$85', '$90', '$95'], correctAnswer: '$90',
    solution: '25% of $120 is $30; $120 - $30 = $90'
  },

{
    id: '6th-41', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 1,
    questionText: 'How many sides does a pentadecagon have?',
    choices: ['12', '13', '14', '15'], correctAnswer: '15',
    solution: 'A pentadecagon has 15 sides'
  },

{
    id: '6th-42', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 1,
    questionText: 'How many right angles does a rectangle have?',
    choices: ['2', '3', '4', '5'], correctAnswer: '4',
    solution: 'A rectangle has 4 right angles'
  },

{
    id: '6th-43', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'A square has a side length of 15 cm. What is its area?',
    choices: ['215 cm²', '225 cm²', '235 cm²', '245 cm²'], correctAnswer: '225 cm²',
    solution: 'Area = 15 x 15 = 225 cm²'
  },

{
    id: '6th-44', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'A triangle has angles of 90°, 30°, and ___. What is the missing angle?',
    choices: ['30°', '40°', '50°', '60°'], correctAnswer: '60°',
    solution: 'Sum of angles in triangle = 180°. 180 - 90 - 30 = 60°'
  },

{
    id: '6th-45', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 3,
    questionText: 'A rectangle is 18 cm long and 8 cm wide. What is its perimeter?',
    choices: ['40 cm', '44 cm', '48 cm', '52 cm'], correctAnswer: '52 cm',
    solution: 'Perimeter = 2 x (18 + 8) = 2 x 26 = 52 cm'
  },

{
    id: '6th-46', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 1,
    questionText: 'How many centimeters are in 8 meters?',
    choices: ['80', '800', '8,000', '80,000'], correctAnswer: '800',
    solution: '1 meter = 100 cm, so 8 x 100 = 800'
  },

{
    id: '6th-47', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 1,
    questionText: 'How many minutes are in 8 hours?',
    choices: ['400', '480', '500', '560'], correctAnswer: '480',
    solution: '8 x 60 = 480'
  },

{
    id: '6th-48', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 2,
    questionText: 'A swimming pool is 75 meters long. How many centimeters is that?',
    choices: ['750', '7,500', '75,000', '750,000'], correctAnswer: '7,500',
    solution: '75 x 100 = 7,500'
  },

{
    id: '6th-49', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 2,
    questionText: 'How many grams are in 9 kilograms?',
    choices: ['900', '9,000', '90,000', '900,000'], correctAnswer: '9,000',
    solution: '9 x 1,000 = 9,000'
  },

{
    id: '6th-50', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 3,
    questionText: 'A car travels 720 kilometers in 12 hours. What is its average speed in km/h?',
    choices: ['50', '55', '60', '65'], correctAnswer: '60',
    solution: '720 ÷ 12 = 60 km/h'
  },

{
    id: '6th-51', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the mean of 12, 16, and 20?',
    choices: ['14', '16', '18', '20'], correctAnswer: '16',
    solution: '(12 + 16 + 20) ÷ 3 = 48 ÷ 3 = 16'
  },

{
    id: '6th-52', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 1,
    questionText: 'What is the median of 7, 11, 15, 19, 23?',
    choices: ['11', '15', '17', '19'], correctAnswer: '15',
    solution: 'The middle number is 15'
  },

{
    id: '6th-53', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the mode of 4, 6, 6, 8, 10?',
    choices: ['4', '6', '8', '10'], correctAnswer: '6',
    solution: '6 appears most often'
  },

{
    id: '6th-54', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 2,
    questionText: 'What is the range of 10, 14, 18, 22, 28?',
    choices: ['16', '17', '18', '19'], correctAnswer: '18',
    solution: '28 - 10 = 18'
  },

{
    id: '6th-55', gradeMin: 6, gradeMax: 6, domain: 'Statistics', difficulty: 3,
    questionText: 'The scores on a test are 84, 89, 97, 89, 92. What is the mode?',
    choices: ['84', '89', '92', '97'], correctAnswer: '89',
    solution: '89 appears most often'
  },

{
    id: '6th-56', gradeMin: 6, gradeMax: 6, domain: 'Number Sense', difficulty: 2,
    questionText: 'A school bus has 60 seats. If 47 are occupied, how many are empty?',
    choices: ['11', '12', '13', '14'], correctAnswer: '13',
    solution: '60 - 47 = 13'
  },

{
    id: '6th-57', gradeMin: 6, gradeMax: 6, domain: 'Measurement', difficulty: 2,
    questionText: 'A water bottle holds 1,200 milliliters. How many liters is that?',
    choices: ['1.2', '12', '120', '1,200'], correctAnswer: '1.2',
    solution: '1 liter = 1,000 mL, so 1,200 ÷ 1,000 = 1.2 L'
  },

{
    id: '6th-58', gradeMin: 6, gradeMax: 6, domain: 'Geometry', difficulty: 2,
    questionText: 'How many faces does a triangular prism have?',
    choices: ['3', '4', '5', '6'], correctAnswer: '5',
    solution: 'A triangular prism has 5 faces'
  },

{
    id: '6th-59', gradeMin: 6, gradeMax: 6, domain: 'Decimals & Percents', difficulty: 2,
    questionText: 'What is 30% of 250?',
    choices: ['30', '50', '60', '75'], correctAnswer: '75',
    solution: '0.30 x 250 = 75'
  },

{
    id: '6th-60', gradeMin: 6, gradeMax: 6, domain: 'Fractions', difficulty: 2,
    questionText: 'What is 4/9 + 2/9?',
    choices: ['4/9', '5/9', '6/9', '1'], correctAnswer: '6/9',
    solution: '4/9 + 2/9 = 6/9'
  },

];

export default grade6Questions;
