const moment = require('moment');

setInterval(() => {
  var now = moment();
  document.getElementById('current-time').innerText = now.format('HH:mm:ss');

  function decToHex(str) {
    return ('0' + parseInt(str).toString(16)).slice(-2);
  }
  var timeHex = '#' + decToHex(now.format('HH'))
    + decToHex(now.format('mm'))
    + decToHex(now.format('ss'));

  document.getElementById('time-hex').innerText = timeHex;
  document.body.style.backgroundColor = timeHex;
}, 1000);
