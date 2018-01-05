const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/input/Search');
    const __oldModuleDefault__ = __oldModule__.default;

    const Search = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.inputStyle = utils.overrideBottom(props.inputStyle, defaultStyles.inputStyle);

        return __oldModuleDefault__.call(undefined, _.defaultsDeep(newProps, props));
    };

    Search.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Search;
}

module.exports = override;
