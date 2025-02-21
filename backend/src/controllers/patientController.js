// controllers/patientController.js
const Patient = require("../models/Patient");

// Create a new patient
const createPatient = async (req, res) => {
  const { name, age, gender, contactInfo, medicalHistory } = req.body;

  try {
    const patient = await Patient.create({
      name,
      age,
      gender,
      contactInfo,
      medicalHistory,
      createdBy: req.user._id, // Associate patient with the doctor
    });

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all patients for a doctor
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ createdBy: req.user._id });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPatient, getPatients };