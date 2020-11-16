import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Card, Surface } from 'react-native-paper';
import ProgressCircleBar from '../ProgressCircleBar';
import ScaleText from './ScaleText';
import ScaleService from '../../services/scaleService';

const LeftContent = props => <Surface {...props} />

const ScaleCard = ({style, data}) => {
  const scale = data.item;
  const status = ScaleService.BuildStatus(scale);
  
  return (
    <View style={style}>
      <Card >
        <Card.Title 
          title={scale.ScaleDesignator} 
          subtitle={status?.displayName} 
          right={LeftContent} 
          rightStyle={{...styles.statusLight, backgroundColor: status?.displayColor }}/>
        <Card.Content>
          <View style={styles.content}>
            <ProgressCircleBar percentage={scale.PercenatageTarget} />
            <ScaleText scale={scale} />
          </View>
        </Card.Content>
      </Card>
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

export default ScaleCard;