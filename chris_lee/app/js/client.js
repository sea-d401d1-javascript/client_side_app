const angular = require('angular');
const moment = require('moment');

const app = angular.module('timeApp', []);

app.controller('TimeController', ['$scope', ($scope) => {
  $scope.changeZone = function() {
    clearTimeout($scope.timeout);
    document.getElementById('time').innerHTML = moment().add(3,'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.timeout = setTimeout(function () { $scope.changeZone(); }, 1000);
  }
  $scope.localTime = function() {
    clearTimeout($scope.timeout);
    document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.timeout = setTimeout(function () { $scope.localTime(); }, 1000);
  };
  $scope.localTime();
}]);
