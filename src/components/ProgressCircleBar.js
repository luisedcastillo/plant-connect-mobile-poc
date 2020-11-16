import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Paragraph } from 'react-native-paper';
import Colors from '../constants/colors';
import ScaleService from '../services/scaleService';

const ProgressCircleBar = ({ percentage, size = 80, width = 12 }) => {
  const cleanPercentage = ScaleService.cleanPercentage(percentage);

  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={cleanPercentage}
      tintColor={Colors.accent}
      rotation={0}
      backgroundColor={Colors.neutral}>
        {
          (fill) => (
            <Paragraph style={styles.innerText}>
              { cleanPercentage }
            </Paragraph>
          )
        }
    </AnimatedCircularProgress>
  );
}

const styles = StyleSheet.create({
  innerText:{
    color: Colors.neutralBold
  }
})

export default ProgressCircleBar;