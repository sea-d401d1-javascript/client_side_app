const angular = require('angular');
var moment = require('moment');

const timeApp = angular.module('timeApp', []);

timeApp.controller('timeAppController', ['$scope', '$interval', ($scope, $interval) => {
  var tick = () => {
    $scope.clock = $scope.newTime || moment().format('HH:mm:ss');
  }
  tick();
  $interval(tick, 1000);
  console.log($scope.clock);

  $scope.addHour = () => {
    $scope.newTime = moment().add(2, 'hours').format('HH:mm:ss');
  };

  $scope.subtractHour = () => {
    $scope.newTime = moment().subtract(2, 'hours').format('HH:mm:ss');
  };

}]);
