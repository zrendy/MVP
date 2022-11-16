require('dotenv').config()
const vision = require('@google-cloud/vision')
const axios = require('axios');

//google vision
// Creates a client
const client = new vision.ImageAnnotatorClient();

var labelImage = function (image_url) {
  // Performs label detection on the image file
  return client
  .labelDetection(image_url)
  .then(result => {
    const labels = result[0].labelAnnotations;
    var labelArr=[];
    labels.forEach(label => labelArr.push(label.description));
    return labelArr;
  })

}

var landmarkImage = function (image_url) {
  //landmark detection
  return client
  .landmarkDetection(image_url)
  .then(result => {
    const landmarks = result[0].landmarkAnnotations;
    var query = "";
    landmarks.forEach(landmark => {
      query+=`${landmark.description} `
    })
    return axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {params: {query: query, key: process.env.PLACES_API}})
    .then(result => {
      if(!result.data.results[0]) {
        return ""
      } else {
        return result.data.results[0].formatted_address
      }
    })
  })
}

module.exports = {labelImage, landmarkImage}