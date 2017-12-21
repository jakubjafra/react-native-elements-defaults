import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements-styled-lib';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Open up App.js to start working on your app!' />
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
