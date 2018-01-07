describe('with no theme applied', () => {
    let OldFonts, Fonts;

    beforeAll(() => {
        let defaultStyles = {};

        OldFonts = require('react-native-elements/src/config/fonts').default;
        Fonts = require('../fonts').compose(defaultStyles)(OldFonts);

        console.log(OldFonts, Fonts);
    });

    test('should define some default colors', () => {
        expect(OldFonts).toMatchSnapshot();
    });

    test('there should be default colors assigned to new Fonts', () => {
        expect(OldFonts).toEqual(Fonts);
    });
});

describe('with basic theme applied', () => {
    let OldFonts, Fonts;

    beforeAll(() => {
        let defaultStyles = {
            android: {
                regular: {
                    fontFamily: 'serif'
                }
            }
        };

        OldFonts = require('react-native-elements/src/config/fonts').default;
        Fonts = require('../colors').compose(defaultStyles)(OldFonts);
    });

    test('it should override the default color', () => {
        expect(Fonts.android.regular.fontFamily).toEqual('serif');
        expect(Fonts).toMatchSnapshot();
    });

    test('there should be default colors assigned to new Fonts', () => {
        expect(OldFonts).not.toEqual(Fonts);
    });
});
