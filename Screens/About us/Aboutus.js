import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../Image/img/logo-circlee.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Mobile Basket is a friendly, online shopping application developed on 2022. Since then, it aims to provide a superior, 
          blissful, and convenient membership shopping experience for Filipino families.
        </Text>
        <Text style={styles.text}>
        We recognize that the pandemic has brought about a new way of doing things, and our neighborhood grocery delivery services 
        now make it easy to shop for all of your household necessities. We have everything you need to keep your house supplied 
        with all the essentials here at Mobile Basket, including your favorite brand of canned goods, premium meat cuts, 
        pantry essentials, fresh seafood, frozen food, snacks, fruits, veggies, baby care products, and more.
        </Text>


        <View style={styles.Vision}>
        <Text style={styles.text2}>
          Our Vision
        </Text>
        <Text style={styles.text3}>
        To be the Most Customer-Oriented Hypermart offering a One-Stop Shopping convenience and Best Value to our Customers.
        </Text>
        </View>

        <View style={styles.Mission}>
        <Text style={styles.text2}>
          Our Mission
        </Text>
        <Text style={styles.text3}>
        To be the Most Customer-Oriented Hypermart offering a One-Stop Shopping convenience and Best Value to our Customers.
        </Text>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  
  logo: {
    width: 210,
    height: 210,
    // marginRight: 10,
    alignSelf: "center",
    resizeMode: 'contain',
    padding: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
  },

  text: {
    marginBottom: 20,
    textAlign: "center",
    padding: 3,
  },

  text2:{
    color:"#379035",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 15,
   },

  text3: {
    marginBottom: 20,
    textAlign: "left",
    marginHorizontal: 15,
    
  },

  Vision:{
    marginBottom: 15,
    backgroundColor: "#E2F0CB",
    borderRadius:  10, 
  },

  Mission:{
    marginBottom: 30,
    backgroundColor: "#E2F0CB",
    borderRadius:  10,
  },

  
});

export default AboutUs;
