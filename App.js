import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './Screens/BottomTabNavigation';
import { Provider } from 'react-redux';
import store from './Screens/Redux/store';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <BottomTabNavigation />
    </Provider>
  );
}

export default App;