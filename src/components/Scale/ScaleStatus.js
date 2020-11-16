import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, Surface } from 'react-native-paper';

const ScaleStatus = ({status}) => {
  return(
    <View style={styles.content}>
      <Paragraph>{status.displayText}</Paragraph>
      <Surface style={{...styles.statusLight, backgroundColor: status.DisplayColor}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusLight:{
    marginRight:15, 
    height:20, 
    width:20, 
    borderRadius: 10,
    elevation: 10
  }
})

export default ScaleStatus;