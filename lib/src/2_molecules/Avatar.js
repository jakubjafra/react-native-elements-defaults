const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
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

        return Avatar;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/avatar', require('react-native-elements/src/avatar/Avatar'), compose),
};
