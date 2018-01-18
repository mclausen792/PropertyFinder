'use strict';
import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import SearchPage from './SearchPage';

export default class App extends React.Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 100,
  },
  container: {
  flex: 1,
},
});
