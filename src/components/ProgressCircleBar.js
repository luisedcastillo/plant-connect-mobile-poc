import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../constants/colors';

const ProgressBar = ({ percentage, size = 80, width = 12 }) => {
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
            <Text>
              { percentage + "%" }
            </Text>
          )
        }
    </AnimatedCircularProgress>
  );
}

export default ProgressBar;