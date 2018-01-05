const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/icons/Icon');
    const __oldModuleDefault__ = __oldModule__.default;

    const Button = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);

        return __oldModuleDefault__.call(undefined, _.defaultsDeep(newProps, props));
    };

    Button.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Button;
}

module.exports = override;
