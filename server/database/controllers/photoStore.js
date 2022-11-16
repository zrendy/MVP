require('dotenv').config();
const db = require('../mongoConnect.js');
const photos = require('../collections/photos.js');
const {labelImage, landmarkImage} = require('../googleVision.js')
const axios = require('axios');


var postPhotos = async function (photo) {
  var labels = await labelImage(photo.url)
  var landmark = await landmarkImage(photo.url)
  var prompt = '';
  labels.forEach(label => {
    prompt+=`${label} `;
  })
  var options = {
    url: 'https://api.openai.com/v1/images/generations',
    method: 'post',
    data: {
      prompt: prompt,
      size: '512x512',
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_AUTH}`
    }
  }
  var result = await axios(options)
  photo['alternate'] = result.data.data[0].url;
  photo['labels'] = labels;
  photo['address'] = landmark;
  console.log(photo)
  return photos.create(photo)
}

var getPhotos = function () {
  return photos.find()
}

module.exports = {postPhotos, getPhotos}

