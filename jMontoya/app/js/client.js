const angular = require('angular');
const timeApp = angular.module('timeApp', []);
const moment = require('moment');

timeApp.controller('timeController', ($scope, $interval) => {

  $interval(() => {
    $scope.clock = moment().format('LTS');
    $scope.clockAhead = moment().add(1, 'h').format('LTS');
    $scope.clockBehind = moment().subtract(1, 'h').format('LTS');
  }, 1000);

  $scope.date = new moment().format('MMMM Do YYYY');

});
