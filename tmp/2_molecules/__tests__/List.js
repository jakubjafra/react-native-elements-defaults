import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('List', () => {
    utils.defaultTests(
        'List',
        require('react-native-elements/src/list/List'),
        require('../../overwrites/List'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});
