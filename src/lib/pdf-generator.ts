import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { FormattedQuestion, MathDomain } from './types';

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
    
    console.log('PDF Generator: Embedding fonts');
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

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
        font: boldFont
      });

      // Draw question text line by line
      lines.forEach((line, lineIndex) => {
        currentPage.drawText(line, {
          x: margins.left + 25,
          y: yOffset - (lineIndex * 20),
          size: 12,
          font: font
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

          // Draw choice text line by line
          choiceLines.forEach((line, lineIndex) => {
            currentPage.drawText(line, {
              x: margins.left + 50,
              y: yOffset - (lineIndex * 20),
              size: 12,
              font: font
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
        font: boldFont
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

      // Draw answer text line by line
      answerLines.forEach((line, lineIndex) => {
        // Check if we need a new page
        if (yOffset - (lineIndex * 20) < margins.bottom + 50) {
          currentPage = pdfDoc.addPage(pageSize);
          yOffset = height - margins.top;
        }

        currentPage.drawText(line, {
          x: margins.left + 25,
          y: yOffset - (lineIndex * 20),
          size: 12,
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
