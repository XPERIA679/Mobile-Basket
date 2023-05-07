import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import HomeScreen from './ProductScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProductScreen from './ProductScreen';
import LogAndRegScreen from './LogAndRegScreen';
import LocalMarketNavigation from './LocalMarketNavigation';
import AboutUsStack from './About us/AboutUsStack';
import ContactUsStack from './Contact us/ContactUsStack';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        hideStatusBar={true}
        initialRouteName='Products'
        overlayColor="#6b52ae"
        screenOptions={{
            drawerStyle: {
                backgroundColor: '#BBE8B9',
                width: 240,
            },
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#6b52ae',
          headerTintColor: 'white',
        }}>
            
<Drawer.Screen name="Login" component={LogAndRegScreen} 
            options={{

              headerShown: false,
                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#3E4740", marginRight: 10, fontSize: 33})}
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

<Drawer.Screen name="Products" component={ProductScreen} 
            options={{

                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#3E4740", marginRight: 13, marginTop: 10, fontSize: 30})}
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

<Drawer.Screen name="About Us" component={AboutUsStack} 
            options={{

                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#3E4740", marginRight: 13, marginTop: 10, fontSize: 30})}
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
         
         <Drawer.Screen name="Contact Us" component={ContactUsStack} 
            options={{

                headerRight: () => (
                    <Icon
                    name="user-circle" solid 
                    style={StyleSheet.compose(styles.icon, {color: "#3E4740", marginRight: 13, marginTop: 10, fontSize: 30})}
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

<Drawer.Screen name="LocalMarketNavigation" component={LocalMarketNavigation} 
            options={{

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

      </Drawer.Navigator>
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
