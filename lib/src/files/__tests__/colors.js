const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = '$colors',
    __oldElement__ = require('react-native-elements/src/config/colors'),
    __element__ = require('../colors'),
    basicTheme = new Overwrite(
        name,
        Overwrite.TYPE.FILE,
        Overwrite.SCOPE.DEFAULTS,
        {
            primary: '#FFFFFF'
        }
    );

describe(name, () => {
    let OldElement, Element;

    beforeAll(() => {
        let defaultStyles = basicTheme;

        OldElement = __oldElement__.default;
        Element = __element__.compose(defaultStyles)(OldElement);
    });

    test(`config/${name} and ${name} should be different`, () => {
        expect(OldElement).not.toBe(Element);
    });

    test(`config/${name} are defined`, () => {
        expect(OldElement).toMatchSnapshot();
    });

    test(`${name} are defined`, () => {
        expect(Element).toMatchSnapshot();
    });

    test(`${name} contains overwriten property for primary color`, () => {
        expect(Element.primary).toEqual('#FFFFFF');
    })
});
