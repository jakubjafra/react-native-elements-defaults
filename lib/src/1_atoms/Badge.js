const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Badge with typeof value === 'string' should use RNE Text rather than native one...
function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Badge = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
            newProps.wrapperStyle = utils.overrideBottom(props.wrapperStyle, defaultStyles.wrapperStyle);
            newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Badge.propTypes = __oldModuleDefault__.propTypes;
        Badge.defaultProps = __oldModuleDefault__.defaultProps;

        return Badge;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/badge', require('react-native-elements/src/badge/badge'), compose),
};
