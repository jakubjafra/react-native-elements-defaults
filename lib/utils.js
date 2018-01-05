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

module.exports = {
    overrideTop,
    overrideBottom,
};
