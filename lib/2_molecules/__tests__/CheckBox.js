import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('CheckBox', () => {
    utils.defaultTests(
        'CheckBox',
        require('react-native-elements/src/checkbox/CheckBox'),
        require('../CheckBox'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
