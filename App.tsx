import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Navigator } from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </NavigationContainer>
    );
  }