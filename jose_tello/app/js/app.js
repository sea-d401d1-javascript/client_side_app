const moment = require('moment');

var getTime = () => {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById('time').innerHTML = time;
};

(function() {
  getTime();
  setInterval(getTime, 1000);
})();
