import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Icon', () => {
    utils.defaultTests(
        'Icon',
        require('react-native-elements/src/icons/Icon'),
        require('../Icon'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
