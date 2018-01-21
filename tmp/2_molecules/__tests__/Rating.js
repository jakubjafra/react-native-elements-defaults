import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Rating', () => {
    utils.defaultTests(
        'Rating',
        require('react-native-elements/src/rating/Rating'),
        require('../../overwrites/Rating'),
        {
            style: {
                backgroundColor: 'red',
            }
        }
    );
});
