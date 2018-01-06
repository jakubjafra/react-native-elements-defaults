const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/card/Card');
    const __oldModuleDefault__ = __oldModule__.default;

    const Card = function (props) {
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

        return __oldModuleDefault__.call(undefined, _.defaults(newProps, props));
    };

    Card.propTypes = __oldModuleDefault__.propTypes;
    Card.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Card;
}

module.exports = override;
