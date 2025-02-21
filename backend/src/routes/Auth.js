// routes/auth.js
const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// Register a new user (doctor)
router.post("/register", register);

// Login user
router.post("/login", login);

module.exports = router;