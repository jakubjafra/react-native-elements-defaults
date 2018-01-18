import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Slider', () => {
    utils.defaultTests(
        'Slider',
        require('react-native-elements/src/slider/Slider'),
        require('../../overwrites/Slider'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
