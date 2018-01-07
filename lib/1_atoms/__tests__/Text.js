import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('empty theme', () => {
    let OldText, Text;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/text': {
            }
        };

        OldText = require('react-native-elements/src/Text/text').default;

        Text = utils.connectTheme(true, 'atoms/text', require('../Text'))(defaultStyles);
    });

    test('OldText and Text should be different', () => {
        expect(OldText).not.toBe(Text);
    });

    test('OldText renders correctly', () => {
        const tree = renderer.create(<OldText>Text</OldText>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Text renders correctly', () => {
        const tree = renderer.create(<Text>Text</Text>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldText and Text returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldText>Text</OldText>).toJSON();
        const tree = renderer.create(<Text>Text</Text>).toJSON();

        expect(oldTree).toEqual(tree);
    });
});

describe('some theme', () => {
    let OldText, Text;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/text': {
                style: {
                    fontFamily: 'Arial',
                }
            }
        };

        OldText = require('react-native-elements/src/Text/text').default;

        Text = utils.connectTheme(true, 'atoms/text', require('../Text'))(defaultStyles);
    });

    test('OldText and Text should be different', () => {
        expect(OldText).not.toBe(Text);
    });

    test('OldText renders correctly', () => {
        const tree = renderer.create(<OldText>Text</OldText>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Text renders correctly', () => {
        const tree = renderer.create(<Text>Text</Text>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldText and Text should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldText>Text</OldText>).toJSON();
        const tree = renderer.create(<Text>Text</Text>).toJSON();

        expect(oldTree).not.toEqual(tree);
    });
});
