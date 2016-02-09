const moment = require('moment');

setInterval(() => {
  var text = moment().format('HH:mm:ss');
  document.getElementById('timestamp').innerText = text;
}, 1000);
