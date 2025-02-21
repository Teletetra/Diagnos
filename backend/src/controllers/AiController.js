// // controllers/aiController.js
// const { processScan } = require("../services/aiService");

// // Process a CT scan using the AI model
// const processScan = async (req, res) => {
//   const { scanFile } = req.body;

//   try {
//     const results = await processScan(scanFile);
//     res.status(200).json(results);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { processScan };