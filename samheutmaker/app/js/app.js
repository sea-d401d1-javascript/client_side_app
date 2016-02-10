const angular = require('angular');

var timerApp = angular.module('timerApp', []);

timerApp.controller('TimeController', ['$scope', '$interval', ($scope, $interval) => {
	$scope.currentTime = "";
	$scope.tellTime = function(){
		$scope.newTime = new Date();
		var newHours = ($scope.newTime.getHours() > 12 ? $scope.newTime.getHours() - 12 : $scope.newTime.getHours());
		var newMinutes = ($scope.newTime.getMinutes().toString().length === 1 ? "0" + $scope.newTime.getMinutes().toString() : $scope.newTime.getMinutes().toString());
		var newSecond = ($scope.newTime.getSeconds().toString().length === 1 ? "0" + $scope.newTime.getSeconds().toString() : $scope.newTime.getSeconds().toString());
		console.log($scope.newTime.getSeconds().toString().length);
		$scope.currentTime = newHours + ':' + newMinutes + ':' + $scope.newTime.getSeconds()
	
	}
	$interval($scope.tellTime, 1000);
	$scope.tellTime();
}]);