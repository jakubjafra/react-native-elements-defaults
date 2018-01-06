const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/slider/Slider');
    const __oldModuleDefault__ = __oldModule__.default;

    const Slider = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.trackStyle = utils.overrideBottom(props.trackStyle, defaultStyles.trackStyle);
        newProps.thumbStyle = utils.overrideBottom(props.thumbStyle, defaultStyles.thumbStyle);

        return __oldModuleDefault__.call(undefined, _.defaults(newProps, props));
    };

    Slider.propTypes = __oldModuleDefault__.propTypes;
    Slider.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Slider;
}

module.exports = override;
