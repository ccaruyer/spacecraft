import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { AppLayout } from '../component/index'

const StarshipScreen
 = () => {
  return (
    <View style={styles.container}>
        <AppLayout title="starship"/>
        <Text></Text>
  </View>
  )
};

export default StarshipScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
    flex:1,
    backgroundColor: 'white',
    
  },
});