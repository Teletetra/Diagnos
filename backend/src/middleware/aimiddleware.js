// // middleware/aiMiddleware.js
// const preprocessScan = async (req, res, next) => {
//   try {
//     if (!req.file) throw new Error("No file uploaded");

//     // Example: Convert CT scan to a format the AI model expects
//     const processedScan = await convertToGrayscale(req.file.path);

//     // Attach processed data to the request
//     req.processedScan = processedScan;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = preprocessScan;