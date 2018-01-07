const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
// TODO: Badge with typeof value === 'string' should use RNE Text rather than native one...
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/badge/badge');
    const __oldModuleDefault__ = __oldModule__.default;

    const Badge = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.wrapperStyle = utils.overrideBottom(props.wrapperStyle, defaultStyles.wrapperStyle);
        newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);

        return __oldModuleDefault__.call(undefined, _.defaults(newProps, props));
    };

    Badge.propTypes = __oldModuleDefault__.propTypes;
    Badge.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Badge;

    return Badge;
}

module.exports = override;
