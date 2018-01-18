import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('PricingCard', () => {
    utils.defaultTests(
        'PricingCard',
        require('react-native-elements/src/pricing/PricingCard'),
        require('../../overwrites/PricingCard'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        },
        element => {
            return React.createElement(element, {
                info: ['1 User', 'Basic Support', 'All Core Features'],
                button: { title: 'GET STARTED', icon: 'flight-takeoff' },
            }, null);
        }
    );
});
