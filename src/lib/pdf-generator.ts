import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { FormattedQuestion, MathDomain } from './types';

// Note: math-formatting helpers removed because PDF output writes text verbatim and these helpers
// were unused; removing them clears linter warnings.

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
    
    // Try to use DejaVu Sans for excellent Unicode support including mathematical symbols
    try {
      // Path to the DejaVu Sans TTF fonts (excellent Unicode support in pdf-lib)
      const regularFontPath = path.resolve(process.cwd(), 'public/fonts/DejaVuSans.ttf');
      const boldFontPath = path.resolve(process.cwd(), 'public/fonts/DejaVuSans-Bold.ttf');
      
      // Load the fonts
      const dejaVuSansRegular = await fs.readFile(regularFontPath);
      const dejaVuSansBold = await fs.readFile(boldFontPath);
      
      // Embed the fonts - TTF fonts handle Unicode better in pdf-lib
      font = await pdfDoc.embedFont(dejaVuSansRegular);
      boldFont = await pdfDoc.embedFont(dejaVuSansBold);
      console.log('PDF Generator: Successfully embedded DejaVu Sans TTF fonts with full Unicode support');
  } catch (error: unknown) {
      // Fallback to standard fonts if DejaVu can't be loaded
      const message = error instanceof Error ? error.message : String(error);
      console.log('PDF Generator: Falling back to standard fonts:', message);
      font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      console.log('PDF Generator: Using standard fonts (Unicode superscripts will be converted to regular notation)');
    }

    // Constants for layout
    const pageSize: [number, number] = [612, 792]; // Standard US Letter size
    const margins = {
      top: 50,    // Reduced from 72 (1 inch) to 50
      bottom: 50, // Reduced from 72 to 50
      left: 50,   // Reduced from 72 to 50
      right: 50   // Reduced from 72 to 50
    };
    const spacing = {
      afterTitle: 30,     // Reduced from 35
      afterQuestion: 12,  // Reduced from 15
      betweenChoices: 8,  // Reduced from 12
      betweenQuestions: 18, // Reduced from 25
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

    // Move topics to a separate page, one per line
    if (domains && domains.length > 0) {
      // Add a new page for topics (no footer on this page)
      currentPage = pdfDoc.addPage(pageSize);
      yOffset = height - margins.top;
      currentPage.drawText('Topics Covered in This Assessment:', {
        x: margins.left + 20,
        y: yOffset,
        size: 18,
        font: boldFont,
        color: rgb(0.1, 0.3, 0.7)
      });
      yOffset -= 40;
      const topicWidth = width - margins.left - margins.right - 60;
      domains.forEach((domain) => {
        // Split domain into lines that fit the page width
        const words = domain.split(' ');
        const lines = [''];
        let currentLine = 0;
        words.forEach(word => {
          const testLine = lines[currentLine] + (lines[currentLine] ? ' ' : '') + word;
          const testWidth = font.widthOfTextAtSize(testLine, 14);
          if (testWidth <= topicWidth) {
            lines[currentLine] = testLine;
          } else {
            currentLine++;
            lines[currentLine] = word;
          }
        });
        lines.forEach((line) => {
          if (yOffset < margins.bottom + 30) {
            currentPage = pdfDoc.addPage(pageSize);
            yOffset = height - margins.top;
          }
          currentPage.drawText(line, {
            x: margins.left + 40,
            y: yOffset,
            size: 14,
            font: font,
            color: rgb(0.2, 0.2, 0.2)
          });
          yOffset -= 20;
        });
        yOffset -= 8; // extra space between topics
      });
      // Do not draw footer on topics page
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
        const testWidth = font.widthOfTextAtSize(testLine, 10.5); // Updated to match new font size
        
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
            const testWidth = font.widthOfTextAtSize(testLine, 10.5); // Updated to match new font size
            if (testWidth <= choiceWidth) {
              choiceLines[currentChoiceLine] = testLine;
            } else {
              currentChoiceLine++;
              choiceLines[currentChoiceLine] = word;
            }
          }
          totalChoiceHeight += choiceLines.length * 14 + spacing.betweenChoices; // Updated line height
        } else if (choice.type === 'image') {
          // Estimate image height for layout (fixed value for now)
          totalChoiceHeight += 60 + spacing.betweenChoices;
        }
      }

      // Total space needed for this question
      const questionHeight = lines.length * 14 + spacing.afterQuestion; // Updated line height
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
        size: 10.5, // Reduced from 11 to 10.5
        font: font
      });

      // Draw question text line by line without formatting
      lines.forEach((line, lineIndex) => {
        // Use the line exactly as is
        currentPage.drawText(line, {
          x: margins.left + 25,
          y: yOffset - (lineIndex * 14), // Reduced line height from 16 to 14
          size: 10.5,                     // Reduced font size from 11 to 10.5
          font: font,                     // Regular font for all questions
          color: rgb(0, 0, 0)            // All text in black
        });
      });
      
      // Adjust yOffset based on number of lines
      yOffset -= (lines.length * 14 + spacing.afterQuestion);

      // Draw choices
      for (const [choiceIndex, choice] of q.choices.entries()) {
        // Draw choice letter
        currentPage.drawText(`${String.fromCharCode(65 + choiceIndex)})`, {
          x: margins.left + 25,
          y: yOffset,
          size: 10.5, // Reduced from 11 to 10.5
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
            const testWidth = font.widthOfTextAtSize(testLine, 10.5); // Updated to match new font size
            
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
              y: yOffset - (lineIndex * 14), // Reduced line height from 16 to 14
              size: 10.5,                     // Reduced font size from 11 to 10.5
              font: font,                     // Regular font for all choices
              color: rgb(0, 0, 0)            // All text in black
            });
          });
          yOffset -= (choiceLines.length * 14 + spacing.betweenChoices);
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
