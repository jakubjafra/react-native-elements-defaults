import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('ButtonGroup', () => {
    utils.defaultTests(
        'ButtonGroup',
        require('react-native-elements/src/buttons/ButtonGroup'),
        require('../../overwrites/ButtonGroup'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        },
        element => {
            return React.createElement(element, {
                selectedIndex: 1,
                buttons: ['Hello', 'World', 'Buttons'],
            }, null);
        }
    );
});
