const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const ButtonGroup = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
            newProps.buttonStyle = utils.overrideBottom(props.buttonStyle, defaultStyles.buttonStyle);
            newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);
            newProps.selectedTextStyle = utils.overrideBottom(props.selectedTextStyle, defaultStyles.selectedTextStyle);
            newProps.innerBorderStyle = utils.overrideBottom(props.innerBorderStyle, defaultStyles.innerBorderStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        ButtonGroup.propTypes = __oldModuleDefault__.propTypes;
        ButtonGroup.defaultProps = __oldModuleDefault__.defaultProps;

        return ButtonGroup;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/buttonGroup', require('react-native-elements/src/buttons/ButtonGroup'), compose),
};
