require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_COURSES_URI, {
            serverSelectionTimeoutMS: 5000, // Prevent long connection hangs
        });

        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Stop server if MongoDB connection fails
    }
};

module.exports = connectDB;
