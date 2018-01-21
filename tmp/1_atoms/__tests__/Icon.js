import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Icon', () => {
    utils.defaultTests(
        'Icon',
        require('react-native-elements/src/icons/Icon'),
        require('../../overwrites/Icon'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
