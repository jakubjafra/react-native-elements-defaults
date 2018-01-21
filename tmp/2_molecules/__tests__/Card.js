import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Card', () => {
    utils.defaultTests(
        'Card',
        require('react-native-elements/src/card/Card'),
        require('../../overwrites/Card'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
