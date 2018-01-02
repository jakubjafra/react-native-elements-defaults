function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/text/Text');
    const __oldModuleDefault__ = __oldModule__.default;

    const Text = function (props) {
        props.style = (style => {
            if(style){
                switch(typeof style){
                    case 'object':
                        if(style instanceof Array){
                            return [...style, defaultStyles.text];
                        } else {
                            return [style, defaultStyles.text];
                        }

                    case 'number':
                        return [style, defaultStyles.text];

                    default:
                        console.warn(style);
                        return style;
                }
            } else
                return defaultStyles.text;
        })(props.style);

        return __oldModuleDefault__.call(undefined, props);
    };

    Text.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Text;
}

module.exports = override;
