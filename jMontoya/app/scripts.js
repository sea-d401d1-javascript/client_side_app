const moment = require('moment');
const $ = require('jquery');

$(function(){
  setInterval(function(){
    $('#clock').text(moment().format("LTS"));
  }, 1000);
});

$('#date').text(moment().format('MMMM Do YYYY'));
