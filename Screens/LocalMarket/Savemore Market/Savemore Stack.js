import * as React from 'react';
import { Button, View, Text, Image, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SavemoreSnacks from './Savemore Snacks';
import SavemoreDrinks from './Savemore Drinks';
import SavemoreFruigies from './Savemore Fruigies';
import SavemoreFrozen from './Savemore Frozen';
import SavemoreCanned from './Savemore Canned';
import SavemoreHousehold from './Savemore Household';
import styles from '../../styles';

const Tab = createMaterialTopTabNavigator();

function SavemoreStack() {
  return (
    <View style={{flex:1,}} >
      {/* <Image source={require('./img/grocery4.png')} style={styles.headerImage} /> */}
    
    <Tab.Navigator screenOptions={styles.tabBarOptions}>
    <Tab.Screen 
          name="Snacks" 
          component={SavemoreSnacks} 
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
          component={SavemoreDrinks} 
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
          component={SavemoreFruigies} 
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
          component={SavemoreFrozen} 
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
          component={SavemoreCanned} 
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
          component={SavemoreHousehold} 
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

export default SavemoreStack;
