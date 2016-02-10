const angular = require('angular');
const moment = require('moment');
const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', '$interval', ($scope, $interval) => {
  $interval(() => {
    var PST = moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.time = PST;
  }, 1000);
}]);
