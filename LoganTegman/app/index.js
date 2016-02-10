'use strict';

import moment from 'moment';
import angular from 'angular';
import material from 'angular-material';
import aria from 'angular-aria';

window.moment = moment;

const timeApp = angular.module('timeApp', [material, aria]);

timeApp.controller('timeCtrl', ['$scope', '$interval', ($scope, $interval) => {
  $scope.time = moment().format('h:mm:ss a');
  $scope.utcOffset = moment().utcOffset() / 60;
  $scope.changeTz = (interval) => {
    const newOffset = $scope.utcOffset + interval;
    if (newOffset <= 12 && newOffset >= -12) $scope.utcOffset = newOffset;
    updateTime();
  };

  $interval(() => {
    updateTime();
  }, 1000);

  function updateTime() {
    $scope.time = moment().utcOffset($scope.utcOffset * 60).format('h:mm:ss a');
  }
}]);
