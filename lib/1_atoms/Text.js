const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/text/Text');
    const __oldModuleDefault__ = __oldModule__.default;

    const Text = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

        return __oldModuleDefault__.call(undefined, _.defaults(newProps, props));
    };

    Text.propTypes = __oldModuleDefault__.propTypes;
    Text.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Text;
}

module.exports = override;
