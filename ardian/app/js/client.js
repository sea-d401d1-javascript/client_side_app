const angular = require('angular');
const moment = require('moment');

const dayApp = angular.module('dayApp', []);

dayApp.controller('dayAppController', ['$scope', function($scope) {
  $scope.currentDay = moment().format('dddd');
}]);

dayApp.controller('dateAppController', ['$scope', '$interval', function($scope, $interval) {
  $interval(() => {
    $scope.dateNtime = moment().format('MMMM Do YYYY, h:mm:ss a');
    setInterval(1000);
  });
}]);

// var getDay = () => {
//   var day = moment().format('dddd');
//   document.getElementById('day').innerHTML = day;
// };
//
// var getTime = () => {
//   var time = moment().format('MMMM Do YYYY, h:mm:ss a');
//   document.getElementById('time').innerHTML = time;
//   setInterval(getTime, 1000);
// };
//
//
// getDay();
// getTime();
