import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading, Paragraph } from 'react-native-paper';

const ScalePropertyText = ({label, text, suffix}) => {
  return (
    <View style={styles.content}>
      <Subheading>{label}</Subheading>
      <Paragraph style={styles.label}>{text}</Paragraph>
      {suffix && <Paragraph style={styles.label}>{suffix}</Paragraph>}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft:2
  }
})

export default ScalePropertyText;