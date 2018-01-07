const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/checkbox/CheckBox');
    const __oldModuleDefault__ = __oldModule__.default;

    const PricingCard = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    PricingCard.propTypes = __oldModuleDefault__.propTypes;
    PricingCard.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = PricingCard;
}

module.exports = override;
