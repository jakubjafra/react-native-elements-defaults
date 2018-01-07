const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/list/List');
    const __oldModuleDefault__ = __oldModule__.default;

    const List = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.avatarStyle = utils.overrideBottom(props.avatarStyle, defaultStyles.avatarStyle);
        newProps.avatarContainerStyle = utils.overrideBottom(props.avatarContainerStyle, defaultStyles.avatarContainerStyle);
        newProps.avatarOverlayContainerStyle = utils.overrideBottom(props.avatarOverlayContainerStyle, defaultStyles.avatarOverlayContainerStyle);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.wrapperStyle = utils.overrideBottom(props.wrapperStyle, defaultStyles.wrapperStyle);
        newProps.titleStyle = utils.overrideBottom(props.titleStyle, defaultStyles.titleStyle);
        newProps.titleContainerStyle = utils.overrideBottom(props.titleContainerStyle, defaultStyles.titleContainerStyle);
        newProps.subtitleContainerStyle = utils.overrideBottom(props.subtitleContainerStyle, defaultStyles.subtitleContainerStyle);
        newProps.subtitleStyle = utils.overrideBottom(props.subtitleStyle, defaultStyles.subtitleStyle);
        newProps.rightTitleContainerStyle = utils.overrideBottom(props.rightTitleContainerStyle, defaultStyles.rightTitleContainerStyle);
        newProps.rightTitleStyle = utils.overrideBottom(props.rightTitleStyle, defaultStyles.rightTitleStyle);
        newProps.textInputStyle = utils.overrideBottom(props.textInputStyle, defaultStyles.textInputStyle);
        newProps.textInputContainerStyle = utils.overrideBottom(props.textInputContainerStyle, defaultStyles.textInputContainerStyle);
        newProps.disabledStyle = utils.overrideBottom(props.disabledStyle, defaultStyles.disabledStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    List.propTypes = __oldModuleDefault__.propTypes;
    List.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = List;
}

module.exports = override;
