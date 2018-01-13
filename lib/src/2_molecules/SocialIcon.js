const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const SocialIcon = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.iconStyle = utils.overrideBottom(props.iconStyle, defaultStyles.iconStyle);
            newProps.fontStyle = utils.overrideBottom(props.fontStyle, defaultStyles.fontStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        SocialIcon.propTypes = __oldModuleDefault__.propTypes;
        SocialIcon.defaultProps = __oldModuleDefault__.defaultProps;

        return SocialIcon;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/socialIcon', require('react-native-elements/src/social/SocialIcon'), compose),
};
