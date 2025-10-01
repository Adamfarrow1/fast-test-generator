import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { FormattedQuestion, MathDomain } from './types';
import { fileURLToPath } from 'url';

// Flag to track if we're using Unicode-capable fonts
let usingUnicodeFonts = false;

/**
 * Formats mathematical expressions to look more like proper math notation
 * This adds proper spacing around operators and enhances readability
 * Now uses Unicode characters thanks to fontkit and Noto Sans font
 */
const formatMathExpression = (text: string): string => {
  // Skip formatting if the text is very short (likely not a math expression)
  if (text.length <= 3) return text;
  
  // With Unicode fonts, we can use proper mathematical symbols
  let formattedText = text;
  
  if (usingUnicodeFonts) {
    // Use Unicode symbols for mathematical operations
    formattedText = text
      // Format exponents with superscripts
      .replace(/\^2(?!\d)/g, '²')      // Replace ^2 with ²
      .replace(/\^3(?!\d)/g, '³')      // Replace ^3 with ³
      .replace(/\^4(?!\d)/g, '⁴')      // Replace ^4 with ⁴
      .replace(/\^5(?!\d)/g, '⁵')      // Replace ^5 with ⁵
      .replace(/\^6(?!\d)/g, '⁶')      // Replace ^6 with ⁶
      .replace(/\^7(?!\d)/g, '⁷')      // Replace ^7 with ⁷
      .replace(/\^8(?!\d)/g, '⁸')      // Replace ^8 with ⁸
      .replace(/\^9(?!\d)/g, '⁹')      // Replace ^9 with ⁹
      .replace(/\^0/g, '⁰')            // Replace ^0 with ⁰
      
      // Format mathematical symbols
      .replace(/\*/g, '×')             // Replace * with ×
      .replace(/ \/ /g, ' ÷ ')         // Replace / with ÷
      .replace(/-/g, '−')              // Replace - with − (Unicode minus)
      .replace(/sqrt\(/g, '√(')        // Replace sqrt( with √(
      .replace(/1\/4/g, '¼')           // Replace 1/4 with ¼
      .replace(/1\/2/g, '½')           // Replace 1/2 with ½
      .replace(/3\/4/g, '¾')           // Replace 3/4 with ¾
      .replace(/<=?/g, '≤')            // Replace <= with ≤
      .replace(/>=?/g, '≥')            // Replace >= with ≥
      .replace(/!=|<>/g, '≠');         // Replace != or <> with ≠
  } else {
    // Fallback to ASCII equivalents if we're not using Unicode fonts
    formattedText = text
      .replace(/[\u2212]/g, '-')       // Replace Unicode minus (U+2212) with ASCII hyphen
      .replace(/[\u00d7]/g, 'x')       // Replace multiplication × with x 
      .replace(/[\u00f7]/g, '/')       // Replace division ÷ with /
      .replace(/[\u221a]/g, 'sqrt')    // Replace square root √ with 'sqrt'
      .replace(/[\u00b2]/g, '^2')      // Replace superscript ² with ^2
      .replace(/[\u00b3]/g, '^3')      // Replace superscript ³ with ^3
      .replace(/[\u2074\u2075\u2076\u2077\u2078\u2079\u2070]/g, m => {
        // Convert Unicode superscripts to ASCII
        const map: {[key: string]: string} = {
          '\u2074': '^4', '\u2075': '^5', '\u2076': '^6', 
          '\u2077': '^7', '\u2078': '^8', '\u2079': '^9', '\u2070': '^0'
        };
        return map[m] || m;
      });
  }
  
  // Apply common formatting regardless of font type
  formattedText = formattedText
    // Parenthesized expressions formatting
    .replace(/\(([^()]+)\)/g, (match: string) => {
      // Keep parentheses as is but format contents
      return '(' + match.slice(1, -1).trim() + ')';
    })    // Format division with spacing
    .replace(/\s*\/\s*/g, ' / ')
    
    // Format multiplication using asterisk - more compatible than × 
    .replace(/\*/g, ' * ')
    .replace(/([0-9a-zA-Z])\s*\*\s*([0-9a-zA-Z])/g, '$1 * $2')
    
    // Format subtraction with proper spacing using standard ASCII minus/hyphen
    .replace(/(?<=[0-9a-zA-Z\)])\s*-\s*(?=[0-9a-zA-Z\(])/g, ' - ')
    
    // Format addition with proper spacing
    .replace(/(?<=[0-9a-zA-Z\)])\s*\+\s*(?=[0-9a-zA-Z\(])/g, ' + ')
    
    // Handle exponents better
    .replace(/\^([0-9]+)/g, '^$1')  // Keep exponents clear
    
    // Format fractions indicated by division
    .replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '($1) / ($2)')
    .replace(/\(([^()]+)\)\s*\/\s*([0-9a-zA-Z]+)/g, '($1) / $2')
    .replace(/([0-9a-zA-Z]+)\s*\/\s*\(([^()]+)\)/g, '$1 / ($2)')
    .replace(/([0-9a-zA-Z]+)\s*\/\s*([0-9a-zA-Z]+)/g, '$1 / $2')
    
    // Clean up extra spaces and ensure nice formatting
    .replace(/\(\s+/g, '(')      // No space after opening parenthesis
    .replace(/\s+\)/g, ')')      // No space before closing parenthesis
    .replace(/\s+/g, ' ')        // Reduce multiple spaces to single space
    .replace(/\( /g, '(')        // No space after opening parenthesis
    .replace(/ \)/g, ')')        // No space before closing parenthesis
    .replace(/\(\)/g, '( )')     // Empty parentheses should have a space
    .replace(/\s*=\s*/g, ' = '); // Equal signs should have spaces
    
  return formattedText;
};

