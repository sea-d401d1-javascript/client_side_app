'use strict';
const angular = require('angular');
const moment = require('moment');
const clock = angular.module('clock', []);
clock.controller('clockController', ['$scope', function($scope) {
  $scope.locale = 'en';
  $scope.lang = 'en';
  $scope.utc = -8;
  $scope.datetime = moment().utc().utcOffset(0).format();
  $scope.setLocale = function(locale) {
    $scope.locale = locale;
    $scope.lang = locale;
  };
  $scope.setUTC = function(timezone) {
    var utc = 0;
    if (timezone === 'us-pst') utc = -8;
    if (timezone === 'us-mst') utc = -7;
    if (timezone === 'us-cst') utc = -6;
    if (timezone === 'us-est') utc = -5;
    $scope.utc = utc;
  };
  $scope.updateDatetime = function() {
    $scope.datetime = moment().utc().utcOffset(0).format();
  };
}]);
clock.directive('time', ['$interval', function($interval) {
  return function(scope, element, attrs) {
    function updateTime() {
      scope.updateDatetime();
      moment.locale(scope.locale);
      var weekday = moment().format('dddd').toString().charAt(0).toUpperCase()
                  + moment().format('dddd').toString().slice(1);
      var month = moment().format('MMMM').toString().charAt(0).toUpperCase()
                + moment().format('MMMM').toString().slice(1);
      var day = moment().format('Do').toString();
      var year = moment().format('YYYY').toString();
      var time = weekday + ' ' + month + ' ' + day + ', ' + year
                 + ' @ ' + moment().utc().utcOffset(scope.utc).format('LTS').toString();
      element.text(time);
    }
    scope.$watch(attrs.time, function() {
      updateTime();
    });
    var stopTime = $interval(updateTime, 100);
    element.on('$destroy', function() {
      $interval.cancel(stopTime);
    });
  };
}]);
