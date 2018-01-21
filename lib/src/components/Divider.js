const utils = require('../utils');
const functionalComponentCompose = require('../compose/functionalComponent');

const COMPOSE_NAME = 'Divider';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/divider/Divider'),
        compose,
        true,
    ),
};
