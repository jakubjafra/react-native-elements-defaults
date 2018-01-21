import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Divider', () => {
    utils.defaultTests(
        'Divider',
        require('react-native-elements/src/divider/Divider'),
        require('../../overwrites/Divider'),
        {
            style: {
                backgroundColor: 'red',
            }
        }
    );
});
