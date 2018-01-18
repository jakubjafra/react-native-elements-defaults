const utils = require('./src/utils');
const Overwrite = utils.Overwrite;

const overwrites = require('./src/overwrites');

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
    new Overwrite('Search', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        inputStyle: {},
    }),
    new Overwrite('Slider', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        trackStyle: {},
        thumbStyle: {},
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
    new Overwrite('Tile', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconContainerStyle: {},
        titleStyle: {},
        captionStyle: {},
        containerStyle: {},
        imageContainerStyle: {},
        contentContainerStyle: {},
    }),
    new Overwrite('SocialIcon', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        iconStyle: {},
        fontStyle: {},
    }),
    new Overwrite('Header', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        outerContainerStyles: {},
        innerContainerStyles: {},
    }),
    new Overwrite('List', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
    }),
    new Overwrite('ListItem', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
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
    }),
    new Overwrite('PricingCard', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        wrapperStyle: {},
    }),
    new Overwrite('Rating', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
    }),
    new Overwrite('FormInput', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        inputStyle: {},
    }),
    new Overwrite('FormLabel', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        labelStyle: {},
    }),
    new Overwrite('FormValidationMessage', Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {},
        containerStyle: {},
        labelStyle: {},
    }),
];

input.forEach(overwrite => {
    overwrites[overwrite.name].override.useTheme({
        [overwrite.name]: overwrite,
    });
});

module.exports = require('react-native-elements');
