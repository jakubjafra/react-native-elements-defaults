// TODO: Make this function immutable.
function override(defaultStyles) {
    const __oldModule__ = require('react-native-elements/src/text/Text');
    const __oldModuleDefault__ = __oldModule__.default;

    const Text = function (props) {
        props.style = (style => {
            if(style){
                switch(typeof style){
                    case 'object':
                        if(style instanceof Array){
                            return [...style, defaultStyles.base];
                        } else {
                            return [style, defaultStyles.base];
                        }

                    case 'number':
                        return [style, defaultStyles.base];

                    default:
                        console.warn(style);
                        return style;
                }
            } else
                return defaultStyles.base;
        })(props.style);

        return __oldModuleDefault__.call(undefined, props);
    };

    Text.propTypes = __oldModuleDefault__.propTypes;
    __oldModule__.default = Text;
}

module.exports = override;
