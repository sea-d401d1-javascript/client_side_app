const angular = require('angular');

const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', '$http', ($scope, $http) => {

  function timeLoop() {
    $http.get('http://localhost:3000/time')
      .then((res) => {
        $scope.theTime = res.data;
      }, (err) => {
        console.log(err);
      });
  }

  window.setInterval(timeLoop, 1000);
}]);
