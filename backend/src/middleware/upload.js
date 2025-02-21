// middleware/upload.js
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;

// // middleware/upload.js
// const multer = require("multer");
// const path = require("path");

// // Configure storage for CT scans
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/scans");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   },
// });

// // Validate file type (e.g., only allow DICOM or PNG/JPG)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [".dcm", ".png", ".jpg", ".jpeg"];
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowedTypes.includes(ext)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type. Only DICOM/PNG/JPG allowed."), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
// });

// module.exports = upload;