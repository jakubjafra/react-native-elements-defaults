const utils = require('../utils');
const classComponentCompose = require('../compose/classComponent');

const COMPOSE_NAME = 'Slider';
const compose = classComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/slider/Slider'),
        compose,
        true,
    ),
};
