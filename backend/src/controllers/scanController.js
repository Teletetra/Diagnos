// // controllers/scanController.js
// const Scan = require("../models/Scan");
// const { processScan } = require("../services/aiService"); // AI service for processing scans

// // Upload a CT scan
// const uploadScan = async (req, res) => {
//   const { patientId } = req.body;

//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     // Process the scan using the AI model
//     const aiResults = await processScan(req.file.path);

//     // Save the scan details to the database
//     const scan = await Scan.create({
//       patientId,
//       scanFile: req.file.path,
//       uploadedBy: req.user._id,
//       aiResults,
//     });

//     res.status(201).json(scan);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all scans for a patient
// const getScans = async (req, res) => {
//   const { patientId } = req.params;

//   try {
//     const scans = await Scan.find({ patientId });
//     res.status(200).json(scans);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { uploadScan, getScans };