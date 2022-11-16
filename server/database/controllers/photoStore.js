const db = require('../mongoConnect.js');
const photos = require('../collections/photos.js');
const {labelImage, landmarkImage} = require('../googleVision.js')


var postPhotos = async function (photo) {
  var labels = await labelImage(photo.url)
  var landmark = await landmarkImage(photo.url)
  photo['labels'] = labels;
  photo['address'] = landmark;
  console.log(photo)
  return photos.create(photo)
}

var getPhotos = function () {
  return photos.find()
}

module.exports = {postPhotos, getPhotos}

