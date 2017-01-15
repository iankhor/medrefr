const mongoose = require('mongoose');
const db = require('./init');

const counterSchema = new mongoose.Schema({
    count: Number,
    created_at: { type: Date, default: Date.now }
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
