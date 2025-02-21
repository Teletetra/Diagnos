// config/cors.js
const cors = require("cors");

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

module.exports = cors(corsOptions);