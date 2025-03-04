require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Import the DB connection
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT;
// Middleware
app.use(express.json());

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : ["http://localhost:5173"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);
app.use("/api/courses", courseRoutes);

// Simple Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});