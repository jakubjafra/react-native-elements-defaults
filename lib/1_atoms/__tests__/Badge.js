import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

describe('with no theme applied', () => {
    let OldBadge, Badge;

    beforeAll(() => {
        let defaultStyles = {};

        OldBadge = require('react-native-elements/src/badge/badge').default;
        Badge = require('../Badge').compose(defaultStyles)(OldBadge);
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
            containerStyle: {
                fontFamily: 'Arial',
            }
        };

        OldBadge = require('react-native-elements/src/badge/badge').default;
        Badge = require('../Badge').compose(defaultStyles)(OldBadge);
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
