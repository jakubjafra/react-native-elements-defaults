const invalidate = require('invalidate-module');

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");
const defaultStyles = {
    'molecules/text': {}
};

let OldText, Text;

beforeAll(() => {
    OldText = require('react-native-elements/src/Text/text').default;

    invalidate(require.resolve('react-native-elements/src/Text/text'));

    utils.connectTheme(true, 'molecules/text', require('../Text'))(defaultStyles);
    Text = require('react-native-elements').Text;
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
