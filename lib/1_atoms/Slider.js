const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/slider/Slider');
    const __oldModuleDefault__ = __oldModule__.default;

    class Slider extends React.Component {
        constructor(props){
            super(props);
        }

        render(){
            const newProps = {};

            newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
            newProps.trackStyle = utils.overrideBottom(this.props.trackStyle, defaultStyles.trackStyle);
            newProps.thumbStyle = utils.overrideBottom(this.props.thumbStyle, defaultStyles.thumbStyle);

            return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
        }
    }

    Slider.propTypes = __oldModuleDefault__.propTypes;
    Slider.defaultProps = __oldModuleDefault__.defaultProps;
    __oldModule__.default = Slider;

    return Slider;
}

module.exports = override;
