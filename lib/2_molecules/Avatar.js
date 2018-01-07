const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/avatar/Avatar');
    const __oldModuleDefault__ = __oldModule__.default;

    const Avatar = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.avatarStyle = utils.overrideBottom(props.avatarStyle, defaultStyles.avatarStyle);
        newProps.titleStyle = utils.overrideBottom(props.titleStyle, defaultStyles.titleStyle);
        newProps.overlayContainerStyle = utils.overrideBottom(props.overlayContainerStyle, defaultStyles.overlayContainerStyle);
        newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Avatar.propTypes = __oldModuleDefault__.propTypes;
    Avatar.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Avatar;
}

module.exports = override;
