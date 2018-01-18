import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('FormValidationMessage', () => {
    utils.defaultTests(
        'FormValidationMessage',
        require('react-native-elements/src/form/FormValidationMessage'),
        require('../../overwrites/FormValidationMessage'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
