require('jasmine-expect');
var statesAndCapital = require('../src/app');

describe('states and Capital', function() {
  describe('all', function() {
    it('should be a collection of strings in an object', function() {
      expect(statesAndCapital.all).toBeObject();
    });
  });

  describe('Each City', function() {
    it('should return `Ikeja` as the Capital of `Lagos`', function() {
      expect(statesAndCapital.all.Lagos).toEqual('Ikeja');
    });
  });
});