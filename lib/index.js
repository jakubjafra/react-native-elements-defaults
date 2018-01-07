import { connectTheme } from './utils';

// TODO: Make sure that you're overriding only RNE styles, not the user ones!

// TODO: Move those definitions to the client app
const theme = {
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
        white: '#ffffff',
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
        containerStyle: {
            backgroundColor: 'red',
        },
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
    'molecules/buttonGroup': {
        style: {},
        containerStyle: {},
        buttonStyle: {},
        textStyle: {},
        selectedTextStyle: {},
        innerBorderStyle: {},
    },
    'molecules/avatar': {
        style: {},
        containerStyle: {},
        avatarStyle: {},
        titleStyle: {},
        overlayContainerStyle: {},
        iconStyle: {},
    },
    'molecules/card': {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        titleStyle: {},
        featuredTitleStyle: {},
        featuredSubtitleStyle: {},
        dividerStyle: {},
        imageStyle: {},
        imageWrapperStyle: {},
    },
    'molecules/checkBox': {
        style: {},
        containerStyle: {},
        textStyle: {},
    },
    'molecules/formInput': {
        style: {},
        containerStyle: {
            backgroundColor: 'blue',
        },
        inputStyle: {},
    },
    'molecules/formLabel': {
        style: {},
        containerStyle: {
            backgroundColor: 'green',
        },
        labelStyle: {},
    },
    'molecules/formValidationMessage': {
        style: {},
        containerStyle: {
            backgroundColor: 'orange',
        },
        labelStyle: {},
    },
    'molecules/header': {
        style: {},
        outerContainerStyles: {
            backgroundColor: 'red',
        },
        innerContainerStyles: {},
    },
    'molecules/list': {
        style: {},
        containerStyle: {},
    },
    'molecules/listItem': {
        style: {},
        avatarStyle: {},
        avatarContainerStyle: {},
        avatarOverlayContainerStyle: {},
        containerStyle: {
            backgroundColor: 'orange',
        },
        wrapperStyle: {},
        titleStyle: {},
        titleContainerStyle: {},
        subtitleContainerStyle: {},
        subtitleStyle: {},
        rightTitleContainerStyle: {},
        rightTitleStyle: {},
        textInputStyle: {},
        textInputContainerStyle: {},
        disabledStyle: {},
    },
    'molecules/pricingCard': {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
    },
    'molecules/rating': {
        style: {},
    },
    'molecules/socialIcon': {
        style: {},
        iconStyle: {},
        fontStyle: {},
    },
    'molecules/tile': {
        style: {},
        iconContainerStyle: {},
        titleStyle: {},
        captionStyle: {},
        containerStyle: {
            backgroundColor: 'lightblue',
            borderRadius: 10,
        },
        imageContainerStyle: {},
        contentContainerStyle: {},
    }
};

require('./0_quarks/colors').override.useTheme(theme);
require('./0_quarks/fonts').override.useTheme(theme);

require('./1_atoms/Text').override.useTheme(theme);
require('./1_atoms/Icon').override.useTheme(theme);
require('./1_atoms/Badge').override.useTheme(theme);
require('./1_atoms/Divider').override.useTheme(theme);
require('./1_atoms/Search').override.useTheme(theme);
require('./1_atoms/Slider').override.useTheme(theme);

connectTheme(true, 'molecules/button', require('./2_molecules/Button'))(theme);
connectTheme(true, 'molecules/buttonGroup', require('./2_molecules/ButtonGroup'))(theme);
connectTheme(true, 'molecules/avatar', require('./2_molecules/Avatar'))(theme);
connectTheme(true, 'molecules/card', require('./2_molecules/Card'))(theme);
connectTheme(true, 'molecules/checkBox', require('./2_molecules/CheckBox'))(theme);
connectTheme(true, 'molecules/formInput', require('./2_molecules/FormInput'))(theme);
connectTheme(true, 'molecules/formLabel', require('./2_molecules/FormLabel'))(theme);
connectTheme(true, 'molecules/formValidationMessage', require('./2_molecules/FormValidationMessage'))(theme);
connectTheme(true, 'molecules/header', require('./2_molecules/Header'))(theme);
connectTheme(true, 'molecules/list', require('./2_molecules/List'))(theme);
connectTheme(true, 'molecules/listItem', require('./2_molecules/ListItem'))(theme);
connectTheme(true, 'molecules/pricingCard', require('./2_molecules/PricingCard'))(theme);
connectTheme(true, 'molecules/rating', require('./2_molecules/Rating'))(theme);
connectTheme(true, 'molecules/socialIcon', require('./2_molecules/SocialIcon'))(theme);
connectTheme(true, 'molecules/tile', require('./2_molecules/Tile'))(theme);


module.exports = require('react-native-elements');
