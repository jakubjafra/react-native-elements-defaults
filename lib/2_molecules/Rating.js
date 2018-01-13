const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Rating = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Rating.propTypes = __oldModuleDefault__.propTypes;
        Rating.defaultProps = __oldModuleDefault__.defaultProps;

        return Rating;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/rating', require('react-native-elements/src/rating/Rating'), compose),
};
