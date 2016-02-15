const angular = require('angular');

const jedisApp = angular.module('jedisApp', []);

jedisApp.controller('jedisController', ['$scope', '$http', ($scope, $http) => {
  $scope.greeting = 'hello world';
  $scope.jedis = [];

  $http.get('http://localhost:3000/api/jedis')
    .then((res) => {
      console.log('success!');
      $scope.jedis = res.data;
    }, (err) => {
      console.log(err);
    });

  $scope.createJedi = function(jedi) {
    $http.post('http://localhost:3000/api/jedis', jedi)
      .then((res) => {
        $scope.jedis.push(res.data);
        $scope.newJedi = null;
      }, (err) => {
        console.log(err);
      })
  }

  $scope.deleteJedi = function(jedi) {
    $http.delete('http://localhost:3000/api/jedis/' + jedi._id)
      .then((res) => {
        $scope.jedis = $scope.jedis.filter((i) => i !== jedi);
      }, (err) => {
        console.log(err)
      })
  }

  $scope.updateJedi = function(jedi) {
    $http.put('http://localhost:3000/api/jedis/' + jedi._id, jedi)
      .then((res) => {
        $scope.jedis[$scope.jedis.indexof(jedi)] = jedi;
        jedi.editting = false;
      }, (err) => {
        console.log(err);
        $scope.editting = false;
      })
  }

}]);
