const utils = require('../utils');
const functionalComponentCompose = require('../compose/funcionalComponent');

const COMPOSE_NAME = 'List';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/list/List'),
        compose,
        true,
    ),
};
