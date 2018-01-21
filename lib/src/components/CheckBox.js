const utils = require('../utils');
const functionalComponentCompose = require('../compose/functionalComponent');

const COMPOSE_NAME = 'CheckBox';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/checkbox/CheckBox'),
        compose,
        true,
    ),
};
