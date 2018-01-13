const React = require('react');
const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        class Rating extends React.Component {
            constructor(props){
                super(props);
            }

            render(){
                const newProps = {};

                newProps.style = utils.overrideBottom(this.props.style, defaultStyles.style);

                return <__oldModuleDefault__ {..._defaults(newProps, this.props)} />;
            }
        }

        Rating.propTypes = __oldModuleDefault__.propTypes;
        Rating.defaultProps = __oldModuleDefault__.defaultProps;

        return Rating;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/rating', require('react-native-elements/src/rating/Rating'), compose),
};
