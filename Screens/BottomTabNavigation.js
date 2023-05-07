import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProductScreen from './ProductScreen';
import LogAndRegScreen from './LogAndRegScreen';
import AboutUsNavigation from './About us/AboutUsStack';
import LocalMarketNavigation from './LocalMarket/LocalMarketNavigation';
import CheckoutPage from './Cart Page/AddToCart';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator hideStatusBar={true} initialRouteName='HomePageStackScreen' screenOptions={{}}>

    <Tab.Screen
  name="Login"
  component={LogAndRegScreen}
  options={{
    headerShown: false,
    tabBarLabel: 'Login',
    // tabBarStyle: {display: 'none'},
    // tabBarButton: () => null,
    tabBarIcon: () => (
      <Icon
        name="sign-in-alt"
        style={styles.icon}
      />
    ),
    headerRight: () => (
      <Icon
        name="user-circle"
        solid 
        style={StyleSheet.compose(styles.icon, { color: "#F3F1F1", marginRight: 10, fontSize: 33 })}
      />
    ),
    headerStyle: {
      backgroundColor: '#BBE8B9',
      height: 100,
      },
      headerTitle: () => (
      <Image style ={styles.image} source={require("../Image/img/logo-circle.png")} /> ),
    headerTitleAlign: 'center',
    headerBackVisible: false,
  }}
/>


    <Tab.Screen name="ProductScreen" component={ProductScreen}
            options={{
            tabBarLabel: 'Products',
            // tabBarStyle: {display: 'none'},
            // tabBarButton: () => null,
            tabBarIcon: () => (
            <Icon
                name="cheese" 
                style={styles.icon}
            />
            ),
            headerStyle: {
              backgroundColor: '#BBE8B9',
              height: 100,
              },
              headerTitle: () => (
              <Image style ={styles.image} source={require("../Image/img/logo-circle.png")} /> ),
                headerTitleAlign: 'center',
                headerBackVisible: false,
            }}
/>

<Tab.Screen name="LocalMarketNavigation" component={LocalMarketNavigation} 
            options={{
            // tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#3E4740", marginRight: 13, marginTop: 10, fontSize: 25})}
                    />
                    ),
                    headerStyle: {
                    backgroundColor: '#BBE8B9',
                    height: 100,
                    },
                    headerTitle: () => (
                    <Image style ={styles.image} source={require("../Image/img/logo-circle.png")} /> ),
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                    drawerItemStyle: { height: 0 }
                      }}
        
        />


<Tab.Screen name="AboutUsStack" component={AboutUsNavigation} 
            options={{
                tabBarLabel: 'About',
                tabBarIcon: () => (
                <Icon
                    name="user-tie" 
                    style={styles.icon}
                />
                ),
                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#F3F1F1", marginRight: 10, fontSize: 33})}
                    />
                    ),
                    headerStyle: {
                      backgroundColor: '#BBE8B9',
                      height: 100,
                      },
                      headerTitle: () => (
                      <Image style ={styles.image} source={require("../Image/img/logo-circle.png")} /> ),
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                      }} />

<Tab.Screen name="AddToCartStack" component={CheckoutPage} 
            options={{
              tabBarLabel: 'Add To Cart',
            //  tabBarStyle: {display: 'none'},
            // tabBarButton: () => null,
              tabBarIcon: () => (
              <Icon
                  name="cheese" 
                  style={styles.icon}
              />
              ),
                // headerLeft: () => (
                //     <Icon
                //     name="chevron-left" 
                //     style={StyleSheet.compose(styles.icon, {color: "#ffffff", marginLeft: 20, fontSize: 25})}
                //     />
                //     ),
                    headerStyle: {
                    backgroundColor: '#fbc601',
                    height: 100,
                    },
                    headerTitle: () => (
                      <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fgratee.png?alt=media&token=8c550c31-5297-4d1f-90cb-0d0d4a24219d'}} />
                      ),
                    
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                      }} />

                      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  icon: {
    fontSize: 25,
    color: "black",
    marginLeft: 5,
    
},
image: {
  width: 100,
  height: 70,
},
});