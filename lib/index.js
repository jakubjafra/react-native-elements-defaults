const _ = require('lodash');
import { StyleSheet } from 'react-native';

const defaultStyles = {
    'atoms/text': {
        style: {
            fontFamily: 'Arial'
        }
    },
    'atoms/button': {
        style: {},
        containerViewStyle: {},
        buttonStyle: {
            backgroundColor: 'lightgreen',
            borderRadius: 10,
        },
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    }
};

const connectTheme = (namespace, connectorFunction) => {
    return (themeProvided) => {
        return connectorFunction(StyleSheet.create(themeProvided[namespace]));
    }
}

connectTheme('atoms/text', require('./atoms/Text'))(defaultStyles);
connectTheme('atoms/button', require('./atoms/Button'))(defaultStyles);

module.exports = require('react-native-elements');
