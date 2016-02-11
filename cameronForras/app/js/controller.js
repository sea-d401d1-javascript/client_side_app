const angular = require('angular');

var app = angular.module('myApp', []);

app.controller('MyController', ($scope, $interval) => {
  var tick = function() {
    $scope.CurrentTime = Date.now();
  }
  tick();
  $interval(tick,1000);

  $scope.addHour = function() {
    var now = new Date();
    var newTime = new Date(now.getTime() + (1000*60*60));
    $scope.CurrentTime = newTime;
  }

  $scope.subtractHour = function() {
    var now = new Date();
    var newTime = new Date(now.getTime() - (1000*60*60));
    $scope.CurrentTime = newTime;
  }
});
