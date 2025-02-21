// routes/user.js
const express = require("express");
const {updateProfile,getProfile } = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

// Get user profile
router.get("/profile", auth, getProfile);

// Update user profile
router.put("/profile", auth, updateProfile);

module.exports = router;