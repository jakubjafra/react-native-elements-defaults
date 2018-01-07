const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/checkbox/CheckBox');
    const __oldModuleDefault__ = __oldModule__.default;

    const Rating = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Rating.propTypes = __oldModuleDefault__.propTypes;
    Rating.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Rating;
}

module.exports = override;
