const _ = require('lodash');
import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
    text: {
        fontFamily: 'Arial'
    }
});

require('./atoms/Text')(defaultStyles);

module.exports = require('react-native-elements');
