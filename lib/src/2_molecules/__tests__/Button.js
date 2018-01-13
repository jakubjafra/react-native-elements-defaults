import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Button', () => {
    utils.defaultTests(
        'Button',
        require('react-native-elements/src/buttons/Button'),
        require('../Button'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
