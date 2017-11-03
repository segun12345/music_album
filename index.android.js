import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => (
  <View style={{flex: 1}}>
    <Header name="Albums"/>
    <AlbumList/>
  </View>
);

AppRegistry.registerComponent('Project', () => App)