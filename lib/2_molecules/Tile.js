const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/tile/Tile');
    const __oldModuleDefault__ = __oldModule__.default;

    const Tile = function (props) {
        const newProps = {};

        newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
        newProps.iconContainerStyle = utils.overrideBottom(props.iconContainerStyle, defaultStyles.iconContainerStyle);
        newProps.titleStyle = utils.overrideBottom(props.titleStyle, defaultStyles.titleStyle);
        newProps.captionStyle = utils.overrideBottom(props.captionStyle, defaultStyles.captionStyle);
        newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
        newProps.imageContainerStyle = utils.overrideBottom(props.imageContainerStyle, defaultStyles.imageContainerStyle);
        newProps.contentContainerStyle = utils.overrideBottom(props.contentContainerStyle, defaultStyles.contentContainerStyle);

        return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
    };

    Tile.propTypes = __oldModuleDefault__.propTypes;
    Tile.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Tile;
}

module.exports = override;
