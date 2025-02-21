// controllers/chatController.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const Chat= require('../models/Chat')
const chatController = {
  sendMessage: async (req, res) => {
    const { prompt } = req.body; // User's input

    try {
      // Generate content using the Gemini API
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      try {
        await Chat.create({
          userId: req.user._id,
          prompt: prompt,
          response: text,
        });
        console.log("Chat history saved to MongoDB");
      } catch (dbError) {
        console.error("Error saving chat history to MongoDB:", dbError);
        // Consider whether to send an error to the client or just log it
        // res.status(500).json({ error: "Error saving chat history" });  // Optional
      }
      // Send the response back to the frontend
      res.json({ response: text });
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: "Failed to process your request" });
    }
  },
};

module.exports = chatController;