import * as React from 'react';
import { Button, View, Text, Image, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RobinsonsSnacks from './Robinsons Snacks';
import RobinsonsDrinks from './Robinsons Drinks';
import RobinsonsFruigies from './Robinsons Fruigies';
import RobinsonsFrozen from './Robinsons Frozen';
import RobinsonsCanned from './Robinsons Canned';
import RobinsonsHousehold from './Robinsons Household';
import styles from '../../styles';

const Tab = createMaterialTopTabNavigator();

function RobinsonsStack() {
  return (
    <View style={{flex:1,}} >
      {/* <Image source={require('./img/grocery4.png')} style={styles.headerImage} /> */}
    
    <Tab.Navigator screenOptions={styles.tabBarOptions}>
    <Tab.Screen 
          name="Snacks" 
          component={RobinsonsSnacks} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/snack.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />

      <Tab.Screen 
          name="Drinks" 
          component={RobinsonsDrinks} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/beverage.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Fruigies" 
          component={RobinsonsFruigies} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/fruits.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              // Add your styles here for tabBarLabel
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Frozen" 
          component={RobinsonsFrozen} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/frozen.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Canned" 
          component={RobinsonsCanned} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/canned.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Household" 
          component={RobinsonsHousehold} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/household.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
    </Tab.Navigator>
            </View>

  );
}

export default RobinsonsStack;
