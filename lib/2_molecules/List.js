const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const List = function(props) {
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

        return List;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/list', require('react-native-elements/src/list/List'), compose),
};
