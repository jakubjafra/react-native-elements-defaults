const utils = require('../utils');
const _defaultsDeep = require('lodash.defaultsdeep');

// TODO: Fix this to override only specified fonts - not all of them!
function compose(defaultStyles){
    return function(__oldModuleDefault__){
        return _defaultsDeep(defaultStyles, __oldModuleDefault__);
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('quarks/fonts', require('react-native-elements/src/config/fonts'), compose, false),
};
