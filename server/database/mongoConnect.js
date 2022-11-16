require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;