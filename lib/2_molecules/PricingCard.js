const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const PricingCard = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
            newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        PricingCard.propTypes = __oldModuleDefault__.propTypes;
        PricingCard.defaultProps = __oldModuleDefault__.defaultProps;

        return PricingCard;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/pricingCard', require('react-native-elements/src/pricing/PricingCard'), compose),
};
