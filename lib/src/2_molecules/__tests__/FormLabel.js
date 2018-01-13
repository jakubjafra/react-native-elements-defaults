import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('FormLabel', () => {
    utils.defaultTests(
        'FormLabel',
        require('react-native-elements/src/form/FormLabel'),
        require('../FormLabel'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
