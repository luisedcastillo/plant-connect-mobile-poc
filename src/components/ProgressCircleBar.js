import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Subheading } from 'react-native-paper';
import Colors from '../constants/colors';

const ProgressCircleBar = ({ percentage, size = 80, width = 12 }) => {
  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={percentage}
      tintColor={Colors.accent}
      rotation={0}
      backgroundColor={Colors.neutral}>
        {
          (fill) => (
            <Subheading style={styles.innerText}>
              { percentage + "%" }
            </Subheading>
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