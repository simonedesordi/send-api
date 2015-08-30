jest.dontMock('../ApiConfig');

describe('sum', function() {
    it('return node PORT to be used', function() {
        var config = require('../ApiConfig');
        expect(config.port()).toBe(9090);
    });
});