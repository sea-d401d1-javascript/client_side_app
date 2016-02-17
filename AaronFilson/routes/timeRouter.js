const express = require('express');
require('body-parser').json();
const moment = require('moment');

var timeRouter = module.exports = exports = express.Router();

timeRouter.get('/', (req, res) => {
  res.status(200).json(moment().format('MMMM Do YYYY, h:mm:ss a'));
});
