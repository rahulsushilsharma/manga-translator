import Tesseract, { RecognizeResult } from 'tesseract.js';
import { Presets, SingleBar } from 'cli-progress'

const bar1 = new SingleBar({}, Presets.shades_classic);

// start the progress bar with a total value of 200 and start value of 0

// update the current value in your application..


// stop the progress bar

async function performOCR(imagePath: string): Promise<RecognizeResult> {
  bar1.start(100, 0);

  const result = await Tesseract.recognize(imagePath, 'chi_sim', {
    logger: m => bar1.update(m.progress * 100), // Optional: For logging progress

  });

  return result;
}

// Call the OCR function
const imagePath = './test2.jfif';
performOCR(imagePath)
  .then(text => {
    bar1.stop();

    console.log('OCR Result:', JSON.stringify(text));

  })
  .catch(error => {
    console.error('Error:', error);
  });
