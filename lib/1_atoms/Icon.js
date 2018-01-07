const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/icons/Icon');
    const __oldModuleDefault__ = __oldModule__.default;

    const Icon = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Icon.propTypes = __oldModuleDefault__.propTypes;
    Icon.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Icon;

    return Icon;
}

module.exports = override;
