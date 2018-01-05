const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/divider/Divider');
    const __oldModuleDefault__ = __oldModule__.default;

    const Divider = function (props) {
        const newProps = {};

        newProps.style = utils.overrideTop(props.style, defaultStyles.style);

        return __oldModuleDefault__.call(undefined, _.defaultsDeep(newProps, props));
    };

    Divider.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Divider;
}

module.exports = override;
