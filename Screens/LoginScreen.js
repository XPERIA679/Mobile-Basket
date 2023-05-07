import { 
  StyleSheet,
   Text, 
   TextInput, 
   TouchableOpacity, 
   View, 
   ScrollView, 
   Image } from 'react-native'
import React, {useEffect, useState} from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';
import RegistrationScreen from './RegistrationScreen';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {

    }
  })

  return unsubscribe
}, [])

const handleLogin = () => {
  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
      navigation.navigate("ProductScreen")
  })
  .catch(error => alert(error.message))
}

  return (

    <ScrollView style={styles.container}>
        <Image style ={styles.image} source={require("../Image/img/mobile-basket.png")} />
        <Text style={styles.textTitle}>Welcome to Mobile Basket</Text>
        <Text style={styles.text}>Shop everything you need without the trip</Text>
        <Text style={styles.text1}> to the supermarket.</Text>

         <View style={styles.inputContainer}>

<Text>Email Address</Text>
  <TextInput
    placeholder='Enter Your Email Address'
    value={email}
    onChangeText={text => setEmail(text)}
    style={[styles.input, {borderColor: '#76a22d', borderWidth: 2, }]} 
/>

<Text>Password</Text>
  <TextInput
    placeholder='Enter Your Password'
    value={password}
    onChangeText={text => setPassword(text)}
    style={[styles.input, {borderColor: '#76a22d', borderWidth: 2, }]} 
        secureTextEntry />

    </View>

    <View style={styles.buttonContainer}>

    <TouchableOpacity
    onPress={handleLogin}
    style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>

    </View>

    <View style={styles.textRegister}>
    <Text style={styles.textRegister1}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("RegisterStack")}  style={styles.textRegister2}> Register</Text>
    </View>

</ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }, 
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 300,
    alignSelf: "flex-end",
    marginVertical: 20,
},
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginVertical: 10,
    height: 55,
    borderWidth: 1,
    shadowColor: '#46443F',
    elevation: 10,
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#78a52e',
    width: '100%',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontWeight: '800',
    fontSize: 17,
    letterSpacing: 0.7,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#242420",
    marginLeft: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "#777777",
    marginLeft: 20,
    letterSpacing: 0.4,
  },
  text1: {
    fontSize: 16,
    color: "#777777",
    marginLeft: 17,
    marginBottom: 20,
    letterSpacing: 0.4,
  },
  textRegister:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  textRegister1:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  textRegister2:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#107929'
  },
})