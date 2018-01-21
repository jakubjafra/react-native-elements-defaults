const overwrites = require('../overwrites');

describe('overwrites', () => {
    it('should contain all components', () => {
        expect(Object.keys(overwrites)).toMatchSnapshot();
    });
});
