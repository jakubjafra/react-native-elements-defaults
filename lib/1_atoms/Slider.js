const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/slider/Slider');
    const __oldModuleDefault__ = __oldModule__.default;

    const Search = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.trackStyle = utils.overrideBottom(props.trackStyle, defaultStyles.trackStyle);
        newProps.thumbStyle = utils.overrideBottom(props.thumbStyle, defaultStyles.thumbStyle);

        return __oldModuleDefault__.call(undefined, _.defaults(newProps, props));
    };

    Search.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Search;
}

module.exports = override;
