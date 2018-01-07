import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('with no theme applied', () => {
    let OldDivider, Divider;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/divider': {
            }
        };

        OldDivider = require('react-native-elements/src/divider/Divider').default;

        Divider = utils.connectTheme(true, 'atoms/divider', require('../Divider'))(defaultStyles);
    });

    test('OldDivider and Divider should be different', () => {
        expect(OldDivider).not.toBe(Divider);
    });

    test('OldDivider renders correctly', () => {
        const tree = renderer.create(<OldDivider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Divider renders correctly', () => {
        const tree = renderer.create(<Divider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldDivider and Divider returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldDivider />).toJSON();
        const tree = renderer.create(<Divider />).toJSON();

        expect(JSON.stringify(oldTree)).toEqual(JSON.stringify(tree));
    });
});

describe('with basic theme applied', () => {
    let OldDivider, Divider;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/divider': {
                style: {
                    backgroundColor: 'red',
                }
            }
        };

        OldDivider = require('react-native-elements/src/divider/Divider').default;

        Divider = utils.connectTheme(true, 'atoms/divider', require('../Divider'))(defaultStyles);
    });

    test('OldDivider and Divider should be different', () => {
        expect(OldDivider).not.toBe(Divider);
    });

    test('OldDivider renders correctly', () => {
        const tree = renderer.create(<OldDivider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Divider renders correctly', () => {
        const tree = renderer.create(<Divider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldDivider and Divider should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldDivider />).toJSON();
        const tree = renderer.create(<Divider />).toJSON();

        expect(oldTree).not.toEqual(tree);
    });
});
