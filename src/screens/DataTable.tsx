import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from 'react-native';
import { data } from '../../data';

const DataTable = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>

        <FlatList
           data={data.results}
            renderItem={({ item, index, separators }) => (
                <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.name}</Text>
                            <Text>{item.model}</Text>
                            <Text>{item.manufacturer}</Text>
                            <Text>{item.cost_in_credits}</Text>
                            <Text>{item.length}</Text>
                            <Text>{item.max_atmosphering_speed}</Text>
                            <Text>{item.crew}</Text>
                            <Text>{item.passengers}</Text>
                            <br></br>
                </View>
            )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default DataTable;