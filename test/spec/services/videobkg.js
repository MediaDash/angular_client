'use strict';

describe('Service: videoBkg', function () {

  // load the service's module
  beforeEach(module('newAngApp'));

  // instantiate service
  var videoBkg;
  beforeEach(inject(function (_videoBkg_) {
    videoBkg = _videoBkg_;
  }));

  it('should do something', function () {
    expect(!!videoBkg).toBe(true);
  });

});
