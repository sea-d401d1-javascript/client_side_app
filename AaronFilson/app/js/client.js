const mom = require('moment');

const angular = require('angular');

const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', ($scope) => {
  var update = function() {
    var myTag = document.getElementById('simpleTime');
    myTag.innerHTML = mom().format('MMMM Do YYYY, h:mm:ss a');
  };

  window.setInterval(update, 1000);
  $scope.fake = null; // be quiet linter, angular comes later
}]);
