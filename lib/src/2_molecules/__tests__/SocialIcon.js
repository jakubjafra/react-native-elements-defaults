import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('SocialIcon', () => {
    utils.defaultTests(
        'SocialIcon',
        require('react-native-elements/src/social/SocialIcon'),
        require('../../overwrites/SocialIcon'),
        {
            style: {
                backgroundColor: 'red',
            }
        }
    );
});
