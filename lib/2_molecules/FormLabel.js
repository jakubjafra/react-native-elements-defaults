const React = require('react');
const _ = require('lodash');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/form/FormLabel');
    const __oldModuleDefault__ = __oldModule__.default;

    class FormLabel extends React.Component {
        constructor(props){
            super(props);
        }

        render(){
            const newProps = {};

            newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
            newProps.labelStyle = utils.overrideBottom(this.props.labelStyle, defaultStyles.labelStyle);

            return <__oldModuleDefault__ {..._.defaults(newProps, this.props)} />;
        }
    }

    FormLabel.propTypes = __oldModuleDefault__.propTypes;
    FormLabel.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = FormLabel;
}

module.exports = override;
