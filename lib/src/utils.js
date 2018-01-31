import {StyleSheet} from 'react-native';

function placeStyleOnTop(style, defaultStyle) {
    if(style) {
        switch(typeof style) {
            case 'object':
                if(style instanceof Array) {
                    return [defaultStyle, ...style];
                } else {
                    return [defaultStyle, style];
                }

            case 'number':
                return [defaultStyle, style];

            default:
                throw new Error('Unexpected style type!');
        }
    } else {
        return defaultStyle;
    }
}

class Overwrite {
    static TYPE = Object.freeze({
        FILE: Symbol("TYPE_FILE"),
        FUNCTIONAL_COMPONENT_ATTRIBUTES: Symbol("TYPE_FUNCTIONAL_COMPONENT_ATTRIBUTES"),
        CLASS_COMPONENT_ATTRIBUTES: Symbol("TYPE_CLASS_COMPONENT_ATTRIBUTES"),
    });

    static SCOPE = Object.freeze({
        FULL: Symbol("SCOPE_FULL"),
        DEFAULTS: Symbol("SCOPE_DEFAULTS"),
        DEFAULTS_DEEP: Symbol("SCOPE_DEFAULTS_DEEP"),
    });

    constructor(name, type, scope, value){
        this.name = name;
        this.type = type;
        this.scope = scope;
        this.value = value;
    }
}

class ModuleOverride {
    constructor(namespace, overrideModule, overrideFunction) {
        this.namespace = namespace;
        this.overrideModule = overrideModule;
        this.overrideFunction = overrideFunction;
    }

    static _overrideModuleDefault(__oldModule__, overrideFunction) {
        return (__oldModule__.default = overrideFunction(__oldModule__.default, __oldModule__));
    }

    _getThemeFor(theme) {
        return theme[this.namespace];
    }

    useTheme(theme) {
        const defaultStyles = this._getThemeFor(theme);

        return ModuleOverride._overrideModuleDefault(
            this.overrideModule,
            this.overrideFunction(defaultStyles)
        );
    }
}

module.exports = {
    Overwrite,
    ModuleOverride,
    placeStyleOnTop: placeStyleOnTop,
};
