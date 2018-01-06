import { StyleSheet } from 'react-native';

// TODO: Make sure that you're overriding only RNE styles, not the user ones!

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
    'quarks/fonts': {
        ios: {},
        android: {},
    },
    // ---
    'atoms/text': {
        style: {
            fontFamily: 'Times New Roman',
        }
    },
    'atoms/icon': {
        style: {},
        iconStyle: {},
        containerStyle: {},
    },
    'atoms/badge': {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {},
    },
    'atoms/divider': {
        style: {},
    },
    'atoms/search': {
        style: {},
        containerStyle: {},
        inputStyle: {},
    },
    'atoms/slider': {
        style: {},
        trackStyle: {},
        thumbStyle: {},
    },
    // ---
    'molecules/button': {
        style: {},
        containerViewStyle: {},
        buttonStyle: {
            backgroundColor: 'lightgreen',
            borderRadius: 10,
        },
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    },
    'molecules/avatar': {
        style: {},
        containerStyle: {},
        avatarStyle: {},
        titleStyle: {},
        overlayContainerStyle: {},
        iconStyle: {},
    },
    'molecules/checkbox': {
        style: {},
        containerStyle: {},
        textStyle: {},
    },
};

const connectTheme = (styleSheet, namespace, connectorFunction) => {
    return (themeProvided) => {
        return connectorFunction(
            styleSheet ? StyleSheet.create(themeProvided[namespace]) : themeProvided[namespace]
        );
    }
}

connectTheme(false, 'quarks/colors', require('./0_quarks/colors'))(defaultStyles);
connectTheme(false, 'quarks/fonts', require('./0_quarks/fonts'))(defaultStyles);

connectTheme(true, 'atoms/text', require('./1_atoms/Text'))(defaultStyles);
connectTheme(true, 'atoms/icon', require('./1_atoms/Icon'))(defaultStyles);
connectTheme(true, 'atoms/badge', require('./1_atoms/Badge'))(defaultStyles);
connectTheme(true, 'atoms/divider', require('./1_atoms/Divider'))(defaultStyles);
connectTheme(true, 'atoms/search', require('./1_atoms/Search'))(defaultStyles);
connectTheme(true, 'atoms/slider', require('./1_atoms/Slider'))(defaultStyles);

connectTheme(true, 'molecules/button', require('./2_molecules/Button'))(defaultStyles);
// TODO: ButtonGroup
connectTheme(true, 'molecules/avatar', require('./2_molecules/Avatar'))(defaultStyles);
// TODO: Card
connectTheme(true, 'molecules/checkbox', require('./2_molecules/CheckBox'))(defaultStyles);
// TODO: form/*...
// TODO: header/*...
// TODO: list/*...
// TODO: PricingCard
// TODO: Rating
// TODO: SocialIcon
// TODO: Tile


module.exports = require('react-native-elements');
