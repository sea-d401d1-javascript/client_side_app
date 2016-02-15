var myApp = angular.module('myApp', []);

myApp.controller('time', ['$scope', ($scope) => {
  $scope.format = 'yyyy-MM-ddTHH:mm:ssZ';
}]).directive('myCurrentTime', (dateFilter) => {
  return (scope, element, attrs) => {
    var format;

    scope.$watch(attrs.myCurrentTime, (value) => {
      format = value;
      currTime();
    });
        // watch the format change from input tag and then save it

    function currTime() {
      var dt = dateFilter(new Date(), format,'-0800');
      element.text(dt);
            // element point to line 11 span element
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

myApp.controller('timeZone', ['$scope', ($scope) => {
  $scope.format = 'yyyy-MM-ddTHH:mm:ssZ';
  $scope.timezone = null;
  $scope.addOneHour = function() {
    if ($scope.timezone || $scope.timezone === 0) {
      $scope.timezone = $scope.timezone;
    } else {
      $scope.timezone = -800;
    }
    if ($scope.timezone < 1200) {
      $scope.timezone += 100;
    } else {
      alert('out of time zone range');
    }
    console.log($scope.timezone);
  };

  $scope.minusOneHour = function() {
    if ($scope.timezone || $scope.timezone === 0 ) {
      $scope.timezone = $scope.timezone;
    } else {
      $scope.timezone = -800;
    }
    if ($scope.timezone > -1200) {
      $scope.timezone -= 100;
    } else {
      alert('out of time zone range');
    }
  };

}]).directive('currentTimeZone', ['dateFilter', '$interval', (dateFilter, $interval) => {
  return (scope, element, attrs) => {
    var timeoutId, utc, timezoneString, zero, position;
    function updateTime() {
      if (scope.timezone === 0) {
        utc = '+0000';
      }
      if (scope.timezone < 0) {
        if(scope.timezone.toString().length < 5){
          timezoneString = scope.timezone.toString();
          zero = '0';
          position = 1;
          utc = [timezoneString.slice(0, position), zero, timezoneString.slice(position)].join('');
        }else{
          utc = scope.timezone.toString();
        }
      }

      if (scope.timezone > 0) {
        if(scope.timezone.toString().length < 4) {
          timezoneString = scope.timezone.toString();
          zero = '+0';
          position = 0;
          utc = [timezoneString.slice(0, position), zero, timezoneString.slice(position)].join('');
        }else{
          timezoneString = scope.timezone.toString();
          zero = '+';
          position = 0;
          utc = [timezoneString.slice(0, position), zero, timezoneString.slice(position)].join('');
        }
      }
      element.text(dateFilter(new Date(), scope.format, utc));
    }

    element.on('$destroy', () => {
      $interval.cancel(timeoutId);
    });

    timeoutId = $interval(() => {
      updateTime();
    }, 1000);
  };

}]);
