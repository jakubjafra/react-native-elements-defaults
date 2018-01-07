const utils = require('../utils');
const _defaultsDeep = require('lodash.defaultsdeep');

function compose(defaultStyles){
    return function(__oldModuleDefault__){
        return _defaultsDeep(defaultStyles, __oldModuleDefault__); // TODO: Fix this to override only speified fonts - not all of them!
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('quarks/fonts', require('react-native-elements/src/config/fonts'), compose),
};
