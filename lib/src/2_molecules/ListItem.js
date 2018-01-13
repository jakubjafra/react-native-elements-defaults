const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const ListItem = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        ListItem.propTypes = __oldModuleDefault__.propTypes;
        ListItem.defaultProps = __oldModuleDefault__.defaultProps;

        return ListItem;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/listItem', require('react-native-elements/src/list/ListItem'), compose),
};
