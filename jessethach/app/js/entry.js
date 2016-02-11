const angular = require('angular');
var moment = require('moment');

const timeApp = angular.module('timeApp', []);

//Advice taken from Jim Vermillion
timeApp.controller('timeAppController', ['$scope', '$interval', ($scope, $interval) => {
  $scope.count = 0;
  var tick = () => {
    var time = moment(new Date());
    time.add($scope.count, 'hours');
    $scope.clock = time.format('HH:mm:ss')
  }
  tick();
  $interval(tick, 1000);
  console.log($scope.clock);

  $scope.addHour = () => {
    $scope.count++;
  };

  $scope.subtractHour = () => {
    $scope.count--;
  };

}]);
