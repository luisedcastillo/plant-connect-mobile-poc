import React from 'react';
import { StyleSheet, View } from 'react-native';

const Screen = props => {
  return (
    <View style={styles.screen}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Screen;