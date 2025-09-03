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
    currentPage.drawText('Math Test', {
      x: width / 2 - 50,
      y: yOffset,
      size: 24,
      font: boldFont
    });
    yOffset -= spacing.afterTitle;

    // Draw questions
    questions.forEach((q, index) => {
      // Check if we need a new page
      if (yOffset < margins.bottom + 100) {
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

      // Draw question text
      currentPage.drawText(q.questionText, {
        x: margins.left + 25,
        y: yOffset,
        size: 12,
        font: font,
        maxWidth: width - margins.left - margins.right - 25
      });
      yOffset -= spacing.afterQuestion;

      // Draw choices
      q.choices.forEach((choice, choiceIndex) => {
        // Check if we need a new page for choices
        if (yOffset < margins.bottom + 50) {
          currentPage = pdfDoc.addPage(pageSize);
          yOffset = height - margins.top;
        }

        // Draw choice letter
        currentPage.drawText(`${String.fromCharCode(65 + choiceIndex)})`, {
          x: margins.left + 25,
          y: yOffset,
          size: 12,
          font: font
        });

        // Draw choice text
        currentPage.drawText(choice, {
          x: margins.left + 50,
          y: yOffset,
          size: 12,
          font: font,
          maxWidth: width - margins.left - margins.right - 50
        });

        yOffset -= spacing.betweenChoices;
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
      currentPage.drawText(answerText, {
        x: margins.left + 25,
        y: yOffset,
        size: 12,
        font: font,
        maxWidth: width - margins.left - margins.right - 25
      });

      yOffset -= spacing.afterQuestion;
    });

    return await pdfDoc.save();
  } catch (error: any) {
    console.error('PDF Generator Error:', error);
    throw new Error(`Failed to generate PDF: ${error?.message || 'Unknown error'}`);
  }
}
