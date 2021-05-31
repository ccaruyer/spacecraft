import React from 'react';
import { StyleSheet,Text, View,FlatList,ScrollView } from 'react-native';
import { Button, Card, } from 'react-native-paper';
import { useQuery } from 'react-query'
import fetchAsync from '../lib/fetch'

const StarshipCard = (data: any) => {
    return (
        
            <FlatList
                data={data.results}
                renderItem={({ item, index, separators }) => (
                <View style={styles.container}>
                    <Text> {item.name}</Text>
                    <Text> {item.model}</Text>
                    <Text> {item.manufacturer}</Text>
                    <Text> {item.cost_in_credits}</Text>
                </View>
            )}
            />
    )
};

export default StarshipCard;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      
      backgroundColor: 'black',
    },
  });