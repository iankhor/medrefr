
const mongoose = require('mongoose');

// Initialization
mongoose.connect(process.env.MONGO_URL)
const { connection: db } = mongoose;
// Same as: const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
    console.log('Connected to the database.');
});

module.exports = db;
