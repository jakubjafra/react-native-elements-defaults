const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function compose(defaultStyles) {
    return function(__oldModuleDefault__) {

        const Text = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Text.propTypes = __oldModuleDefault__.propTypes;
        Text.defaultProps = __oldModuleDefault__.defaultProps;

        return Text;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/text', require('react-native-elements/src/text/Text'), compose),
};
