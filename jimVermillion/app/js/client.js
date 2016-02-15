'use strict';

require('!style!css!../css/style.css');
const angular = require('angular');
const moment = require('moment');

var timeApp = angular.module('app', []);

timeApp.controller('appController', ['$scope', '$interval', function($scope, $interval) {
  $scope.count = 0;
  $scope.up = function() {
    $scope.count++;
    getTime();
  }
  $scope.down = function() {
    $scope.count--;
    getTime();
  }

  function getTime() {
    var t = moment(new Date());
    t.add($scope.count, 'hours');
    $scope.time = t.format('MMMM Do YYYY, h:mm:ss a');
  }
  $interval(getTime, 1000);
}]);
