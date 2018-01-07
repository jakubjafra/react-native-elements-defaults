const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/form/FormValidationMessage');
    const __oldModuleDefault__ = __oldModule__.default;

    class FormValidationMessage extends React.Component {
        constructor(props){
            super(props);
        }

        render(){
            const newProps = {};

            newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
            newProps.labelStyle = utils.overrideBottom(this.props.labelStyle, defaultStyles.labelStyle);

            return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
        }
    }

    FormValidationMessage.propTypes = __oldModuleDefault__.propTypes;
    FormValidationMessage.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = FormValidationMessage;
}

module.exports = override;
