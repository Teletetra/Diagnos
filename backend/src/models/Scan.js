// models/Scan.js
const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the patient
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the doctor who uploaded the scan
    required: true,
  },
  scanFile: {
    type: String, // Path to the uploaded CT scan file (e.g., stored in cloud storage or local server)
    required: true,
  },
  scanDate: {
    type: Date,
    default: Date.now,
  },
  aiResults: {
    disease: {
      type: String, // Name of the detected disease (e.g., "Cancer")
      required: true,
    },
    accuracy: {
      type: Number, // Accuracy percentage (e.g., 95.5)
      required: true,
    },
    notes: {
      type: String, // Additional notes from the AI model
    },
  },
  doctorNotes: {
    type: String, // Notes added by the doctor
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Scan', scanSchema);