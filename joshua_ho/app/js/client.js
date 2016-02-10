const angular = require('angular');
const moment = require('moment');

function getTime () {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return time;
};
// Special stuff I am learning
var myApp = angular.module('myApp' , [])
  .controller('TimeController', ['$scope',
    ($scope) => {
      $scope.format = 'M/m/yy h:mm:ss a';
    }
  ])
  .directive('time' , ['$interval' ,
    ($interval) => {
      return (scope , element , attrs) => {
        var stopTime;
        function updateTime(){
          element.text(moment().format('h:mm:ss a'));
        }
        scope.$watch(attrs.time , () => {
          updateTime();
        });
        stopTime = $interval(updateTime , 1000);
      };
    }
  ]);

  // $scope.time = getTime();
  // ( function() {
  // $scope.time = getTime();
  // return $scope.time;
  // } , 1000);



//Use set interval to have this run continuously, so updates occur
//on main JS file.
