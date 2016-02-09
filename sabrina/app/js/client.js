const angular = require('angular');
const moment = require('moment');

var displayTime = () => {
  var currTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById('time').innerHTML = currTime;
  setInterval(displayTime, 1000);
};

displayTime();
