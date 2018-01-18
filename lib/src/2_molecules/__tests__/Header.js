import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Header', () => {
    utils.defaultTests(
        'Header',
        require('react-native-elements/src/header/Header'),
        require('../../overwrites/Header'),
        {
            outerContainerStyles: {
                backgroundColor: 'red',
            }
        }
    );
});
