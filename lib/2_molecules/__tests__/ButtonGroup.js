import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('ButtonGroup', () => {
    utils.defaultTests(
        'ButtonGroup',
        require('react-native-elements/src/buttons/ButtonGroup'),
        require('../ButtonGroup'),
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
