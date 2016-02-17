require(__dirname + '/../app/js/entry');
var angular = require('angular');
require('angular-mocks');

describe('it should do some stuff', () => {
  it('should work after a build', () => {
    expect(true).toBe(true);
  });
});

describe('jedis controller', () => {
  var $httpBackend;//takes parameters from user such a GET request and returns a promise
  var $scope;
  var $ControllerConstructor;

  beforeEach(angular.mock.module('jedisApp'));

  beforeEach(angular.mock.inject(($rootScope, $controller) => {
    $ControllerConstructor = $controller;
    $scope = $rootScope.$new();
  }));

  it('should be able to make a controller', () => {
    var jedisController = $ControllerConstructor('JedisController', {$scope});
      expect(typeof jedisController).toBe('object');
      expect(Array.isArray($scope.jedis)).toBe(true);
      expect(typeof $scope.getAll).toBe('function');

  });

  describe('REST requests', () => {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $ControllerConstructor('JedisController', {$scope});
    }));

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request to /api/jedis', () => {
      $httpBackend.expectGET('http://localhost:3000/api/jedis').respond(200, [{name: 'test jedi'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.jedis.length).toBe(1);
      expect(Array.isArray($scope.jedis)).toBe(true);
      expect($scope.jedis[0].name).toBe('test jedi');
    });

    it('should create a new jedi', () => {
      $httpBackend.expectPOST('http://localhost:3000/api/jedis', {name: 'the sent jedi'}).respond(200, {name: 'the response jedi'});
        $scope.newJedi = {name: 'the new jedi'};
        $scope.createJedi({name: 'the sent jedi'});
        $httpBackend.flush();
        expect($scope.jedis.length).toBe(1);
        expect($scope.newJedi).toBe(null);
        expect($scope.jedis[0].name).toBe('the response jedi');
    });

  });
});
