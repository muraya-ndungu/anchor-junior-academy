const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // e.g., 'owner', 'principal', 'teacher', 'parent', 'student', etc.
    tscNumber: { type: String }, // For teachers
    admissionNumber: { type: String }, // For students

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'parent', 'staff', 'owner', 'principal', 'secretary', 'bursar', 'subordinate'],
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema)