const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/divider/Divider');
    const __oldModuleDefault__ = __oldModule__.default;

    const Divider = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Divider.propTypes = __oldModuleDefault__.propTypes;
    Divider.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Divider;

    return Divider;
}

module.exports = override;
