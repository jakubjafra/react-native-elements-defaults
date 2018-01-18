const utils = require('../utils');
const classComponentCompose = require('./_classComponentCompose');

const COMPOSE_NAME = 'FormLabel';
const compose = classComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/form/FormLabel'),
        compose,
        true,
    ),
};
