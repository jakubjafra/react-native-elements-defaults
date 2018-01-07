const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Divider = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Divider.propTypes = __oldModuleDefault__.propTypes;
        Divider.defaultProps = __oldModuleDefault__.defaultProps;

        return Divider;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/divider', require('react-native-elements/src/divider/Divider'), compose),
};