/**
 * Helper function to detect if text is likely a mathematical expression
 * Support both ASCII and Unicode math patterns
 */
const isMathExpression = (text: string): boolean => {
  // Normalize text to consistent format for pattern matching
  let normalizedText = text;
  
  // Convert Unicode math symbols to ASCII equivalents for pattern matching
  normalizedText = normalizedText
    .replace(/[\u2212]/g, '-')      // Replace Unicode minus with ASCII hyphen
    .replace(/[\u00d7]/g, '*')      // Replace multiplication × with *
    .replace(/[\u00f7]/g, '/')      // Replace division ÷ with /
    .replace(/[\u221a]/g, 'sqrt')   // Replace square root √ with 'sqrt'
    .replace(/[\u00b2]/g, '^2')     // Replace superscript ² with ^2
    .replace(/[\u00b3]/g, '^3')     // Replace superscript ³ with ^3
    .replace(/[\u2074\u2075\u2076\u2077\u2078\u2079\u2070]/g, m => {
      // Convert Unicode superscripts to ASCII
      const map: {[key: string]: string} = {
        '\u2074': '^4', '\u2075': '^5', '\u2076': '^6', 
        '\u2077': '^7', '\u2078': '^8', '\u2079': '^9', '\u2070': '^0'
      };
      return map[m] || m;
    });
    
  // Check if the text contains common math symbols or patterns
  return /[\+\-\*\/\^\=\(\)\[\]\{\}]|\bdiv\b|\bsqrt\b|\blog\b|\bsin\b|\bcos\b|\btan\b/i.test(normalizedText) &&
         /[0-9a-zA-Z]{1,2}[\^\+\-\*\/\=]|[\+\-\*\/\=][0-9a-zA-Z]|\([^\(\)]+\)/i.test(normalizedText);
};

// Function that now simply returns the text as is, without formatting
const formatWithSuperscripts = (text: string): string => {
  // Return the text exactly as provided, no formatting
  return text;
};

