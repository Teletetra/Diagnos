// // routes/scan.js
// const express = require("express");
// const { uploadScan, getScans } = require("../controllers/scanController");
// const auth = require("../middleware/auth");
// const upload = require("../middleware/upload");

// const router = express.Router();

// // Upload a CT scan
// router.post("/upload", auth, upload.single("scan"), uploadScan);

// // Get all scans for a patient
// router.get("/:patientId", auth, getScans);

// module.exports = router;