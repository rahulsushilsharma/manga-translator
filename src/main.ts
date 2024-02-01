// // // import Tesseract, { RecognizeResult } from "tesseract.js";
// // // import { Presets, SingleBar } from "cli-progress";
import gm from "gm";
// import sharp from "sharp";
// import { createWorker } from "tesseract.js";

// // import { writeFile } from "fs/promises";
// // import sharp from "sharp";
// // import { createWorker } from "tesseract.js";

// // // const bar1 = new SingleBar({}, Presets.shades_classic);

// // // // start the progress bar with a total value of 200 and start value of 0

// // // // update the current value in your application..

// // // // stop the progress bar

// // // async function performOCR(imagePath: string): Promise<RecognizeResult> {
// // //   bar1.start(100, 0);

// // //   const result = await Tesseract.recognize(imagePath, "en", {
// // //     logger: (m) => bar1.update(m.progress * 100), // Optional: For logging progress
// // //   });

// // //   return result;
// // // }

// // // // Call the OCR function
// // // const imagePath = "../sample/test.jpg";
// // // performOCR(imagePath)
// // //   .then((text) => {
// // //     bar1.stop();

// // //     console.log("OCR Result:", JSON.stringify(text));
// // //   })
// // //   .catch((error) => {
// // //     console.error("Error:", error);
// // //   });
// // // const image = await sharp("./sample/test4.jpg")
// // //   .resize({ width: 1960 * 2 })
// // //   .greyscale()
// // //   .sharpen({ sigma: 2 })
// // //   .toFile("output3.png");
// // // const image_ = await sharp("./sample/test3.jpg").resize({width :1960*1.5}).sharpen().toBuffer()
// // async function highlightText(inputImagePath, outputImagePath) {
// //     try {
// //       // Extract text using Tesseract
// //       const extractedText = await extractText(inputImagePath);

// //       // Read the original image using Sharp
// //       const image = sharp(inputImagePath);

// //       // Get the image metadata (width, height, etc.)
// //       const metadata = await image.metadata();

// //       // Create a transparent image with the same dimensions
// //       const transparentImage = sharp({
// //         create: {
// //           width: metadata.width,
// //           height: metadata.height,
// //           channels: 4, // RGBA
// //           background: { r: 0, g: 0, b: 0, alpha: 0 },
// //         },
// //       });

// //       // Overlay the extracted text on the transparent image
// //       transparentImage.overlayWith([
// //         {
// //           input: {
// //             create: {
// //               width: metadata.width,
// //               height: metadata.height,
// //               channels: 4,
// //               background: { r: 255, g: 255, b: 255, alpha: 0 }, // White background
// //             },
// //           },
// //           blend: 'dest-over', // Blend mode to overlay the text
// //         },
// //         {
// //           input: Buffer.from(extractedText),
// //           top: 0,
// //           left: 0,
// //           tile: true, // Repeat the text if it's smaller than the image
// //         },
// //       ]);

// //       // Composite the original image and the transparent image
// //       const resultImage = image.composite([
// //         {
// //           input: await transparentImage.toBuffer(),
// //         },
// //       ]);

// //       // Save the result to the specified output path
// //       await resultImage.toFile(outputImagePath);
// //       console.log('Text highlighted successfully.');

// //     } catch (error) {
// //       console.error('Error highlighting text:', error);
// //     }
// //   }

// // const worker = await createWorker("eng");
// // const ret = await worker.recognize('output3.png');

// // // for(const val of ret.data.paragraphs  ){
// // //   console.log(val);

// // // }

// // console.log(ret.data.text)
// // // writeFile('op.txt',JSON.stringify(ret.data.text))

// // // await worker.terminate();

// sharp("./sample/test3.jpg")
//   .threshold()
//   .toFormat("jpeg")
//   .toFile("output55.jpg", (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Image processed successfully");
//   });

//   const worker = await createWorker("eng");
// const ret = await worker.recognize('output55.jpg');

// // for(const val of ret.data.paragraphs  ){
// //   console.log(val);

// // }

// console.log(ret.data.text)

import fs from "fs";
import sharp from "sharp";
import Tesseract from "tesseract.js";

const inputImagePath = "path/to/your/input/image.jpg";

// Use Sharp to resize the image (adjust dimensions as needed)
// sharp(inputImagePath)
//   .resize(1200)
//   .toBuffer()
//   .then((resizedImageBuffer) => {
//     // Save the resized image
//     // fs.writeFileSync('path/to/your/output/resized_image.jpg', resizedImageBuffer);

//     // Use Tesseract to perform OCR on the resized image
//     Tesseract.recognize(
//       'sample/test3.jpg',
//       'eng',
//       {
//         logger: (info) => console.log(info),
//       }
//     ).then(({ data: { lines } }) => {
//       // Iterate through each line of text and generate cropped images
//       lines.forEach((line, index) => {
//         const { x0, y0, x1, y1 } = line.bbox;

//         console.log( x0, y0, x1, y1 )

//         // Use Sharp to crop the image based on the text region
//       //   sharp(resizedImageBuffer)
//       //     .extract({ y0, x0, width, y1 })
//       //     .toFile(`path/to/your/output/cropped_image_${index + 1}.jpg`, (err) => {
//       //       if (err) {
//       //         console.error(err);
//       //       } else {
//       //         console.log(`Cropped image ${index + 1} saved successfully.`);
//       //       }
//       //     });
//       });
//     });
//   })
//   .catch((err) => console.error(err));
let image = await sharp("output1.png").toBuffer();
Tesseract.recognize("output1.png", "eng", {
  logger: (info) => console.log(info),
})
  .then(({ data: { lines } }) => {
    // Iterate through each line of text and generate cropped images
    lines.forEach(async (line, index) => {
      const { x0, y0, x1, y1 } = line.bbox;

      console.log(x0, y0, x1, y1);

      // Use Sharp to crop the image based on the text region
      // sharp("sample/test3.jpg")
      //   .extract({ x0, y0, width, y1 })
      //   .toFile(`/output/cropped_image_${index + 1}.jpg`, (err) => {
      //     if (err) {
      //       console.error(err);
      //     } else {
      //       console.log(`Cropped image ${index + 1} saved successfully.`);
      //     }
      //   });
      // gm("sample/test3.jpg")
      //   .stroke("red") // Border color
      //   .fill("none") // Fill color
      //   .drawRectangle(x0, y0, x1, y1)
      //   .write(`/output/cropped_image_${index + 1}.jpg`, (err: any) => {
      //     if (err) {
      //       console.error(err);
      //     } else {
      //       console.log("Square created successfully!");
      //     }
      //   });

      image = await sharp(image)
        .resize({ width: 1960 * 3 })
        .composite([
          {
            input: Buffer.from(
              `<svg width="${x1 - x0}" height="${
                y1 - y0
              }" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" stroke="red" stroke-width="10" fill="none"/>
          </svg>
          `
            ),
            top: x0,
            left: y0,
          },
        ])
        .toBuffer();
    });
  })
  .then(() => {
    sharp(image)
      .toFile(`image2.png`)
      .then(() => console.log("Square added to the image"))
      .catch((err) => console.error(err));
  });
