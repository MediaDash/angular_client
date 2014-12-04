'use strict';

describe('Controller: VideobkgCtrl', function () {

  // load the controller's module
  beforeEach(module('newAngApp'));

  var VideobkgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideobkgCtrl = $controller('VideobkgCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
