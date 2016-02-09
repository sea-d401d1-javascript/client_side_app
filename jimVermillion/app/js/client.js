const moment = require('moment');

(function(){
  var time = document.getElementById('time');
  function getTime(){
    time.textContent=moment().format('MMMM Do YYYY, h:mm:ss a');  
  }
  setInterval(getTime, 1000);
})();
