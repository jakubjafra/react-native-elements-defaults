import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('with no theme applied', () => {
    let OldIcon, Icon;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/Icon': {
            }
        };

        OldIcon = require('react-native-elements/src/icons/Icon').default;

        Icon = utils.connectTheme(true, 'atoms/Icon', require('../Icon'))(defaultStyles);
    });

    test('OldIcon and Icon should be different', () => {
        expect(OldIcon).not.toBe(Icon);
    });

    test('OldIcon renders correctly', () => {
        const tree = renderer.create(<OldIcon name='rowing' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Icon renders correctly', () => {
        const tree = renderer.create(<Icon name='rowing' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldIcon and Icon returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldIcon name='rowing' />).toJSON();
        const tree = renderer.create(<Icon name='rowing' />).toJSON();

        expect(oldTree).toEqual(tree);
    });
});

describe('with basic theme applied', () => {
    let OldIcon, Icon;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/Icon': {
                containerStyle: {
                    backgroundColor: 'red',
                }
            }
        };

        OldIcon = require('react-native-elements/src/icons/Icon').default;

        Icon = utils.connectTheme(true, 'atoms/Icon', require('../Icon'))(defaultStyles);
    });

    test('OldIcon and Icon should be different', () => {
        expect(OldIcon).not.toBe(Icon);
    });

    test('OldIcon renders correctly', () => {
        const tree = renderer.create(<OldIcon name='rowing' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Icon renders correctly', () => {
        const tree = renderer.create(<Icon name='rowing' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldIcon and Icon should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldIcon name='rowing' />).toJSON();
        const tree = renderer.create(<Icon name='rowing' />).toJSON();

        expect(oldTree).not.toEqual(tree);
    });
});
