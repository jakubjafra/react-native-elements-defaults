import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('FeaturedTile', () => {
    utils.defaultTests(
        'FeaturedTile',
        require('react-native-elements/src/tile/FeaturedTile'),
        require('../../overwrites/FeaturedTile'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
