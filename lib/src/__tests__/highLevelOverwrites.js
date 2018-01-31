const highLevelOverwrites = require('../highLevelOverwrites');

describe('highLevelOverwrites', () => {
    it('should contain all components', () => {
        expect(Object.keys(highLevelOverwrites)).toMatchSnapshot();
    });
});
