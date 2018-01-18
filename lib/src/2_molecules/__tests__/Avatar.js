import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Avatar', () => {
    utils.defaultTests(
        'Avatar',
        require('react-native-elements/src/avatar/Avatar'),
        require('../../overwrites/Avatar'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
