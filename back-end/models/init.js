
const mongoose = require('mongoose');

// Initialization
mongoose.connect(process.env.MONGODB_URI)
const { connection: db } = mongoose;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
    console.log('Connected to the database.');
});

module.exports = db;
