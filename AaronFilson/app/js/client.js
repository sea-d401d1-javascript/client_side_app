const mom = require('moment');

var currentTime = mom().format('MMMM Do YYYY, h:mm:ss a');
currentTime.fake = null;
document.write(currentTime);
