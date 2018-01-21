import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('CheckBox', () => {
    utils.defaultTests(
        'CheckBox',
        require('react-native-elements/src/checkbox/CheckBox'),
        require('../../overwrites/CheckBox'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
