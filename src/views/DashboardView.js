import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
//import { VictoryPie, VictoryChart, VictoryTheme, VictoryContainer } from "victory-native";

//import Screen from '../components/screen';

const DashboardView = props => {
  return (
    <View style={styles.container}>
      <Text>Text</Text>
      {/* <VictoryPie
          colorScale={['#faed00', '#e0e0e0']}
          
          
          innerRadius={100}
          labels={({ datum }) => ""}
          // animate={{
          //   duration: 2000
          // }}
          data={[
            { x: "Progress", y: 40 },
            { x: "n/a", y: 60 },
          ]}
          containerComponent={<VictoryContainer responsive={false} />}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    // height:100,
    // width:100

  }
});

export default DashboardView;