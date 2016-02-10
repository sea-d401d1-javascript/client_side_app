const angular = require('angular');
const moment = require('moment');

// Special stuff I am learning
var myApp = angular.module('myApp' , [])
  .controller('TimeController', ['$scope', '$interval', ($scope , $interval) => {

    var t = moment().format();
    var tick = function () {
      t = moment().format('HH:mm:ss a');
      $scope.clock = $scope.newTime || t;
    }
    $scope.startTick = function() {
      $interval(tick,1000);
    }
    $scope.addTime = function () {
      $scope.newTime = t.add(1 , 'h');
    }
    $scope.subtractTime = function () {
      t = moment().format().subtract(1 , 'H');
      $scope.startTick();
    }

    $scope.startTick();

    }
  ]);
  // .directive('time' , ['$interval' , function ($interval) {
  //     return function (scope , element , attrs) {
  //       var stopTime;
  //       function updateTime(){
  //         element.text(moment().format('h:mm:ss a'));
  //       }
  //
  //       scope.$watch(attrs.time , () => {
  //         updateTime();
  //       });
  //
  //       stopTime = $interval(updateTime , 1000);
  //
  //     };
  //   }
  // ]);





//Use set interval to have this run continuously, so updates occur
//on main JS file.
