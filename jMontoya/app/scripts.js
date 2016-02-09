const moment = require('moment');
const $ = require('jquery');

$(function(){
  setInterval(function(){
    $('#clock').text(moment().format("LTS"));
  });
});

$('#date').text(moment().format('MMMM Do YYYY'));
