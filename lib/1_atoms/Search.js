const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/input/Search');
    const __oldModuleDefault__ = __oldModule__.default;

    class Search extends React.Component {
        constructor(props){
            super(props);
        }

        render(){
            const newProps = {};

            newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
            newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
            newProps.inputStyle = utils.overrideBottom(this.props.inputStyle, defaultStyles.inputStyle);

            return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
        }
    }

    Search.propTypes = __oldModuleDefault__.propTypes;
    Search.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Search;

    return Search;
}

module.exports = override;
