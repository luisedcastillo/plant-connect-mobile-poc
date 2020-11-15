import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './src/screens/MainScreen';

export default function Main() {
  return (
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
  );
}