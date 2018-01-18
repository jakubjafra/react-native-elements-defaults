import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Search', () => {
    utils.defaultTests(
        'Search',
        require('react-native-elements/src/input/Search'),
        require('../../overwrites/Search'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
