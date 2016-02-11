const angular = require('angular');
const moment = require('moment');

angular.module('ngAppClock', []).controller('ngAppClockController', ['$scope', '$interval', function($scope, $interval) {

  $interval(function() {
    $scope.clock = moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.clockAK = moment().subtract(1, "h").format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);
}]);

