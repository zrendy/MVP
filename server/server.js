const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const vision = require('@google-cloud/vision')
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const {postPhotos} = require('./database/controllers/storePhotos.js')


//google vision
// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client
.labelDetection('http://res.cloudinary.com/dvijvlkad/image/upload/v1668453469/dvekftrrjlw1lf60rivj.png')
.then(result => {
  const labels = result[0].labelAnnotations;
  labels.forEach(label => console.log(label.description));
})

//for use in development
app.use(cors());
app.use(express.json());
// const DIST_DIR = path.join(__dirname, '../public');
// app.use(express.static(DIST_DIR));
const mockResponse = {
  foo: 'bar',
  bar: 'f2o'
};
app.get('/api', (req, res) => {

  res.send(mockResponse);
});
app.post('/photos', (req, res) => {
  postPhotos(req.body)
  .then(result => {
    res.send();
  })

});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});