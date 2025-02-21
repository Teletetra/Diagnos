// routes/index.js
const express = require("express");
const authRoutes = require("./Auth");
const userRoutes = require("./user");
const chatRoutes=require("./chat")
const patientRoutes = require("./patient");
// const scanRoutes = require("./scan");
// const aiRoutes = require("./ai");

const router = express.Router();

// Use individual route files
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/chat",chatRoutes);
// router.use("/patient", patientRoutes);
// router.use("/scan", scanRoutes);
// router.use("/ai", aiRoutes);

module.exports = router;