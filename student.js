const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    admissionNumber: { type: String, required: true, unique: true },
    class: { type: String, required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    balance: { type: Number, default: 0 },
    rewards: [{ type: String }],
    honours: [{ type: String }],
    discipline: [{ type: String }],
});

module.exports = mongoose.model('Student', StudentSchema);