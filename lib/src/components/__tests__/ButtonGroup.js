import 'react-native';
import React from 'react';

const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = 'ButtonGroup',
    __oldElement__ = require('react-native-elements/src/buttons/ButtonGroup'),
    __element__ = require('../ButtonGroup'),
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
            containerViewStyle: {
                backgroundColor: 'red',
            }
        }
    );

describe(name, () => {
    testHelperUtils.defaultTests(name, __oldElement__, __element__, noTheme, basicTheme,
        element => {
            return React.createElement(element, {
                selectedIndex: 1,
                buttons: ['Hello', 'World', 'Buttons'],
            }, null);
        });
});
