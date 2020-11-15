import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './src/screens/MainScreen';
import Colors from './src/constants/colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <MainScreen />
    </PaperProvider>
  );
}