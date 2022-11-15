const db = require('../mongoConnect.js');
const photos = require('../collections/photos.js');


var postPhotos = function (photo) {
  return photos.create(photo)
}

module.exports = {postPhotos, }

