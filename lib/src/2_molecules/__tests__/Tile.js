import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Tile', () => {
    utils.defaultTests(
        'Tile',
        require('react-native-elements/src/tile/Tile'),
        require('../../overwrites/Tile'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
