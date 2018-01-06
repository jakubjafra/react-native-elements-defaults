const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/buttons/Button');
    const __oldModuleDefault__ = __oldModule__.default;

    const Button = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerViewStyle = utils.overrideBottom(props.containerViewStyle, defaultStyles.containerViewStyle);
        newProps.buttonStyle = utils.overrideBottom(props.buttonStyle, defaultStyles.buttonStyle);
        newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);
        newProps.disabledStyle = utils.overrideBottom(props.disabledStyle, defaultStyles.disabledStyle);
        newProps.activityIndicatorStyle = utils.overrideBottom(props.activityIndicatorStyle, defaultStyles.activityIndicatorStyle);

        return __oldModuleDefault__.call(undefined, _.defaultsDeep(newProps, props));
    };

    Button.propTypes = __oldModuleDefault__.propTypes;
    Button.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Button;
}

module.exports = override;
