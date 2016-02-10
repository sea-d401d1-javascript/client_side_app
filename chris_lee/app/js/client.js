const moment = require('moment');

var displayTime = function () {
  document.getElementById('currentTime').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  setTimeout(function () { displayTime(); }, 1000);
}

displayTime();
