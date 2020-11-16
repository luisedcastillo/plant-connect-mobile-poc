import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScalePrpertyText from './ScalePropertyText';
import Labels from '../../constants/labels';

const ScaleText = ({scale}) => {
  return (
    <View style={styles.content}>
      <View style={styles.textContainer}>
        <ScalePrpertyText
          label={Labels.dailyGoal}
          text={scale.DailyProductionGoal} />
        <ScalePrpertyText
          label={Labels.daily}
          text={scale.ProdctionToday} />
        <ScalePrpertyText
          label={Labels.scale}
          text={scale.ScaleTotal} />
      </View>
      <View style={styles.textContainer}>
        <ScalePrpertyText
          label={Labels.rate}
          text={scale.ActualRate} 
          suffix={Labels.rateMeasure}/>
        <ScalePrpertyText
          label={Labels.speed}
          text={scale.ActualSpeed} 
          suffix={Labels.speedMeasure}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    marginLeft:10, 
    minWidth:90
  }
})

export default ScaleText;