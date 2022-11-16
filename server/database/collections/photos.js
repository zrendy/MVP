const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  url: String,
  thumbnail: String,
  labels: [String],
  address: String

});
const photos = mongoose.model('photo', photoSchema);

module.exports = photos;