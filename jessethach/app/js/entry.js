var moment = require('moment');

function date_time() {
  now = moment().format('dddd [d.] Do MMMM YYYY [kl.] HH:mm:ss');
  document.getElementById('timer').innerHTML = now;
  setTimeout(function () { date_time(); }, 1000);
}
date_time();
