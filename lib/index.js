import { StyleSheet } from 'react-native';

const defaultStyles = {
    'quarks/colors': {
        primary: '#9E9E9E',
        primary1: '#4d86f7',
        primary2: '#6296f9',
        secondary: '#8F0CE8',
        secondary2: '#00B233',
        secondary3: '#00FF48',
        grey0: '#393e42',
        grey1: '#43484d',
        grey2: '#5e6977',
        grey3: '#86939e',
        grey4: '#bdc6cf',
        grey5: '#e1e8ee',
        dkGreyBg: '#232323',
        greyOutline: '#bbb',
        searchBg: '#303337',
        disabled: '#dadee0',
        white: '#000000',
        error: '#ff190c',
    },
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

const connectTheme = (styleSheet, namespace, connectorFunction) => {
    return (themeProvided) => {
        return connectorFunction(
            styleSheet ? StyleSheet.create(themeProvided[namespace]) : themeProvided[namespace]
        );
    }
}

connectTheme(false, 'quarks/colors', require('./0_quarks/colors'))(defaultStyles);

connectTheme(true, 'atoms/text', require('./1_atoms/Text'))(defaultStyles);
connectTheme(true, 'atoms/button', require('./1_atoms/Button'))(defaultStyles);

module.exports = require('react-native-elements');
