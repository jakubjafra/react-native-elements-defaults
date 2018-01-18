const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

module.exports = {
    construct: function(COMPOSE_NAME) {
        return function compose(defaults) {
            if(defaults.type !== utils.Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES)
                throw new Error(`There is no such class component as "${COMPOSE_NAME}".`);

            switch(defaults.scope){
                case utils.Overwrite.SCOPE.DEFAULTS:
                    return function(__oldModuleDefault__) {
                        class Component extends React.Component {
                            constructor(props) {
                                super(props);
                            }

                            render() {
                                const newProps = {};

                                Object
                                    .keys(defaults.value)
                                    .forEach(propName => {
                                        newProps[propName] = utils.overrideBottom(this.props[propName], defaults.value[propName]);
                                    });

                                return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
                            }
                        }

                        Component.propTypes = __oldModuleDefault__.propTypes;
                        Component.defaultProps = __oldModuleDefault__.defaultProps;

                        return Component;
                    };

                case utils.Overwrite.SCOPE.FULL:
                    return function(__oldModuleDefault__){
                        const Component = defaults.value;

                        Component.propTypes = __oldModuleDefault__.propTypes;
                        Component.defaultProps = __oldModuleDefault__.defaultProps;

                        return Component;
                    };

                default:
                    throw new Error(`"${defaults.scope}" is not recognized as overwrite scope for "${COMPOSE_NAME}".`);
            }
        }

    }
};
