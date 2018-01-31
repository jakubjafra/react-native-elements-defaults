const lowLevelApi = require('../lowLevelApi');

describe('lowLevelApi', () => {
    it('should be callable', () => {
        expect(typeof lowLevelApi).toEqual('function');
    });
});
