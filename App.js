import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Plant Connect PoC</Text>
      <Text>Hello World!! Gabriel....</Text>
      <Button mode="text">
        Press me!
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
