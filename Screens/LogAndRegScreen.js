import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

const Stack = createNativeStackNavigator();

function LogAndRegScreen() {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginStack" component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="RegisterStack" component={RegistrationScreen} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default LogAndRegScreen;
