import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import ProgressCircleBar from '../components/ProgressCircleBar';

const DashboardView = props => {
  return (
    <ProgressCircleBar percentage={75} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "gray",
    // height:100,
    // width:100

  }
});

export default DashboardView;