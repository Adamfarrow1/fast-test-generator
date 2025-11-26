# Fast Math Test Generator 🧮

**🌐 Live Application: https://mathnasium-test-generator.netlify.app/**

A professional web application for creating personalized math assessments. Generate custom PDF tests for grades 1-8 and PERT practice tests with just a few clicks.

## 🌟 Features

- **Grade Levels:** Comprehensive coverage from Grade 1 through Grade 8, plus PERT test preparation
- **Custom Topics:** Select specific math domains (Number Sense, Algebra, Geometry, etc.)
- **Flexible Questions:** Choose 1-200 questions per test
- **Professional PDFs:** Instantly generate print-ready test sheets
- **Smart Selection:** Automatic question balancing with optional challenge problems
- **Preview Mode:** Review tests before downloading

## 🚀 Quick Start for Users

**[📖 Read the Complete User Guide →](USER_GUIDE.md)**

### For Teachers and Educators:

1. **Visit https://mathnasium-test-generator.netlify.app/** in your web browser
2. **Enter student name** (can be individual or class name)
3. **Select grade level** (1-8 or PERT)
4. **Choose number of questions** (recommended: 10-20 for younger grades)
5. **Pick math topics** you want to assess
6. **Preview or Download** your custom PDF test

### Example Use Cases:
- **Quick Assessment:** 10 questions, Grade 3, Number Sense + Operations
- **Unit Test:** 25 questions, Grade 6, Fractions + Ratios + Algebra  
- **Diagnostic Test:** 15 questions across all available topics for the grade
- **PERT Prep:** 50 questions covering high school math concepts

## 🎯 Available Math Topics

- Number Sense & Operations
- Place Value & Algebraic Thinking
- Fractions, Decimals & Percents
- Geometry & Transformations
- Measurement & Data
- Statistics & Probability
- Ratios, Proportions & Algebra
- Functions & Advanced Topics

*Available topics automatically adjust based on selected grade level.*

## 💻 Technical Setup (For Administrators)

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone and install:**
   ```bash
   git clone <repository-url>
   cd fast-test-generator
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Deployment

```bash
# Build for production
npm run build

# Start production server  
npm start
```

### Deploy Options
- **Vercel:** Optimal for Next.js applications
- **Netlify:** Alternative hosting platform
- **Docker:** Containerized deployment
- **Self-hosted:** Any Node.js compatible server

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main test generator interface
│   └── api/generate/      # PDF generation API
├── lib/
│   ├── questions/         # Question banks by grade
│   ├── allQuestions.ts    # Question aggregation
│   ├── pdf-generator.ts   # PDF creation logic
│   └── types.ts          # TypeScript definitions
└── public/                # Static assets (images for questions)
```

## 🔧 Development Notes

### Adding Questions
Questions are organized by grade in `/src/lib/questions/`. Each question follows this structure:

```typescript
{
  id: string;
  gradeMin: number;        // Minimum appropriate grade
  gradeMax: number;        // Maximum appropriate grade  
  domain: string;          // Math topic (e.g., "Number Sense")
  difficulty: number;      // 1-3 scale
  questionText: string;    
  choices: string[] | QuestionChoice[];
  correctAnswer: string;
  solution?: string;
}
```

### Supported Question Types
- **Text-based:** Traditional multiple choice
- **Image-based:** Questions with visual elements
- **Mixed format:** Combination of text and images

## 📋 TODO / Roadmap

- [ ] Add more engaging questions for grades 5-8
- [ ] Verify domain alignment with official FAST standards
- [ ] Cross-reference with official FAST question bank
- [ ] Add answer key generation option
- [ ] Implement question difficulty analytics
- [ ] Add bulk test generation for classes

## 🤝 Contributing

This project is designed for educational use. To contribute:

1. Focus on pedagogically sound questions
2. Ensure grade-level appropriateness  
3. Follow existing question format structure
4. Test questions with target age groups when possible

## 📜 License

This project is designed for educational use in accordance with fair use guidelines for assessment materials.

---

**Need help using the system?** Check out the [📖 Complete User Guide](USER_GUIDE.md) for detailed instructions.
