const utils = require('../utils');
const fileCompose = require('./_fileCompose');

const COMPOSE_NAME = '$fonts';
const compose = fileCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/config/fonts'),
        compose,
        false,
    ),
};
