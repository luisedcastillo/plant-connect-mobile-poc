import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ScaleCard from '../components/Scale/ScaleCard';
import Screen from '../components/Screen';

const capitolHeights = require('../constants/fakes_capitol_heights.json');

const DashboardView = props => {

  const scales = capitolHeights.flatMap(m => m.Scales);
  const renderScaleItem = (scale) => (
    <ScaleCard style={styles.card} data={scale}/>
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        data={scales}
        renderItem={renderScaleItem}
        keyExtractor={item => item.ScaleId}
        contentContainerStyle={{paddingBottom:190}}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  }
});

export default DashboardView;