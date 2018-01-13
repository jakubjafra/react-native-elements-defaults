import {StyleSheet} from 'react-native';

function overrideBottom(style, defaultStyle) {
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



class ModuleOverride {
    constructor(namespace, overrideModule, overrideFunction, isStyleSheet = true) {
        this.namespace = namespace;
        this.overrideModule = overrideModule;
        this.overrideFunction = overrideFunction;
        this.isStyleSheet = isStyleSheet;
    }

    static _overrideModuleDefault(__oldModule__, overrideFunction) {
        return (__oldModule__.default = overrideFunction(__oldModule__.default, __oldModule__));
    }
    _getThemeFor(theme) {
        return this.isStyleSheet ? StyleSheet.create(theme[this.namespace]) : theme[this.namespace];
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
    ModuleOverride,
    overrideBottom,
};
