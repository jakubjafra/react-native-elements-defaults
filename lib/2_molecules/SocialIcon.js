const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/checkbox/CheckBox');
    const __oldModuleDefault__ = __oldModule__.default;

    const SocialIcon = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);
        newProps.fontStyle = utils.overrideBottom(props.fontStyle, defaultStyles.fontStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    SocialIcon.propTypes = __oldModuleDefault__.propTypes;
    SocialIcon.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = SocialIcon;
}

module.exports = override;
