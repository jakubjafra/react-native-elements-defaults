const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        class FormInput extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                const newProps = {};

                newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
                newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
                newProps.inputStyle = utils.overrideBottom(this.props.inputStyle, defaultStyles.inputStyle);

                return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
            }
        }

        FormInput.propTypes = __oldModuleDefault__.propTypes;
        FormInput.defaultProps = __oldModuleDefault__.defaultProps;

        return FormInput;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/formInput', require('react-native-elements/src/form/FormInput'), compose),
};
