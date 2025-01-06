const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;