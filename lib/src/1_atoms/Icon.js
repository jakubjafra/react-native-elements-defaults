const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Icon = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Icon.propTypes = __oldModuleDefault__.propTypes;
        Icon.defaultProps = __oldModuleDefault__.defaultProps;

        return Icon;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/icon', require('react-native-elements/src/icons/Icon'), compose),
};
