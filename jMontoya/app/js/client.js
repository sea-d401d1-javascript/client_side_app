const angular = require('angular');
const timeApp = angular.module('timeApp', []);
const moment = require('moment');

timeApp.controller('clockController',($scope, $interval) => {

  var updateTime = function() {
    var current = new moment().format("LTS");
    $scope.clock = current;
    $interval(updateTime, 1000);
  };
    updateTime();

    $scope.mySubFunction = function() {
        $scope.clock = moment().subtract(1, 'h').format("LTS");
    }
    $scope.myAddFunction = function() {
        $scope.clock = moment().add(1, 'h').format("LTS");
    }

  $scope.date = new moment().format('MMMM Do YYYY');

});
