var statesAndCapital = require('../src/app');

describe('states and Capital', function() {
  describe('all', function() {
    it('should be a collection of strings in an object', function() {
      expect(statesAndCapital.all).to.satisfy(isObjectOfStrings);

      function isObjectOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });
  });

  describe('Each City', function() {
    it('should return `Ikeja` as the Capital of `Lagos`', function() {
      expect(statesAndCapital.all.Lagos).toEquals('Ikeja');
    });
  });
});