const moment = require('moment');
const $ = require('jquery');

 $(function(){
    setInterval(function(){
      $('#clock').text(moment().format("h:mm:ss A"));
    });
  });

  $('#date').text(moment().format('MMMM Do YYYY'));
