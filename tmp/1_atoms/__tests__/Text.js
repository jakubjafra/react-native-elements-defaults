import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../../lib/src/testHelperUtils';

describe('Text', () => {
    utils.defaultTests(
        'Text',
        require('react-native-elements/src/text/Text'),
        require('../../overwrites/Text'),
        {
            style: {
                fontFamily: 'Arial',
            }
        }
    );
});
