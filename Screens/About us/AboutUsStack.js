import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Aboutus from './Aboutus';

const Stack = createNativeStackNavigator();

function AboutUsNavigation() {
  return (
      <Stack.Navigator>


        <Stack.Screen 
        name="About" 
        component={Aboutus}
        options={{headerShown: false}}
        />
        

    </Stack.Navigator>
  );
}

export default AboutUsNavigation;
