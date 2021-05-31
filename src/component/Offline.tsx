import React from 'react';
import { StyleSheet, View, Button,ScrollView } from 'react-native';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import { NetworkConsumer } from 'react-native-offline';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useQuery } from 'react-query'
import fetchAsync from '../lib/fetch'
import StarshipCard from './StarshipCard';

const queryClient = new QueryClient({})

const StarshipContainer = ()=>{
    const { status, data, error } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
    );
    if(status === 'success'){
      return (
      <View>
        <ScrollView>
        {StarshipCard(data)}
        </ScrollView>
        
      </View>)
    }
    return (<View><Text style={styles.message}>{status}</Text></View>)
  }
type  NetworkState = { isConnected : boolean , } ;
type Props = { children : ( { isConnected } : NetworkState ) => React.ReactNode }  
  
const Offline = () => {
  return (
    <View  style={styles.container}>
      <NetworkConsumer>
      {({ isConnected }) =>
        isConnected ? (
            <QueryClientProvider client={queryClient}>
                <StarshipContainer/>
            </QueryClientProvider>
          
        ) : (
          <View>
            <Text>You are offline</Text>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
    </NetworkConsumer>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    marginHorizontal: 20,
    position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
  },
  Text1:{
    backgroundColor: 'white'
  }
});