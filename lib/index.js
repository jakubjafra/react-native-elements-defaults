const _ = require('lodash');
import { StyleSheet } from 'react-native';

const oldText = require('react-native-elements/src/text/Text');

const test = StyleSheet.create({
    text: {
        fontFamily: 'Zapfino'
    }
});

const oldTextDefault = oldText.default;
let Text = function (props) {
    let newProps = {
        style: props.style ? [...props.style, test.text] : test.text,
    };

    return oldTextDefault.call(undefined, _.defaultsDeep(newProps, props));
};
Text.propTypes = oldTextDefault.propTypes;
oldText.default = Text;

let elements = require('react-native-elements');

module.exports = elements;
