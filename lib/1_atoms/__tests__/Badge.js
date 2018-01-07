import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('with no theme applied', () => {
    let OldBadge, Badge;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/badge': {
            }
        };

        OldBadge = require('react-native-elements/src/badge/badge').default;

        Badge = utils.connectTheme(true, 'atoms/badge', require('../Badge'))(defaultStyles);
    });

    test('OldBadge and Badge should be different', () => {
        expect(OldBadge).not.toBe(Badge);
    });

    test('OldBadge renders correctly', () => {
        const tree = renderer.create(<OldBadge>Badge</OldBadge>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Badge renders correctly', () => {
        const tree = renderer.create(<Badge>Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldBadge and Badge returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldBadge>Badge</OldBadge>).toJSON();
        const tree = renderer.create(<Badge>Badge</Badge>).toJSON();

        expect(JSON.stringify(oldTree)).toEqual(JSON.stringify(tree));
    });
});

describe('with basic theme applied', () => {
    let OldBadge, Badge;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/badge': {
                containerStyle: {
                    fontFamily: 'Arial',
                }
            }
        };

        OldBadge = require('react-native-elements/src/badge/badge').default;

        Badge = utils.connectTheme(true, 'atoms/badge', require('../Badge'))(defaultStyles);
    });

    test('OldBadge and Badge should be different', () => {
        expect(OldBadge).not.toBe(Badge);
    });

    test('OldBadge renders correctly', () => {
        const tree = renderer.create(<OldBadge>Badge</OldBadge>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Badge renders correctly', () => {
        const tree = renderer.create(<Badge>Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldBadge and Badge should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldBadge>Badge</OldBadge>).toJSON();
        const tree = renderer.create(<Badge>Badge</Badge>).toJSON();

        expect(oldTree).not.toEqual(tree);
    });
});
