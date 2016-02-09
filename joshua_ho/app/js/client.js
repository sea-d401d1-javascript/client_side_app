const angular = require('angular');
const moment = require('moment');

var getTime = function (){
  moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('Time Got-ted');
  console.log(time);
};


//Use set interval to have this run continuously, so updates occur
//on main JS file.
