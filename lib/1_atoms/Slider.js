const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        class Slider extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                const newProps = {};

                newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);
                newProps.containerStyle = utils.overrideBottom(this.props.containerStyle, defaultStyles.containerStyle);
                newProps.trackStyle = utils.overrideBottom(this.props.trackStyle, defaultStyles.trackStyle);
                newProps.thumbStyle = utils.overrideBottom(this.props.thumbStyle, defaultStyles.thumbStyle);

                return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
            }
        }

        Slider.propTypes = __oldModuleDefault__.propTypes;
        Slider.defaultProps = __oldModuleDefault__.defaultProps;

        return Slider;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('atoms/slider', require('react-native-elements/src/slider/Slider'), compose),
};
