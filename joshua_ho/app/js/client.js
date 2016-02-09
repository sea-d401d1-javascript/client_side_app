const angular = require('angular');
const moment = require('moment');

function getTime () {
  moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('Time Got-ted');
  console.log(time);
  return time;
};
