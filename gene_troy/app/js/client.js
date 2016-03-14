'use strict';

require('!style!css!../css/style.css');
var moment = require('moment');
var jquery = require('jquery');

function getTime() {
  var t = moment().toString();
  jquery('#time').text(t);
}
setInterval(getTime, 1000);
