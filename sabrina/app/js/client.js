const angular = require('angular');
const moment = require('moment');
const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', '$interval', ($scope, $interval) => {
  var currTime = moment(new Date());
  var timeZone = parseInt(moment().format('Z'));

  $interval(() => {
    updateTime();
    $scope.time = currTime.format('MMMM Do YYYY, h:mm:ss a');
    $scope.timezone = timeZone;
  }, 1000);

  function updateTime() {
    currTime.add($scope.count, 'hours');
    $scope.count = 0;
  }

  $scope.addHour = () => {
    $scope.count++;
    timeZone++;
  };

  $scope.minusHour = () => {
    $scope.count--;
    timeZone--;
  };
}]);
