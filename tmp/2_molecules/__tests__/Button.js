import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Button', () => {
    utils.defaultTests(
        'Button',
        require('react-native-elements/src/buttons/Button'),
        require('../../overwrites/Button'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
