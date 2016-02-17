'use strict';
const angular = require('angular');
const moment = require('moment');
angular.module('clock', [])
  .controller('clockController', ['$scope',
    function($scope) {
      $scope.format = 'M/d/yy h:mm:ss a';
    }
  ])
  .directive('time', ['$interval',
    function($interval) {
      return function(scope, element, attrs) {
        var stopTime;
        function updateTime() {
          element.text(moment().format('h:mm:ss a'));
        }
        scope.$watch(attrs.time, function() {
          updateTime();
        });
        stopTime = $interval(updateTime, 1000);
        element.on('$destroy', function() {
          $interval.cancel(stopTime);
        });
      };
    }
  ]);
