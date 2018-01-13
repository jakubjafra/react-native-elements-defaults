const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const Button = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.containerViewStyle = utils.overrideBottom(props.containerViewStyle, defaultStyles.containerViewStyle);
            newProps.buttonStyle = utils.overrideBottom(props.buttonStyle, defaultStyles.buttonStyle);
            newProps.textStyle = utils.overrideBottom(props.textStyle, defaultStyles.textStyle);
            newProps.disabledStyle = utils.overrideBottom(props.disabledStyle, defaultStyles.disabledStyle);
            newProps.activityIndicatorStyle = utils.overrideBottom(props.activityIndicatorStyle, defaultStyles.activityIndicatorStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        Button.propTypes = __oldModuleDefault__.propTypes;
        Button.defaultProps = __oldModuleDefault__.defaultProps;

        return Button;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/button', require('react-native-elements/src/buttons/Button'), compose),
};
