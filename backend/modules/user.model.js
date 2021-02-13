const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
}, {
    timestamps: true,
})