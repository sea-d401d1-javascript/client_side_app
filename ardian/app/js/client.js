const angular = require('angular');
const moment = require('moment');

var getDay = () => {
  var day = moment().format('dddd');
  document.getElementById('day').innerHTML = day;
};

var getTime = () => {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById('time').innerHTML = time;
  setInterval(getTime, 1000);
};


getDay();
getTime();
