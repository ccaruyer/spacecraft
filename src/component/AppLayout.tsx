import React, { ReactElement, ReactNode } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Headline } from 'react-native-paper';
import Offline from './Offline';

import { NetworkProvider } from 'react-native-offline';


interface Props {
  title: string;
  children?: ReactNode;
}

const AppLayout = (props: Props) => {
  return (
    <View style={styles.container}>
      <Headline>{props.title}</Headline>
      {props.children}
      <NetworkProvider>
        <Offline/>
      </NetworkProvider>

    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 36,
    flex:1,
  },
});