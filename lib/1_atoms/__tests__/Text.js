import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");
const defaultStyles = {
    'molecules/text': {}
};

utils.connectTheme(true, 'molecules/text', require('../Text'))(defaultStyles);

const Text = require('react-native-elements').Text;

test('renders correctly', () => {
    const tree = renderer.create(<Text>Text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
});
