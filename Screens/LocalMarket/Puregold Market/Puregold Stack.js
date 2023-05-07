import * as React from 'react';
import { Button, View, Text, Image, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PuregoldSnacks from './Puregold Snacks';
import PuregoldDrinks from './Puregold Drinks';
import PuregoldFruigies from './Puregold Fruigies';
import PuregoldFrozen from './Puregold Frozen';
import PuregoldCanned from './Puregold Canned';
import PuregoldHousehold from './Puregold Household';
import styles from '../../styles';

const Tab = createMaterialTopTabNavigator();

function PuregoldStack() {
  return (
    <View style={{flex:1,}} >
      {/* <Image source={require('./img/grocery4.png')} style={styles.headerImage} /> */}
    
    <Tab.Navigator screenOptions={styles.tabBarOptions}>
    <Tab.Screen 
          name="Snacks" 
          component={PuregoldSnacks} 
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
          component={PuregoldDrinks} 
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
          component={PuregoldFruigies} 
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
          component={PuregoldFrozen} 
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
          component={PuregoldCanned} 
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
          component={PuregoldHousehold} 
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

export default PuregoldStack;
