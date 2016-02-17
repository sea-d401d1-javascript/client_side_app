const angular = require('angular');
const moment = require('moment');
const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', '$http', ($scope, $http) => {

  function timeLoop() {
    $http.get('http://localhost:3000/time')
      .then((res) => {
        $scope.theTime = res.data;
        $scope.clientTime = moment.utc().add($scope.timeZone, 'hours').format('MMMM Do YYYY, h:mm:ss a');
      }, (err) => {
        console.log(err);
      });
  }

  $scope.timeZone = -8;

  $scope.timeZoneWest = function() {
    if ($scope.timeZone > -12) $scope.timeZone -= 1;
    if ($scope.timeZone <= -12) $scope.timeZone = 12;
  };

  $scope.timeZoneEast = function() {
    if ($scope.timeZone < 12) $scope.timeZone += 1;
    if ($scope.timeZone >= 12) $scope.timeZone = -12;
  };

  window.setInterval(timeLoop, 1000);
}]);