export async function generateTestPDF(
  questions: FormattedQuestion[], 
  studentName: string, 
  domains: MathDomain[]
): Promise<Uint8Array> {
  try {
    if (!questions || questions.length === 0) {
      throw new Error('No questions provided for PDF generation');
    }

    console.log('PDF Generator: Creating new PDF document');
    const pdfDoc = await PDFDocument.create();
    
    // Register fontkit with pdf-lib to handle Unicode fonts
    pdfDoc.registerFontkit(fontkit);
    
    console.log('PDF Generator: Embedding fonts');
    
    // Load font files
    let font, boldFont;
    
    // Try to use Noto Sans for better Unicode support
    try {
      // Path to the Noto Sans font files - prefer woff2 for smaller size but try woff as fallback
      const baseFontDir = path.resolve(process.cwd(), 'node_modules/@fontsource/noto-sans/files');
      
      // Try to load the woff2 format first (better compression)
      let notoSansRegularFont, notoSansBoldFont;
      try {
        // Try woff2 format first
        const regularWoff2Path = path.join(baseFontDir, 'noto-sans-latin-400-normal.woff2');
        const boldWoff2Path = path.join(baseFontDir, 'noto-sans-latin-700-normal.woff2');
        
        notoSansRegularFont = await fs.readFile(regularWoff2Path);
        notoSansBoldFont = await fs.readFile(boldWoff2Path);
        console.log('PDF Generator: Using woff2 format fonts');
      } catch (woff2Error) {
        // Fallback to woff format
        const regularWoffPath = path.join(baseFontDir, 'noto-sans-latin-400-normal.woff');
        const boldWoffPath = path.join(baseFontDir, 'noto-sans-latin-700-normal.woff');
        
        notoSansRegularFont = await fs.readFile(regularWoffPath);
        notoSansBoldFont = await fs.readFile(boldWoffPath);
        console.log('PDF Generator: Using woff format fonts');
      }
      
      // Embed the fonts with Unicode support
      font = await pdfDoc.embedFont(notoSansRegularFont);
      boldFont = await pdfDoc.embedFont(notoSansBoldFont);
      
      // Set flag to indicate we're using Unicode-capable fonts
      usingUnicodeFonts = true;
      console.log('PDF Generator: Successfully embedded Noto Sans fonts with Unicode support');
    } catch (error: any) {
      // Fallback to standard fonts if Noto Sans can't be loaded
      console.log('PDF Generator: Falling back to standard fonts:', error?.message || 'Unknown error');
      font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      usingUnicodeFonts = false;
      console.log('PDF Generator: Using standard fonts (Unicode superscripts will be converted to regular notation)');
    }

    // Constants for layout
    const pageSize: [number, number] = [612, 792]; // Standard US Letter size
    const margins = {
      top: 72,    // 1 inch
      bottom: 72,
      left: 72,
      right: 72
    };
    const spacing = {
      afterTitle: 50,
      afterQuestion: 30,
      betweenChoices: 25,
      betweenQuestions: 40,
      choiceIndent: 20
    };

    // Create front page
    let currentPage = pdfDoc.addPage(pageSize);
    const { width, height } = currentPage.getSize();
    let yOffset = height - margins.top - 30;

    // Draw decorative header line (moved down to avoid overlap)
    currentPage.drawLine({
      start: { x: margins.left, y: yOffset - 10 },
      end: { x: width - margins.right, y: yOffset - 10 },
      thickness: 3,
      color: rgb(0.2, 0.4, 0.8)
    });

    // Draw main title with enhanced styling
    const titleText = 'Math Assessment Test';
    const titleWidth = boldFont.widthOfTextAtSize(titleText, 32);
    currentPage.drawText(titleText, {
      x: (width - titleWidth) / 2,
      y: yOffset - 40,
      size: 32,
      font: boldFont,
      color: rgb(0.1, 0.3, 0.7)
    });
    yOffset -= 100;

    // Draw subtitle
    const subtitleText = 'Practice Makes Perfect';
    const subtitleWidth = font.widthOfTextAtSize(subtitleText, 14);
    currentPage.drawText(subtitleText, {
      x: (width - subtitleWidth) / 2,
      y: yOffset,
      size: 14,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    yOffset -= 80;

    // Draw student info box
    const boxY = yOffset;
    const boxHeight = studentName ? 120 : 80;
    
    // Draw background box with rounded appearance
    currentPage.drawRectangle({
      x: margins.left + 20,
      y: boxY - boxHeight + 10,
      width: width - margins.left - margins.right - 40,
      height: boxHeight,
      borderColor: rgb(0.8, 0.8, 0.9),
      borderWidth: 2,
      color: rgb(0.97, 0.98, 1.0)
    });

    yOffset -= 25;

    // Draw student name section
    if (studentName) {
      currentPage.drawText('Student Name:', {
        x: margins.left + 40,
        y: yOffset,
        size: 16,
        font: boldFont,
        color: rgb(0.2, 0.2, 0.2)
      });
      yOffset -= 35;
      
      currentPage.drawText(studentName, {
        x: margins.left + 60,
        y: yOffset,
        size: 18,
        font: boldFont,
        color: rgb(0.1, 0.3, 0.7)
      });
      yOffset -= 45;
    }

    // Draw date and score on the same row
    const currentDate = new Date().toLocaleDateString();
    currentPage.drawText('Date:', {
      x: margins.left + 40,
      y: yOffset,
      size: 14,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2)
    });
    currentPage.drawText(currentDate, {
      x: margins.left + 90,
      y: yOffset,
      size: 14,
      font: font,
      color: rgb(0.3, 0.3, 0.3)
    });

    // Add score section on the right side
    const scoreText = `Score: _____ / ${questions.length}`;
    const scoreX = width - margins.right - boldFont.widthOfTextAtSize(scoreText, 14) - 40;
    currentPage.drawText('Score:', {
      x: scoreX,
      y: yOffset,
      size: 14,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2)
    });
    currentPage.drawText(`_____ / ${questions.length}`, {
      x: scoreX + boldFont.widthOfTextAtSize('Score: ', 14),
      y: yOffset,
      size: 14,
      font: font,
      color: rgb(0.3, 0.3, 0.3)
    });
    yOffset -= 80;

    // Draw selected subjects section
    if (domains && domains.length > 0) {
      currentPage.drawText('Topics Covered in This Assessment:', {
        x: margins.left + 20,
        y: yOffset,
        size: 18,
        font: boldFont,
        color: rgb(0.1, 0.3, 0.7)
      });
      yOffset -= 40;
      
      // Create a nice grid layout for topics
      const topicsPerRow = Math.min(2, domains.length);
      const columnWidth = (width - margins.left - margins.right - 60) / topicsPerRow;
      
      domains.forEach((domain, index) => {
        const row = Math.floor(index / topicsPerRow);
        const col = index % topicsPerRow;
        const x = margins.left + 40 + (col * columnWidth);
        const y = yOffset - (row * 35);
        
        // Draw bullet point
        currentPage.drawCircle({
          x: x,
          y: y + 5,
          size: 3,
          color: rgb(0.2, 0.4, 0.8)
        });
        
        // Draw topic name
        currentPage.drawText(domain, {
          x: x + 15,
          y: y,
          size: 13,
          font: font,
          color: rgb(0.2, 0.2, 0.2)
        });
      });
      
      const totalRows = Math.ceil(domains.length / topicsPerRow);
      yOffset -= (totalRows * 35) + 60; // Added more space after topics
    }

    // Move to bottom of page for footer elements
    const footerY = margins.bottom + 60;

    // Draw footer decoration
    currentPage.drawLine({
      start: { x: margins.left, y: footerY },
      end: { x: width - margins.right, y: footerY },
      thickness: 2,
      color: rgb(0.2, 0.4, 0.8)
    });

    const footerText = 'Good Luck!';
    const footerWidth = boldFont.widthOfTextAtSize(footerText, 16);
    currentPage.drawText(footerText, {
      x: (width - footerWidth) / 2,
      y: footerY - 30,
      size: 16,
      font: boldFont,
      color: rgb(0.1, 0.3, 0.7)
    });

    // Create first question page
    currentPage = pdfDoc.addPage(pageSize);
    yOffset = height - margins.top;    // Draw questions page title
    currentPage.drawText('Questions', {
      x: width / 2 - 50,
      y: yOffset,
      size: 20,
      font: boldFont
    });
    yOffset -= spacing.afterTitle;

    // Draw questions
  for (const [index, q] of questions.entries()) {
      // Calculate total space needed for this question
      const questionWidth = width - margins.left - margins.right - 25;
      const words = q.questionText.split(' ');
      const lines = [''];
      let currentLine = 0;
      
      words.forEach(word => {
        const testLine = lines[currentLine] + (lines[currentLine] ? ' ' : '') + word;
        const testWidth = font.widthOfTextAtSize(testLine, 12);
        
        if (testWidth <= questionWidth) {
          lines[currentLine] = testLine;
        } else {
          currentLine++;
          lines[currentLine] = word;
        }
      });

      // Calculate space needed for all choices
      let totalChoiceHeight = 0;
      for (const choice of q.choices) {
        if (choice.type === 'text') {
          const choiceWidth = width - margins.left - margins.right - 50;
          const choiceWords = choice.value.split(' ');
          const choiceLines = [''];
          let currentChoiceLine = 0;
          for (const word of choiceWords) {
            const testLine = choiceLines[currentChoiceLine] + (choiceLines[currentChoiceLine] ? ' ' : '') + word;
            const testWidth = font.widthOfTextAtSize(testLine, 12);
            if (testWidth <= choiceWidth) {
              choiceLines[currentChoiceLine] = testLine;
            } else {
              currentChoiceLine++;
              choiceLines[currentChoiceLine] = word;
            }
          }
          totalChoiceHeight += choiceLines.length * 20 + spacing.betweenChoices;
        } else if (choice.type === 'image') {
          // Estimate image height for layout (fixed value for now)
          totalChoiceHeight += 60 + spacing.betweenChoices;
        }
      }

      // Total space needed for this question
      const questionHeight = lines.length * 20 + spacing.afterQuestion;
      const totalSpaceNeeded = questionHeight + totalChoiceHeight + spacing.betweenQuestions;

      // Check if we need a new page for the entire question
      if (yOffset - totalSpaceNeeded < margins.bottom) {
        currentPage = pdfDoc.addPage(pageSize);
        yOffset = height - margins.top;
      }

      // Draw question number
      currentPage.drawText(`${index + 1}.`, {
        x: margins.left,
        y: yOffset,
        size: 12,
        font: font
      });

      // Draw question text line by line without formatting
      lines.forEach((line, lineIndex) => {
        // Use the line exactly as is
        currentPage.drawText(line, {
          x: margins.left + 25,
          y: yOffset - (lineIndex * 20),
          size: 12,                      // Standard size for all text
          font: font,                    // Regular font for all questions
          color: rgb(0, 0, 0)           // All text in black
        });
      });
      
      // Adjust yOffset based on number of lines
      yOffset -= (lines.length * 20 + spacing.afterQuestion);

      // Draw choices
      for (const [choiceIndex, choice] of q.choices.entries()) {
        // Draw choice letter
        currentPage.drawText(`${String.fromCharCode(65 + choiceIndex)})`, {
          x: margins.left + 25,
          y: yOffset,
          size: 12,
          font: font
        });

        if (choice.type === 'image') {
          // Load SVG, convert to PNG, embed in PDF
          const imagePath = path.join(process.cwd(), 'public', path.basename(choice.src));
          const svgBuffer = await fs.readFile(imagePath);
          const pngBuffer = await sharp(svgBuffer).png().toBuffer();
          const pngImage = await pdfDoc.embedPng(pngBuffer);
          const imgDims = pngImage.scale(0.4); // scale for PDF
          currentPage.drawImage(pngImage, {
            x: margins.left + 50,
            y: yOffset - imgDims.height / 2,
            width: imgDims.width,
            height: imgDims.height,
          });
          yOffset -= (imgDims.height + spacing.betweenChoices);
        } else if (choice.type === 'text') {
          // Calculate lines needed for choice text
          const choiceWidth = width - margins.left - margins.right - 50;
          const choiceWords = choice.value.split(' ');
          const choiceLines = [''];
          let currentChoiceLine = 0;
          
          choiceWords.forEach(word => {
            const testLine = choiceLines[currentChoiceLine] + (choiceLines[currentChoiceLine] ? ' ' : '') + word;
            const testWidth = font.widthOfTextAtSize(testLine, 12);
            
            if (testWidth <= choiceWidth) {
              choiceLines[currentChoiceLine] = testLine;
            } else {
              currentChoiceLine++;
              choiceLines[currentChoiceLine] = word;
            }
          });

          // Draw choice text line by line exactly as provided without any formatting
          choiceLines.forEach((line, lineIndex) => {
            // Use the line exactly as is without any formatting
            currentPage.drawText(line, {
              x: margins.left + 50,
              y: yOffset - (lineIndex * 20),
              size: 12,                              // Standard size for all text
              font: font,                            // Regular font for all choices
              color: rgb(0, 0, 0)                    // All text in black
            });
          });
          yOffset -= (choiceLines.length * 20 + spacing.betweenChoices);
        }
      }

      yOffset -= spacing.betweenQuestions;
    };

    // Create answer key
    currentPage = pdfDoc.addPage(pageSize);
    yOffset = height - margins.top;

    // Draw answer key title
    currentPage.drawText('Answer Key', {
      x: width / 2 - 50,
      y: yOffset,
      size: 24,
      font: boldFont
    });
    yOffset -= spacing.afterTitle;

    // Draw answers
    questions.forEach((q, index) => {
      if (yOffset < margins.bottom + 50) {
        currentPage = pdfDoc.addPage(pageSize);
        yOffset = height - margins.top;
      }

      // Draw answer number
      currentPage.drawText(`${index + 1}.`, {
        x: margins.left,
        y: yOffset,
        size: 12,
        font: font
      });

      // Draw answer and solution
      const answerText = `${q.correctAnswer}${q.solution ? ' - ' + q.solution : ''}`;
      const answerWidth = width - margins.left - margins.right - 25;
      const answerWords = answerText.split(' ');
      const answerLines = [''];
      let currentAnswerLine = 0;
      
      answerWords.forEach(word => {
        const testLine = answerLines[currentAnswerLine] + (answerLines[currentAnswerLine] ? ' ' : '') + word;
        const testWidth = font.widthOfTextAtSize(testLine, 12);
        
        if (testWidth <= answerWidth) {
          answerLines[currentAnswerLine] = testLine;
        } else {
          currentAnswerLine++;
          answerLines[currentAnswerLine] = word;
        }
      });

      // Draw answer text line by line without formatting
      answerLines.forEach((line, lineIndex) => {
        // Check if we need a new page
        if (yOffset - (lineIndex * 20) < margins.bottom + 50) {
          currentPage = pdfDoc.addPage(pageSize);
          yOffset = height - margins.top;
        }
        
        // Use the line exactly as is without any formatting
        currentPage.drawText(line, {
          x: margins.left + 25,
          y: yOffset - (lineIndex * 20),
          size: 12,                      // Standard size for all text
          color: rgb(0, 0, 0),           // All text in black
          font: font
        });
      });

      yOffset -= (answerLines.length * 20 + spacing.afterQuestion);
    });

    return await pdfDoc.save();
  } catch (error: unknown) {
    console.error('PDF Generator Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to generate PDF: ${errorMessage}`);
  }
}
