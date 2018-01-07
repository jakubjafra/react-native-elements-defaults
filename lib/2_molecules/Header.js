const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/header/Header');
    const __oldModuleDefault__ = __oldModule__.default;

    const Header = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.outerContainerStyles = utils.overrideBottom(props.outerContainerStyles, defaultStyles.outerContainerStyles);
        newProps.innerContainerStyles = utils.overrideBottom(props.innerContainerStyles, defaultStyles.innerContainerStyles);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Header.propTypes = __oldModuleDefault__.propTypes;
    Header.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Header;
}

module.exports = override;
