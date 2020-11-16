import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ScaleCard from '../components/Scale/ScaleCard';
import Screen from '../components/Screen';
import Colors from '../constants/colors';
import CapitolHeightsService from '../services/capitolHeightsService';

const DashboardView = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let repeat;

  const refreshScales = () => {
    //setLoading(true);
    getScales();
    repeat = setTimeout(refreshScales, 30000);
  }

  const getScales = () => {
    console.log("GET SCALES " + new Date());
    CapitolHeightsService
    .getCapitolHeights()
    .then((respnse) => setData(respnse.data.flatMap(m => m.Scales)))
    .catch((error) => console.error("ERROR:" + error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    refreshScales();

    return () => {
      if(repeat) {
        clearTimeout(repeat);
      }
    }
  }, []);

  const renderScaleItem = (scale) => (
    <ScaleCard style={styles.card} data={scale}/>
  );

  const component = isLoading 
  ? <View style={styles.loading}>
      <ActivityIndicator animating={isLoading} color={Colors.primary} size="large"/>
    </View>
  : <Screen style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderScaleItem}
        keyExtractor={item => item.ScaleId.toString()}
        contentContainerStyle={styles.item}
        refreshing={isLoading}
        onRefresh={getScales}
      />
    </Screen>

  return (component);
}

const styles = StyleSheet.create({
  loading: {
    flex:1, 
    justifyContent:'center'
  },
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