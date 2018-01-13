const utils = require('../utils');
const _defaults = require('lodash.defaults');

function compose(defaultStyles){
    return function(__oldModuleDefault__){
        return _defaults(defaultStyles, __oldModuleDefault__);
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('quarks/colors', require('react-native-elements/src/config/colors'), compose, false),
};
