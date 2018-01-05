const _ = require('lodash');
import { StyleSheet } from 'react-native';

const defaultStyles = {
    'atoms/text': {
        base: {
            fontFamily: 'Arial'
        }
    }
};

const connectTheme = (namespace, connectorFunction) => {
    return (themeProvided) => {
        return connectorFunction(StyleSheet.create(themeProvided[namespace]));
    }
}

connectTheme('atoms/text', require('./atoms/Text'))(defaultStyles);

module.exports = require('react-native-elements');
