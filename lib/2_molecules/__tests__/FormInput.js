import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('FormInput', () => {
    utils.defaultTests(
        'FormInput',
        require('react-native-elements/src/form/FormInput'),
        require('../FormInput'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
