import React from "react";
import {View,
        Text, 
        SafeAreaView, 
        StyleSheet, 
        ScrollView, 
Image} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, 
        Dialog,
        AlertNotificationRoot,
        Toast } from 'react-native-alert-notification';


const RegistrationScreen = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        fullName: "",
        email: "",
        contact: "",
        password: "",
        passwordConfirm: "",
    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const validate = () => {
        let isValid = true;

        if (!inputs.fullName) {
            handleError("Please Enter a Full Name", "fullName");
            isValid = false;
        }

        if (!inputs.email) {
            handleError("Please Enter an Email Address", "email");
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError("Please Enter a Valid Email Address", "email");
            isValid = false;
        }

         if (!inputs.contact) {
            handleError("Please Enter a Contact Number", "contact");
            isValid = false;
        }else if (inputs.contact.length < 11 || inputs.contact.length > 12 ) {
            handleError("Contact Number should be 11 numbers", "contact");
            isValid = false;
        } 
        

         if (!inputs.password) {
            handleError("Please Enter a Password", "password");
            isValid = false;
        } else if (
            !inputs.password.match(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,16}$)/
            )
          ) {
            handleError(
              "Password should contain at least 1 uppercase, 1 lowercase, 1 special character and be 8-16 characters long",
              "password"
            );
            isValid = false;
          } 

         if (!inputs.passwordConfirm) {
            handleError("Please Enter Confirm Password", "passwordConfirm");
            isValid = false;
        } else if (inputs.passwordConfirm != inputs.password ) {
            handleError("Password Does Not Match", "passwordConfirm");
            isValid = false;
        }

        if (isValid) register();
    };

    const register = () => {
        console.log("register");
        console.log(inputs);

        setLoading(true);
        setTimeout(()=>{
            try {
                setLoading(false);
                AsyncStorage.setItem('userData', JSON.stringify(inputs));
                
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'User Successfuly Created!',
                    button: 'Close',
                    onHide: () => {
                        navigation.navigate("Login Screen");
                    }
                  });

            } catch (error) {
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: 'You Have Not Entered any Input',
                    button: 'Close',

                  });
            }
        }, 1000 );
        
    }

    const handleOnchange = (text, input) => {
        setInputs((prevSate) => ({...prevSate, [input] : text }))
    };

    const handleError = (text, input) => {
        setErrors((prevSate) => ({...prevSate, [input] : text }))
    };

    return (
      <SafeAreaView style={styles.container}>
        <AlertNotificationRoot>

        <Loader visible={loading} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <Image style ={styles.image} source={require("../../img/logo-circle.png")} />
            <Text style={styles.textTitle}>Registration Form</Text>
            <Text style={styles.textSubTitle}>Enter Your Details to Register</Text>

        <Text> Full Name</Text>
        <Input 
        iconName="user" 
        placeholder="Enter Your Full Name"
        onChangeText={ (text) => handleOnchange(text, "fullName" )}
        onFocus={()=> handleError(null, "fullName")}
        error={errors.fullName}
        />

        <Text>Email Address</Text>
        <Input 
        iconName="envelope" 
        placeholder="Enter Your Email Address"
        onChangeText={ (text) => handleOnchange(text, "email" )}
        onFocus={()=> handleError(null, "email")}
        error={errors.email}
        />

        <Text>Contact Number</Text>
        <Input 
        iconName="mobile-alt" 
        placeholder="Enter Your Contact Number"
        onChangeText={ (text) => handleOnchange(text, "contact" )}
        onFocus={()=> handleError(null, "contact")}
        error={errors.contact}
        />

        <Text>Password</Text>
        <Input 
        iconName="key" password 
        placeholder="Enter Your Password"
        onChangeText={ (text) => handleOnchange(text, "password" )}
        onFocus={()=> handleError(null, "password")}
        error={errors.password}
        />

        <Text>Confirm Password</Text>
        <Input 
        iconName="key" password 
        placeholder="Confirm Your Password"
        onChangeText={ (text) => handleOnchange(text, "passwordConfirm" )}
        onFocus={()=> handleError(null, "passwordConfirm")}
        error={errors.passwordConfirm}
        />

        <Button title="Register" onPress={validate} />

        </ScrollView>
        </AlertNotificationRoot>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E2F0CB",
        flex:1,
    },
    scrollContainer: {
        paddingTop: 30,
        paddingHorizontal: 20,
        fontSize: 40,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "700",
        color: "black",
    },
    textSubTitle: {
        fontSize: 16,
        color: "black",
        marginVertical: 5,
        marginBottom: 15,
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
  });

  export default RegistrationScreen;