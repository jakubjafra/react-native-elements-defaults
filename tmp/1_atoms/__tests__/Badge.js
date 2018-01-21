import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Badge', () => {
    utils.defaultTests(
        'Badge',
        require('react-native-elements/src/badge/Badge'),
        require('../../overwrites/Badge'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
