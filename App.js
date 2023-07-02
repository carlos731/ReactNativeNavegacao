import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import TopTabs from './src/navigations/TopTabs';
import StackRoutes from './src/routes/stack.routes';
import Animated from './src/routes/animated.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#004587"
        barStyle="light-content"//light-content
        translucent={false}
        animated={true}
        networkActivityIndicatorVisible={true}
      />
      {/* <TopTabs /> */}
      {/* <StackRoutes/> */}
      <Animated/>
    </NavigationContainer>
  );
}