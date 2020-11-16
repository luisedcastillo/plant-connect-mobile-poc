import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import DashboardView from './DashboardView';

const MainView = props => {

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content style={styles.title} title={<Image source={require('../assets/images/plant_connect_logo.png')}/>} />
      </Appbar.Header>
      <DashboardView />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center', 
    marginTop:-20
  }
})

export default MainView;