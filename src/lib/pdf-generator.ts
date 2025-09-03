import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Question } from './types';

export async function generateTestPDF(questions: Question[]): Promise<Uint8Array> {
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

    // Create first page
    let currentPage = pdfDoc.addPage(pageSize);
    const { width, height } = currentPage.getSize();
    let yOffset = height - margins.top;

    // Draw title
    currentPage.drawText('Fast Practice Test', {
      x: width / 2 - 100,
      y: yOffset,
      size: 24,
      font: boldFont
    });
    yOffset -= spacing.afterTitle;

    // Draw questions
    questions.forEach((q, index) => {
      // Calculate total space needed for this question
      const questionWidth = width - margins.left - margins.right - 25;
      const words = q.questionText.split(' ');
      let lines = [''];
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
      q.choices.forEach(choice => {
        const choiceWidth = width - margins.left - margins.right - 50;
        const choiceWords = choice.split(' ');
        let choiceLines = [''];
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
        totalChoiceHeight += choiceLines.length * 20 + spacing.betweenChoices;
      });

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
      q.choices.forEach((choice, choiceIndex) => {
        // Draw choice letter
        currentPage.drawText(`${String.fromCharCode(65 + choiceIndex)})`, {
          x: margins.left + 25,
          y: yOffset,
          size: 12,
          font: font
        });

        // Calculate lines needed for choice text
        const choiceWidth = width - margins.left - margins.right - 50;
        const choiceWords = choice.split(' ');
        let choiceLines = [''];
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
      });

      yOffset -= spacing.betweenQuestions;
    });

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
      let answerLines = [''];
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
  } catch (error: any) {
    console.error('PDF Generator Error:', error);
    throw new Error(`Failed to generate PDF: ${error?.message || 'Unknown error'}`);
  }
}
