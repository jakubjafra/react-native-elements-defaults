const React = require('react');
const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/form/FormInput');
    const __oldModuleDefault__ = __oldModule__.default;

    class FormInput extends React.Component {
        constructor(props){
            super(props);
        }

        render(){
            const newProps = {};

            newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
            newProps.inputStyle = utils.overrideBottom(this.props.inputStyle, defaultStyles.inputStyle);

            return <__oldModuleDefault__ {..._.defaults(newProps, this.props)} />;
        }
    }

    FormInput.propTypes = __oldModuleDefault__.propTypes;
    FormInput.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = FormInput;
}

module.exports = override;
