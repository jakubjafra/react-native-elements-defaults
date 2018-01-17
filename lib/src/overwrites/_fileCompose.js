const _defaults = require('lodash.defaults');
const _defaultsDeep = require('lodash.defaultsdeep');
const utils = require('../utils');

module.exports = {
    construct: function(COMPOSE_NAME){
        return function compose(defaults){
            if(defaults.type !== utils.Overwrite.TYPE.FILE)
                throw new Error(`There is no such component as "${COMPOSE_NAME}".`);

            switch(defaults.scope){
                case utils.Overwrite.SCOPE.DEFAULTS:
                    return function(__oldModuleDefault__){
                        return _defaults(defaults.value, __oldModuleDefault__);
                    };

                case utils.Overwrite.SCOPE.DEFAULTS_DEEP:
                    return function(__oldModuleDefault__){
                        return _defaultsDeep(defaults.value, __oldModuleDefault__);
                    };

                case utils.Overwrite.SCOPE.FULL:
                    return function(){
                        return defaults.value;
                    };

                default:
                    throw new Error(`"${defaults.scope}" is not recognized as overwrite scope for "${COMPOSE_NAME}".`);
            }
        };
    }
};
