var myApp = angular.module('myApp', []);

myApp.controller('time', ['$scope', ($scope) => {
  $scope.format = 'M/d/yy h:mm:ss a';
}]);

myApp.directive('myCurrentTime', (dateFilter) => {
    return (scope, element, attrs) => {
        var format;

        scope.$watch(attrs.myCurrentTime, (value) => {
            format = value;
            currTime();
        });
        // watch the format change from input tag and then save it

        function currTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
        }

        function updateTime() {
            setTimeout(() => {
              currTime();
              // update DOM
              updateTime();
              // schedule another update
            }, 1000);
        }

        updateTime();
    };
});
