import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Divider', () => {
    utils.defaultTests(
        'Divider',
        require('react-native-elements/src/divider/Divider'),
        require('../Divider'),
        {
            style: {
                backgroundColor: 'red',
            }
        }
    );
});
