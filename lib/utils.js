import { StyleSheet } from 'react-native';

function overrideTop(style, defaultStyle){
    if(style){
        switch(typeof style){
            case 'object':
                if(style instanceof Array){
                    return [...style, defaultStyle];
                } else {
                    return [style, defaultStyle];
                }

            case 'number':
                return [style, defaultStyle];

            default:
                console.warn(style);
                return style;
        }
    } else {
        return defaultStyle;
    }
}

function overrideBottom(style, defaultStyle){
    if(style){
        switch(typeof style){
            case 'object':
                if(style instanceof Array){
                    return [defaultStyle, ...style];
                } else {
                    return [defaultStyle, style];
                }

            case 'number':
                return [defaultStyle, style];

            default:
                console.warn(style);
                return style;
        }
    } else {
        return defaultStyle;
    }
}

function connectTheme(isStyleSheet, namespace, connectorFunction) {
    return (themeProvided) => {
        return connectorFunction(
            isStyleSheet ? StyleSheet.create(themeProvided[namespace]) : themeProvided[namespace]
        );
    }
}

function getThemeFor(theme, namespace, isStyleSheet = true){
    return isStyleSheet ? StyleSheet.create(theme[namespace]) : theme[namespace];
}

function overrideModuleDefault(__oldModule__, overrideFunction){
    return (__oldModule__.default = overrideFunction(__oldModule__.default, __oldModule__));
}

class ModuleOverride {
    constructor(namespace, overrideModule, overrideFunction){
        this.namespace = namespace;
        this.overrideModule = overrideModule;
        this.overrideFunction = overrideFunction;
    }

    useTheme(theme) {
        const defaultStyles = getThemeFor(theme, this.namespace);
        return overrideModuleDefault(
            this.overrideModule,
            this.overrideFunction(defaultStyles)
        );
    }
}

module.exports = {
    ModuleOverride,
    connectTheme,
    getThemeFor,
    overrideTop,
    overrideBottom,
    overrideModuleDefault,
};
