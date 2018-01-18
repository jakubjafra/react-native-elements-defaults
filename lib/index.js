const utils = require('./src/utils');
const Overwrite = utils.Overwrite;

const overwrites = require('./src/overwrites/_overwrites');

// Nomenclature:
// $something - overwriting some config file
// Something - overwriting "Something" component

const input = [
    new Overwrite('$colors', Overwrite.TYPE.FILE, Overwrite.SCOPE.DEFAULTS, {
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
    }),
    new Overwrite('$fonts', Overwrite.TYPE.FILE, Overwrite.SCOPE.DEFAULTS_DEEP, {
        ios: {},
        android: {},
    }),
    new Overwrite('Text', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {
            fontFamily: 'Times New Roman',
        },
    }),
    new Overwrite('Icon', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconStyle: {},
        containerStyle: {},
    }),
    new Overwrite('Badge', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        textStyle: {},
    }),
    new Overwrite('Divider', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
    }),
    new Overwrite('Avatar', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        avatarStyle: {},
        titleStyle: {},
        overlayContainerStyle: {},
        iconStyle: {},
    }),
    new Overwrite('Button', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerViewStyle: {},
        buttonStyle: {},
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    }),
    new Overwrite('ButtonGroup', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerViewStyle: {},
        buttonStyle: {},
        textStyle: {},
        disabledStyle: {},
        activityIndicatorStyle: {},
    }),
    new Overwrite('Card', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
        titleStyle: {},
        featuredTitleStyle: {},
        featuredSubtitleStyle: {},
        dividerStyle: {},
        imageStyle: {},
        imageWrapperStyle: {},
    }),
    new Overwrite('CheckBox', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        textStyle: {},
    }),
    new Overwrite('FeaturedTile', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconContainerStyle: {},
        titleStyle: {},
        captionStyle: {},
        containerStyle: {},
        imageContainerStyle: {},
        contentContainerStyle: {},
    }),
];

input.forEach(overwrite => {
    overwrites[overwrite.name].override.useTheme({
        [overwrite.name]: overwrite,
    });
});

// TODO: Move those definitions to the client app AS AN ARRAY!
const theme = {
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
    'molecules/formInput': {
        style: {},
        containerStyle: {},
        inputStyle: {},
    },
    'molecules/formLabel': {
        style: {},
        containerStyle: {},
        labelStyle: {},
    },
    'molecules/formValidationMessage': {
        style: {},
        containerStyle: {},
        labelStyle: {},
    },
    'molecules/header': {
        style: {},
        outerContainerStyles: {},
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
        containerStyle: {},
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
        containerStyle: {},
        imageContainerStyle: {},
        contentContainerStyle: {},
    },
};

require('./src/overwrites/Icon').override.useTheme(theme);
require('./src/overwrites/Badge').override.useTheme(theme);
require('./src/overwrites/Divider').override.useTheme(theme);
require('./src/1_atoms/Search').override.useTheme(theme);
require('./src/1_atoms/Slider').override.useTheme(theme);

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


module.exports = require('react-native-elements');
