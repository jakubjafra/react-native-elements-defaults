import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('FormLabel', () => {
    utils.defaultTests(
        'FormLabel',
        require('react-native-elements/src/form/FormLabel'),
        require('../../overwrites/FormLabel'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
