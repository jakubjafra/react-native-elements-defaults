const _defaults = require('lodash.defaults');
const utils = require('../utils');

const COMPOSE_NAME = 'Text';

function compose(defaults) {
    console.log(defaults);

    if(defaults.type !== utils.Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES)
        throw new Error(`There is no such class component as "${COMPOSE_NAME}".`);

    switch(defaults.scope){
        case utils.Overwrite.SCOPE.DEFAULTS:
            return function(__oldModuleDefault__) {
                const Text = function(props) {
                    const newProps = {};

                    newProps.style = utils.overrideBottom(props.style, defaults.value.style);

                    return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
                };

                Text.propTypes = __oldModuleDefault__.propTypes;
                Text.defaultProps = __oldModuleDefault__.defaultProps;

                return Text;
            };

        case utils.Overwrite.SCOPE.FULL:
            return function(__oldModuleDefault__){
                const Text = defaults.value;

                Text.propTypes = __oldModuleDefault__.propTypes;
                Text.defaultProps = __oldModuleDefault__.defaultProps;

                return Text;
            };

        default:
            throw new Error(`"${defaults.scope}" is not recognized as overwrite scope for "${COMPOSE_NAME}".`);
    }


}

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/text/Text'),
        compose,
        true,
    ),
};
