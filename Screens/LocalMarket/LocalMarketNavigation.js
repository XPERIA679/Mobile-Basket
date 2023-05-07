import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RobinsonsStack from './Robinsons Market/Robinsons Stack';
import PuregoldStack from './Puregold Market/Puregold Stack';
import SavemoreStack from './Savemore Market/Savemore Stack';
import EverStack from './Ever Market/Ever Stack';

const Stack = createNativeStackNavigator();

function LocalMarketNavigation() {
  return (
      <Stack.Navigator>

        <Stack.Screen 
        name="Robinsons" 
        component={RobinsonsStack}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Puregold" 
        component={PuregoldStack}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Savemore" 
        component={SavemoreStack}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Ever" 
        component={EverStack}
        options={{headerShown: false}}
        />

    </Stack.Navigator>
  );
}

export default LocalMarketNavigation;
