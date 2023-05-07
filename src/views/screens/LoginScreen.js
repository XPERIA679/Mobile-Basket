import React from 'react';
import {View,
        Text, 
        SafeAreaView,
        StyleSheet, 
        ScrollView, 
        Image} from "react-native";
import { ALERT_TYPE, 
          Dialog,
          AlertNotificationRoot,
          Toast } from 'react-native-alert-notification';
import Loader from '../components/Loader';
import Input from "../components/Input";
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
const [inputs, setInputs] = React.useState({email: "",password: "",});
const [errors, setErrors] = React.useState({});
const [loading, setLoading] = React.useState(false);

const validate = async () => {
  let isValid = true;

  if (!inputs.email) {
      handleError("Please Enter an Email Address", "email");
      isValid = false;
  } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please Enter a Valid Email Address", "email");
      isValid = false;
  }


   if (!inputs.password) {
      handleError("Enter a Password", "password");
      isValid = false;
  } 

  if (isValid) login();
};

const handleOnchange = (text, input) => {
  setInputs((prevSate) => ({...prevSate, [input] : text }))
};

const handleError = (text, input) => {
  setErrors((prevSate) => ({...prevSate, [input] : text }))
};

const login = () => {
  console.log("login");
  console.log(inputs);

  setLoading(true);
  setTimeout(async ()=>{
      try {
          setLoading(false);
          let userData = await AsyncStorage.getItem ('userData');
        
          if (userData) {
            userData = JSON.parse(userData);
            console.log("userData");
            console.log(userData);

            if(inputs.email == userData.email 
              && inputs.password == userData.password) {
              navigation.navigate("Home Screen");
              AsyncStorage.setItem("userData", JSON.stringify({
                ...userData, loggedIn: true})
              );
            }
            else {
              console.log("No Account Found");
              Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'ERROR',
                textBody: 'Invalid Login Details!',
                button: 'Close',
  
              }); 
            }
          }

      } catch (error) {
        console.log("Error!" + error);
      }
  }, 500 );
  
}
  
    return (
       <AlertNotificationRoot style={styles.container}>
              <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <ScrollView style={styles.svContainer}>
        <Image style ={styles.image} source={require("../../img/logo-circle.png")} />
        <Text style={styles.textTitle}>Login Form</Text>
        <View style={styles.viewContainer}>
          <Text>Email Address</Text>
        <Input 
        iconName="envelope" 
        placeholder="Enter Your Email Address"
        onChangeText={ (text) => handleOnchange(text, "email" )}
        onFocus={()=> handleError(null, "email")}
        error={errors.email}
        />
          <Text>Password</Text>
<Input 
        iconName="key" password 
        placeholder="Enter Your Password"
        onChangeText={ (text) => handleOnchange(text, "password" )}
        onFocus={()=> handleError(null, "password")}
        error={errors.password}
        />
        <Button title="Login" onPress={validate} />

        <View style ={styles.viewText}>
        <Text style={styles.textRegister}>
          Don't have an account? </Text>
          <Text style={styles.registerLink} onPress ={() => navigation.navigate("Registration Screen")}>
          Register</Text>
          </View>
        </View>
        
        </ScrollView>
        </SafeAreaView>
        </AlertNotificationRoot>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  svContainer:{
    paddingTop: 20,
    paddingHorizontal:20,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
},
textTitle: {
  fontSize: 30,
  fontWeight: "700",
  color: "black",
},
viewContainer:{
  paddingVertical: 20,
},
textRegister:{
  textAlign: "center",
  fontSize: 16,
  color: "black",
  fontWeight: "bold",
},
registerLink: {
textAlign: 'center',
color: "#2F652D",
fontSize: 16,
fontWeight: "bold",
},
viewText: {
  flexDirection: "row",
  alignSelf: "center",
},
});

  export default LoginScreen;