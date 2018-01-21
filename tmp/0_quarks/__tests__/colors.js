describe('with no theme applied', () => {
    let OldColors, Colors;

    beforeAll(() => {
        let defaultStyles = {};

        OldColors = require('react-native-elements/src/config/colors').default;
        Colors = require('../../overwrites/colors').compose(defaultStyles)(OldColors);
    });

    test('should define some default colors', () => {
        expect(OldColors).toMatchSnapshot();
    });

    test('there should be default colors assigned to new Colors', () => {
        expect(OldColors).toEqual(Colors);
    });
});

describe('with basic theme applied', () => {
    let OldColors, Colors;

    beforeAll(() => {
        let defaultStyles = {
            primary: 'red'
        };

        OldColors = require('react-native-elements/src/config/colors').default;
        Colors = require('../../overwrites/colors').compose(defaultStyles)(OldColors);
    });

    test('it should override the default color', () => {
        expect(Colors.primary).toEqual('red');
        expect(Colors).toMatchSnapshot();
    });

    test('there should be default colors assigned to new Colors', () => {
        expect(OldColors).not.toEqual(Colors);
    });
});
