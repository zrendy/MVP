const mongoose = require('mongoose');
const uri = "mongodb+srv://zrendy:MVPproject@cluster0.ozxjbwh.mongodb.net/MVP?retryWrites=true&w=majority";
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;