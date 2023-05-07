import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactUs from './ContactUs';

const Stack = createNativeStackNavigator();

function ContactUsNavigation() {
  return (
      <Stack.Navigator>


        <Stack.Screen 
        name="ContactUsStack" 
        component={ContactUs}
        options={{headerShown: false}}
        />
        

    </Stack.Navigator>
  );
}

export default ContactUsNavigation;
