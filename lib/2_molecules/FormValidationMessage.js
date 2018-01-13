const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        class FormValidationMessage extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                const newProps = {};

                newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
                newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
                newProps.labelStyle = utils.overrideBottom(this.props.labelStyle, defaultStyles.labelStyle);

                return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
            }
        }

        FormValidationMessage.propTypes = __oldModuleDefault__.propTypes;
        FormValidationMessage.defaultProps = __oldModuleDefault__.defaultProps;

        return FormValidationMessage;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/formValidationMessage', require('react-native-elements/src/form/FormValidationMessage'), compose),
};
