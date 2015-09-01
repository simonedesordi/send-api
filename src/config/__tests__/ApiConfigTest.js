jest.dontMock('../ApiConfig');

describe('server PORT defined', function() {
    it('return node PORT to be used', function() {

        process.env.PORT = 7777;
        var config = require('../ApiConfig');
        expect(config.port()).toBe('7777');
    });
});

describe('server PORT not defined', function() {
    it('return node PORT not defined as 9090', function() {

        process.env.PORT = '';
        var config = require('../ApiConfig');
        expect(config.port()).toBe('9090');
    });
});