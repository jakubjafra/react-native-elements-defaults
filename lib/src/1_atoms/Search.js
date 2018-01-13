const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        class Search extends React.Component {
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

        Search.propTypes = __oldModuleDefault__.propTypes;
        Search.defaultProps = __oldModuleDefault__.defaultProps;

        return Search;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/search', require('react-native-elements/src/input/Search'), compose),
};
