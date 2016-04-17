const angular = require('angular');
const moment = require('moment');

const app = angular.module('timeApp', []);

app.controller('TimeController', ['$scope', ($scope) => {
  $scope.zones = [
    {
      city: 'Anchorage',
      offset: -1
    },
    {
      city: 'Seattle',
      offset: 0
    },
    {
      city: 'New York',
      offset: 3
    },
    {
      city: 'London',
      offset: 8
    },
    {
      city: 'Paris',
      offset: 9
    },
    {
      city: 'Taipei',
      offset: 16
    }
  ];

  $scope.changeZone = function(zone) {
    var numHrs = zone.offset;
    clearTimeout($scope.timeout);
    document.getElementById('time').innerHTML = 'Date/Time in ' + zone.city + ' is ' + moment().add(numHrs,'h').format('MMMM Do YYYY, h:mm:ss a');
    $scope.timeout = setTimeout(function () { $scope.changeZone(zone); }, 1000);
  };

  $scope.localTime = function() {
    clearTimeout($scope.timeout);
    document.getElementById('time').innerHTML = 'Date/Time in Seattle is ' + moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.timeout = setTimeout(function () { $scope.localTime(); }, 1000);
  };

  $scope.localTime();       // call localTime on page load

}]);
