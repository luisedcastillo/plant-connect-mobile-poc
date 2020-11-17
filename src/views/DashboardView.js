import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators'; 
import ScaleCard from '../components/Scale/ScaleCard';
import Screen from '../components/Screen';
import CapitolHeightsService from '../services/capitolHeightsService';
import Colors from '../constants/colors';

const DashboardView = props => {
  const [isLoading, setLoading] = useState(true);
  const [isRefreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  let repeat;

  const refreshScales = () => {
    setRefreshing(true);
    getScales();
    repeat = setTimeout(refreshScales, 30000);
  }

  const getScales = () => {
    console.log("GET SCALES " + new Date());
    CapitolHeightsService
    .getCapitolHeights()
    .then((respnse) => setData(respnse.data.flatMap(m => m.Scales)))
    .catch((error) => console.error("ERROR:" + error))
    .finally(() => {
      setLoading(false);
      setRefreshing(false);
    });
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
      <BarIndicator color={Colors.primary}/>
    </View>
  : <Screen style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderScaleItem}
        keyExtractor={item => item.ScaleId.toString()}
        contentContainerStyle={styles.item}
        refreshing={isRefreshing}
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