import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

const Screen = props => {
  return (
    <View style={styles.screen}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    backgroundColor: Colors.neutral
  }
})

export default Screen;