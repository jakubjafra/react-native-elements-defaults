const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = 'Search',
    __oldElement__ = require('react-native-elements/src/input/Search'),
    __element__ = require('../Search'),
    noTheme = new Overwrite(
        name,
        Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES,
        Overwrite.SCOPE.DEFAULTS,
        {}
    ),
    basicTheme = new Overwrite(
        name,
        Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES,
        Overwrite.SCOPE.DEFAULTS,
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );

describe(name, () => {
    testHelperUtils.defaultTests(name, __oldElement__, __element__, noTheme, basicTheme);
});
