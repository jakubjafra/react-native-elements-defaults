const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Card = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
            newProps.wrapperStyle = utils.overrideBottom(props.wrapperStyle, defaultStyles.wrapperStyle);
            newProps.titleStyle = utils.overrideBottom(props.titleStyle, defaultStyles.titleStyle);
            newProps.featuredTitleStyle = utils.overrideBottom(props.featuredTitleStyle, defaultStyles.featuredTitleStyle);
            newProps.featuredSubtitleStyle = utils.overrideBottom(props.featuredSubtitleStyle, defaultStyles.featuredSubtitleStyle);
            newProps.dividerStyle = utils.overrideBottom(props.dividerStyle, defaultStyles.dividerStyle);
            newProps.imageStyle = utils.overrideBottom(props.imageStyle, defaultStyles.imageStyle);
            newProps.imageWrapperStyle = utils.overrideBottom(props.imageWrapperStyle, defaultStyles.imageWrapperStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Card.propTypes = __oldModuleDefault__.propTypes;
        Card.defaultProps = __oldModuleDefault__.defaultProps;

        return Card;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/card', require('react-native-elements/src/card/Card'), compose),
};
