const utils = require('../utils');
const functionalComponentCompose = require('./_funcionalComponentCompose');

const COMPOSE_NAME = 'Button';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/buttons/Button'),
        compose,
        true,
    ),
};
