const _defaults = require('lodash.defaults');

function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/config/colors');
    const __oldModuleDefault__ = __oldModule__.default;

    __oldModule__.default = _defaults(defaultStyles, __oldModuleDefault__);
}

module.exports = override;
