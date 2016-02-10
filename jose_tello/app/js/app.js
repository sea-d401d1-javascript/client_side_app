const angular = require('angular');
const moment = require('moment');

const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ($scope, $interval) => {
  $scope.callAtInterval = () => {
    $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  };
  $interval(() => {
    $scope.callAtInterval();
  }, 1000);
});
