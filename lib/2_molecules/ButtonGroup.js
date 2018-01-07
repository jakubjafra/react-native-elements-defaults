const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/buttons/Button');
    const __oldModuleDefault__ = __oldModule__.default;

    const ButtonGroup = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.buttonStyle = utils.overrideBottom(props.buttonStyle, defaultStyles.buttonStyle);
        newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);
        newProps.selectedTextStyle = utils.overrideBottom(props.selectedTextStyle, defaultStyles.selectedTextStyle);
        newProps.innerBorderStyle = utils.overrideBottom(props.innerBorderStyle, defaultStyles.innerBorderStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    ButtonGroup.propTypes = __oldModuleDefault__.propTypes;
    ButtonGroup.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = ButtonGroup;
}

module.exports = override;
