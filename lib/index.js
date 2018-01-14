// TODO: Move those definitions to the client app:
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
        style: {}
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
        containerStyle: {},
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

require('./src/0_quarks/colors').override.useTheme(theme);
require('./src/0_quarks/fonts').override.useTheme(theme);

require('./src/1_atoms/Text').override.useTheme(theme);
require('./src/1_atoms/Icon').override.useTheme(theme);
require('./src/1_atoms/Badge').override.useTheme(theme);
require('./src/1_atoms/Divider').override.useTheme(theme);
require('./src/1_atoms/Search').override.useTheme(theme);
require('./src/1_atoms/Slider').override.useTheme(theme);

require('./src/2_molecules/Button').override.useTheme(theme);
require('./src/2_molecules/ButtonGroup').override.useTheme(theme);
require('./src/2_molecules/Avatar').override.useTheme(theme);
require('./src/2_molecules/Card').override.useTheme(theme);
require('./src/2_molecules/CheckBox').override.useTheme(theme);
require('./src/2_molecules/FormInput').override.useTheme(theme);
require('./src/2_molecules/FormLabel').override.useTheme(theme);
require('./src/2_molecules/FormValidationMessage').override.useTheme(theme);
require('./src/2_molecules/Header').override.useTheme(theme);
require('./src/2_molecules/List').override.useTheme(theme);
require('./src/2_molecules/ListItem').override.useTheme(theme);
require('./src/2_molecules/PricingCard').override.useTheme(theme);
require('./src/2_molecules/Rating').override.useTheme(theme);
require('./src/2_molecules/SocialIcon').override.useTheme(theme);
require('./src/2_molecules/Tile').override.useTheme(theme);
require('./src/2_molecules/FeaturedTile').override.useTheme(theme);


module.exports = require('react-native-elements');
