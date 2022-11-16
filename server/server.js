const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const {postPhotos, getPhotos} = require('./database/controllers/photoStore.js')


//for use in development
app.use(cors());
app.use(express.json());
const DIST_DIR = path.join(__dirname, '../public');
app.use(express.static(DIST_DIR));
const mockResponse = {
  foo: 'bar',
  bar: 'f2o'
};
app.get('/photos', (req, res) => {
  getPhotos()
  .then(result => {
    res.send(result);
  })
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
