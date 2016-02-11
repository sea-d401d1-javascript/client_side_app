const angular = require('angular');
const moment = require('moment');

// Special stuff I am learning
var myApp = angular.module('myApp' , [])
.controller('TimeController', ['$scope', '$interval', ($scope , $interval) => {
  var currentTime;
  var hourChange = 0;
  var tick = function () {
    currentTime = moment().add(hourChange , 'hour');
    $scope.clock = currentTime.format("H:mm:ss a");
  }
  $scope.addTime = function () {
    hourChange += 1;
    currentTime = moment().add(hourChange , 'hour');
    $scope.clock = currentTime.format("H:mm:ss a");
  }
  $scope.subtractTime = function () {
    hourChange -= 1;
    currentTime = moment().add(hourChange , 'hour');
    $scope.clock = currentTime.format("H:mm:ss a");
  }

  tick();
  $interval( tick , 1000 ) ;
}]);
//Use set interval to have this run continuously, so updates occur
//on main JS file.
