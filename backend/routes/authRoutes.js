const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Received login request for:", username);

    try {
        // Find user in database
        const user = await User.findOne({ username });
        if (!user) {
            console.log("User not found:", username);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log(" User found:", user.username);
        console.log(" Stored Hash:", user.password);

        // Compare entered password with hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(" Password Match:", isMatch);
        if (!isMatch) {
            console.log("Password does not match");
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log("Password matches! Generating token...");

        // Ensure JWT_SECRET is loaded
        if (!process.env.JWT_SECRET) {
            console.error("ERROR: JWT_SECRET is missing from .env!");
            return res.status(500).json({ message: 'Server configuration error' });
        }

        console.log("Using JWT Secret:", process.env.JWT_SECRET);

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET, // Securely using the env variable
            { expiresIn: '1h' }
        );

        console.log("Token generated successfully");
        res.json({ token, role: user.role });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
