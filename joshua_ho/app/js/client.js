const angular = require('angular');
const moment = require('moment');

//Special stuff I am learning
// var myApp = angular.module('myApp' , []);

(function getTime (){
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('Time Got-ted');
  console.log(time);
})();




//Use set interval to have this run continuously, so updates occur
//on main JS file.
