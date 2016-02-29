const angular = require('angular');
const moment = require('moment');

const timeApp = angular.module('timeApp', []);
const momentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

timeApp.controller('timeController', ['$scope', '$interval', ($scope, $interval) => {
  var hours = 0;
  $scope.callAtInterval = () => {
    $scope.time = moment().add(hours, 'hour').format('H:mm:ss a');
  };
  $scope.subtractTime = () => {
    hours -= 1;
    $scope.time = moment().add(hours, 'hour').format('H:mm:ss a');
  };
  $scope.addTime = () => {
    hours += 1;
    $scope.time = moment().add(hours, 'hour').format('H:mm:ss a');
  };
  $interval(() => {
    $scope.callAtInterval();
  }, 1000);
}]);
