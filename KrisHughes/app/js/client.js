const angular = require('angular');
const moment = require('moment');

angular.module('ngAppClock', []).controller('ngAppClockController', ['$scope', '$interval', function($scope, $interval) {

  $interval(function() {
  	//Pacific Time
	  $scope.clock = moment().format('MMMM Do YYYY, h:mm:ss a');
	  //AK Time
	  $scope.clockAK = moment().subtract(1, "h").format('MMMM Do YYYY, h:mm:ss a');
	  //MT Time
	  $scope.clockMT = moment().add(1, "h").format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);
}]);


