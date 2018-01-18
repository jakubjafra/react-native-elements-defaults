const utils = require('../utils');
const functionalComponentCompose = require('../compose/funcionalComponent');

// TODO: Badge with typeof value === 'string' should use RNE Text rather than native one...
const COMPOSE_NAME = 'Badge';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/badge/badge'),
        compose,
        true,
    ),
};
