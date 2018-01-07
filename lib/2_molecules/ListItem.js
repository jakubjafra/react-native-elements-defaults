const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/list/ListItem');
    const __oldModuleDefault__ = __oldModule__.default;

    const ListItem = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    ListItem.propTypes = __oldModuleDefault__.propTypes;
    ListItem.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = ListItem;
}

module.exports = override;
