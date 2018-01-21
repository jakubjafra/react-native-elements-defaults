const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = 'Icon',
    __oldElement__ = require('react-native-elements/src/icons/Icon'),
    __element__ = require('../Icon'),
    noTheme = new Overwrite(
        name,
        Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES,
        Overwrite.SCOPE.DEFAULTS,
        {}
    ),
    basicTheme = new Overwrite(
        name,
        Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES,
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