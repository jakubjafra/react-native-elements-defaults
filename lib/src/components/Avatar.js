const utils = require('../utils');
const functionalComponentCompose = require('../compose/funcionalComponent');

const COMPOSE_NAME = 'Avatar';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/avatar/Avatar'),
        compose,
        true,
    ),
};
