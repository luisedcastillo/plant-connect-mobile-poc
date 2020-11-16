import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ScaleCard from '../components/Scale/ScaleCard';
import Screen from '../components/Screen';
import Colors from '../constants/colors';
import CapitolHeightsService from '../services/capitolHeightsService';

//const capitolHeights = require('../constants/fakes_capitol_heights.json');
//const scales = capitolHeights.flatMap(m => m.Scales);

const DashboardView = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    CapitolHeightsService
      .getCapitolHeights()
      .then((respnse) => setData(respnse.data.flatMap(m => m.Scales)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderScaleItem = (scale) => (
    <ScaleCard style={styles.card} data={scale}/>
  );

  const component = isLoading 
  ? <View style={{flex:1, justifyContent:'center'}}><ActivityIndicator animating={isLoading} color={Colors.primary} size="large"/></View>
  : <Screen style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderScaleItem}
        keyExtractor={item => item.ScaleId}
        contentContainerStyle={styles.item}
      />
    </Screen>

  return (component);
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  card: {
    marginBottom: 10,
  },
  item: {
    paddingBottom: 75
  }
});

export default DashboardView;