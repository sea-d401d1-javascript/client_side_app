const express = require('express');
const fs = require('fs');

express().use(express.static(__dirname + '/build')).listen(5000, () => console.log('Server up on port 5000'));
