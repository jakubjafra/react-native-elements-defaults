const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = 'FormInput',
    __oldElement__ = require('react-native-elements/src/form/FormInput'),
    __element__ = require('../FormInput'),
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
