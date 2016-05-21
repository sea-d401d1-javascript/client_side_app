const angular = require('angular');

var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', '$interval', ($scope, $interval) => {
  $scope.count = 0;
  var tick = function() {
    $scope.CurrentTime = Date.now() + $scope.count;
  }

  $scope.addHour = function() {
    $scope.count += (1000*60*60);
    tick();
  }

  $scope.subtractHour = function() {
    $scope.count -= (1000*60*60);
    tick();
  }

  $interval(tick, 1000);
}]);
