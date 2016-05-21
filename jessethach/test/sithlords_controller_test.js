require(__dirname + '/../app/js/entry');
var angular = require('angular');
require('angular-mocks');

describe('it should do some stuff', () => {
  it('should work after a build', () => {
    expect(true).toBe(true);
  });
});

describe('sithlords controller', () => {
  var $httpBackend;//takes parameters from user such a GET request and returns a promise
  var $scope;
  var $ControllerConstructor;

  beforeEach(angular.mock.module('jedisApp'));

  beforeEach(angular.mock.inject(($rootScope, $controller) => {
    $ControllerConstructor = $controller;
    $scope = $rootScope.$new();
  }));

  it('should be able to make a controller', () => {
    var sithlordsController = $ControllerConstructor('SithlordsController', {$scope});
      expect(typeof sithlordsController).toBe('object');
      expect(Array.isArray($scope.sithlords)).toBe(true);
      expect(typeof $scope.getAllSith).toBe('function');

  });

  describe('REST requests', () => {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $ControllerConstructor('SithlordsController', {$scope});
    }));

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request to /api/sithlords', () => {
      $httpBackend.expectGET('http://localhost:3000/api/sith-lords').respond(200, [{name: 'test sith'}]);
      $scope.getAllSith();
      $httpBackend.flush();
      expect($scope.sithlords.length).toBe(1);
      expect(Array.isArray($scope.sithlords)).toBe(true);
      expect($scope.sithlords[0].name).toBe('test sith');
    });

    it('should create a new sith', () => {
      $httpBackend.expectPOST('http://localhost:3000/api/sith-lords', {name: 'the sent sith'}).respond(200, {name: 'the response sith'});
        $scope.newSith = {name: 'the new sith'};
        $scope.createSith({name: 'the sent sith'});
        $httpBackend.flush();
        expect($scope.sithlords.length).toBe(1);
        expect($scope.newSith).toBe(null);
        expect($scope.sithlords[0].name).toBe('the response sith');
    });

    it('should be able to update a sith', () => {
      var sith = {_id: 1, editting: true};
      $httpBackend.expectPUT('http://localhost:3000/api/sith-lords' + '/1').respond(200);
      $scope.updateSith(sith);
      $httpBackend.flush();
      expect(sith.editting).toBe(false);
    });

    it('should be able to delete a sith', () => {
      var sith = {_id: 1, name: 'test sith'};
      $scope.sithlords = [sith];
      $httpBackend.expectDELETE('http://localhost:3000/api/sith-lords' + '/1').respond(200);
      $scope.deleteSith(sith);
      $httpBackend.flush();
      expect($scope.sithlords.length).toBe(0);
    });

  });
});
