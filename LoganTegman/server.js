'use strict';

const express = require('express');

express()
  .use(express.static(__dirname + '/build'))
  .listen(3000, () => console.log('Server running on port 3000'));
