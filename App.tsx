import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/components/Tabs';

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'}/>
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
  );
}