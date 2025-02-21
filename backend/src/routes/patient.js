// routes/patient.js
const express = require("express");
const { createPatient, getPatients } = require("../controllers/patientController");
const auth = require("../middleware/auth");

const router = express.Router();

// Create a new patient
router.post("/", auth, createPatient);

// Get all patients for a doctor
router.get("/", auth, getPatients);

module.exports = router;