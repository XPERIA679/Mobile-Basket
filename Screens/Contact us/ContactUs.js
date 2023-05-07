import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.contact}
          source={require('../../Image/img/contact.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Contact Us
        </Text>

        <Text style={styles.text2}>
        For any questions or concerns regarding your order, please do not hesitate to email us. Fill out the form below with your details and we’ll get back to you as soon as we can.
        </Text>
       


        <View style={styles.Email}>
        <Text style={styles.text3}>
        Email:
        </Text>
        </View>

        <View style={styles.Name}>
        <Text style={styles.text3}>
        Name:
        </Text>
        </View>

        <View style={styles.OrderID}>
        <Text style={styles.text3}>
        Order ID
        </Text>
        </View>

        <View style={styles.Concern}>
        <Text style={styles.text6}>
        Concern :
        </Text>
        </View>

        <View style={styles.Send}>
        <Text style={styles.text5}>
        Send
        </Text>
        </View>

        <Text style={styles.text}>
          Join our community
        </Text>

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
  
  contact: {
    width: 250,
    height: 250,
    marginRight: 10,
    alignSelf: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
  },

  text: {
    textAlign: "center",
    color:"#379035",
    fontSize: 24,
    fontWeight: "bold",
  },

  text2:{
    color:"#000000",
    textAlign: "left",
    fontSize: 14,
    marginHorizontal: 15,
    marginVertical: 15,
   },

  text3: {
    textAlign: "left",
    marginHorizontal: 10,
    color:"#379035",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },

  text4: {
    textAlign: "center",
    color:"#379035",
    fontSize: 24,
    fontWeight: "bold",
  },

  text5: {
    textAlign: "center",
    color:"#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 10,
  },

  text6: {
    textAlign: "left",
    marginHorizontal: 10,
    color:"#379035",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 60,
    marginVertical: 10,
  },

  Email:{
    marginBottom: 15,
    backgroundColor: "#E2F0CB",
    borderRadius:  8, 
  },

  Name:{
    marginBottom: 15,
    backgroundColor: "#E2F0CB",
    borderRadius:  8, 
  },


  OrderID:{
    marginBottom: 15,
    backgroundColor: "#E2F0CB",
    borderRadius:  8, 
  },

  Concern:{
    marginBottom: 15,
    backgroundColor: "#E2F0CB",
    borderRadius:  8, 
  
  },

  Send:{
    marginBottom: 30,
    backgroundColor: "#86C884",
    borderRadius:  8,
    width: 115,
    height: 40,
    alignSelf: "center",
  },

  
});

export default AboutUs;
