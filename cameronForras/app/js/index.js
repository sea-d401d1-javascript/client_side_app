const moment = require('moment');

setInterval(() => {
  document.getElementById('currentTime')
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);
