const angular = require('angular');
const moment = require('moment');

const dayApp = angular.module('dayApp', []);

dayApp.controller('dayAppController', ['$scope', function($scope) {
  $scope.currentDay = moment().format('dddd');
}]);

dayApp.controller('dateAppController', ['$scope', '$interval', function($scope, $interval) {
  $interval(() => {
    $scope.pacificTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.mountainTime = moment().add(1, 'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.centralTime = moment().add(2, 'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.easternTime = moment().add(3, 'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.alaskaTime = moment().subtract(1, 'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.hawaiiTime = moment().subtract(2, 'h').format('MMMM Do YYYY, h:mm:ss a');
    setInterval(1000)
  });
}]);
