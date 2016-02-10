const express = require('express');
const angular
var PORT = 5000;

express().use(
  express.static( __dirname + '/build')
).listen(PORT , () => {
  console.log('Server is running on port ' + PORT + '.');
});
