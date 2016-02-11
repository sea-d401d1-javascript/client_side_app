'use strict';

const angular = require('angular');
const moment = require('moment');
const $ = require('jquery');

(function() {
  function getTime() {
    $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
  setInterval(getTime, 1000);
})();
