# Fast Math Test Generator - User Guide

## 🧮 What is This?

The Fast Math Test Generator is a web application that creates personalized math tests in PDF format. Teachers and educators can generate custom assessments by selecting grade levels, math topics, and question counts. The system automatically creates professional-looking PDF tests that can be printed and distributed to students.

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (if hosted online) OR local installation

### Accessing the Application
  b 
#### Option 1: Live Online Version (Recommended)
**Simply visit: https://mathnasium-test-generator.netlify.app/**

No installation required! The application is ready to use immediately in your web browser.

#### Option 2: Local Installation (For Developers)
If running locally, you'll need to:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:3000`

## 📝 How to Create a Math Test

### Step 1: Enter Student Information
- **Student Name:** Enter the student's name (required)
  - This will appear on the generated PDF test
  - Example: "Sarah Johnson" or "Class 4B"

### Step 2: Select Grade Level
Choose from the dropdown menu:
- **Grades 1-8:** Standard elementary and middle school levels
- **PERT Practice Test:** Postsecondary Education Readiness Test preparation

**Available Grades:**
- Grade 1: Basic counting, simple addition/subtraction
- Grade 2: Two-digit numbers, basic geometry
- Grade 3: Multiplication, fractions introduction
- Grade 4: Multi-digit operations, decimals
- Grade 5: Advanced fractions, basic algebra
- Grade 6: Ratios, negative numbers, geometry
- Grade 7: Proportions, statistics, advanced geometry  
- Grade 8: Pre-algebra, functions, transformations
- PERT: College readiness assessment preparation

### Step 3: Set Number of Questions
- Enter a number between **1-200** questions
- The system will show you how many questions are available for your selected grade and topics
- **Tip:** Start with 10-20 questions for younger grades, 20-30 for older grades

### Step 4: Select Math Topics (Domains)
Choose which areas of mathematics to include in your test:

#### Available Topics by Grade Level:

**Early Elementary (Grades 1-3):**
- Number Sense
- Operations & Algebraic Thinking  
- Place Value
- Geometry
- Measurement

**Upper Elementary (Grades 4-5):**
- All above topics plus:
- Fractions
- Decimals & Percents
- Data & Graphing

**Middle School (Grades 6-8):**
- All above topics plus:
- Algebra
- Ratios & Proportions
- Integers & Rational Numbers
- Statistics
- Probability
- Functions
- Geometry Transformations

**PERT Test:**
- Comprehensive coverage of all topics needed for college readiness

### Step 5: Generate Your Test

**Preview Option:**
- Click "Preview Test" to see the test in a new browser tab
- Review questions before downloading
- No download occurs - just opens PDF in browser

**Download Option:**
- Click "Download Test" to save the PDF to your computer
- File will be saved as "math-test.pdf" or "pert-practice-test.pdf"
- PDF is ready to print and distribute

## 🎯 Test Features

### Automatic Question Selection
The system intelligently selects questions based on:
- **Grade appropriateness:** Questions match the selected grade level
- **Topic coverage:** Even distribution across selected domains
- **Difficulty balance:** Mix of easier and harder questions
- **Challenge questions:** 20% of questions from the next grade level (for FAST tests)

### Professional PDF Format
Generated tests include:
- Student name header
- Clear question numbering
- Multiple choice options (A, B, C, D)
- Professional formatting
- Adequate spacing for student work

### Question Types
- **Text-based questions:** Traditional math problems
- **Image-based questions:** Visual problems with diagrams (Grade 1-3)
- **Mixed formats:** Combination of both types

## ⚠️ Important Notes

### Domain Selection Requirements
- **You must select at least one math topic** to generate a test
- The more topics you select, the more questions will be available
- If you don't have enough questions available, select more topics or reduce question count

### Question Availability
- The counter shows how many questions are available for your selection
- If you request more questions than available, you'll get an error
- **Solution:** Either reduce question count or select additional topics

### Grade Level Considerations
- Questions may span multiple grade levels (e.g., a Grade 3 question might also be appropriate for Grade 4)
- The system automatically filters to show only age-appropriate content
- PERT questions are designed for high school/college preparation

## 🔧 Troubleshooting

### "No questions available" Error
**Problem:** You see this error when trying to generate a test.

**Solutions:**
1. Select more math topics (domains)
2. Reduce the number of questions requested
3. Try a different grade level
4. Check that you've selected at least one topic

### PDF Won't Download
**Problem:** Clicking "Download Test" doesn't save a file.

**Solutions:**
1. Check your browser's download settings
2. Allow pop-ups for this website
3. Try the "Preview Test" option first
4. Refresh the page and try again

### Loading Takes Too Long
**Problem:** The "Generating..." message appears for a long time.

**Solutions:**
1. Wait a bit longer (complex tests take more time)
2. Reduce the number of questions
3. Refresh and try with fewer topics selected
4. Check your internet connection

### Questions Don't Match Expected Grade Level
**Problem:** Questions seem too easy or hard for the selected grade.

**Explanation:** 
- Questions may span multiple grade levels for continuity
- Challenge questions (20%) come from the next grade level
- This is intentional to assess student readiness

## 📊 Best Practices

### For Teachers
- **Start small:** Begin with 10-15 questions to test the system
- **Mix topics:** Select 3-4 different math domains for variety  
- **Preview first:** Always preview before downloading final tests
- **Print quality:** Use high-quality print settings for best results

### Question Recommendations by Grade
- **Grades 1-2:** 8-12 questions, 2-3 topics
- **Grades 3-4:** 12-18 questions, 3-4 topics  
- **Grades 5-6:** 15-25 questions, 4-5 topics
- **Grades 7-8:** 20-30 questions, 4-6 topics
- **PERT:** 25-50 questions, all relevant topics

### Creating Effective Assessments
- **Diagnostic tests:** Use fewer questions across all topics
- **Unit assessments:** Focus on 1-2 specific topics with more questions
- **Practice tests:** Mix of all topics with moderate question count
- **Challenge assessments:** Include upper-grade topics

## 🎓 Educational Notes

### Alignment with Standards
Questions are designed to align with:
- Common Core State Standards
- State mathematics standards  
- PERT test specifications (for PERT mode)

### Assessment Types
- **Formative:** Quick 5-10 question checks
- **Summative:** Comprehensive 20-30 question tests
- **Diagnostic:** Broad topic coverage to identify gaps
- **Practice:** Preparation for standardized tests

## 📞 Support

### If You Need Help
This system is designed to be self-service, but if you encounter persistent issues:

1. **Check this guide:** Most questions are answered here
2. **Try different settings:** Reduce questions or change topics
3. **Browser issues:** Try a different browser or clear cache
4. **Contact administrator:** If all else fails, contact the person who set up this system

### System Requirements
- **Browser:** Any modern web browser
- **Internet:** Required for online version
- **PDF viewer:** To preview tests (built into most browsers)
- **Printer:** For physical test distribution

---

## Quick Start Checklist ✅

1. ✅ Enter student name
2. ✅ Select grade level  
3. ✅ Choose number of questions (10-20 recommended)
4. ✅ Select 2-4 math topics
5. ✅ Click "Preview Test" to review
6. ✅ Click "Download Test" to save PDF
7. ✅ Print and distribute to students

**You're ready to create professional math assessments!** 🎉