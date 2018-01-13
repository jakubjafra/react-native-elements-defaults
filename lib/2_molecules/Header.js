const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Header = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.outerContainerStyles = utils.overrideBottom(props.outerContainerStyles, defaultStyles.outerContainerStyles);
            newProps.innerContainerStyles = utils.overrideBottom(props.innerContainerStyles, defaultStyles.innerContainerStyles);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Header.propTypes = __oldModuleDefault__.propTypes;
        Header.defaultProps = __oldModuleDefault__.defaultProps;

        return Header;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/header', require('react-native-elements/src/header/Header'), compose),
};
