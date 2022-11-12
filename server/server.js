const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

//for use in development
app.use(cors());
// const DIST_DIR = path.join(__dirname, '../public');
// app.use(express.static(DIST_DIR));
const mockResponse = {
  foo: 'bar',
  bar: 'f2o'
};
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.send();
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});