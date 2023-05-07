import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';


const RegistrationScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()

const isEmailValid = () => {

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
      }

const isPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    return passwordRegex.test(password)
      }

const handleSignup = () => {

    if (!isEmailValid()) {
      alert('Please enter a valid email address.')
      return
    }

    if (!isPasswordValid()) {
      alert('Password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, and one special character.')
      return
    }

    if (password !== confirmPassword) {
      alert('Password does not match.')
      return
    }

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigation.navigate('LoginStack');
        })
    .catch(error => alert(error.message))
    }

  return (

    <ScrollView style={styles.container}>


        <Image style ={styles.image} source={require("../Image/img/logo-circlee.png")} />
        {/* <Text style={styles.textTitle}>Registration Form</Text> */}

    <View style={styles.inputContainer}>

        <Text>Email Address</Text>
        <TextInput
        placeholder='Enter Your Email Address'
        value={email}
        onChangeText={text => setEmail(text)}
        style={[styles.input, {borderColor: 'white', borderWidth: 2, }]} 
        />

        <Text>Password</Text>
        <TextInput
          placeholder='Enter Your Password'
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, {borderColor: 'white', borderWidth: 2, }]} 
          secureTextEntry={!showPassword} />

        <Text>Confirm Password</Text>
        <TextInput
          placeholder='Confirm Your Password'
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={[styles.input, {borderColor: 'white', borderWidth: 2, }]} 
          secureTextEntry={!showPassword} />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
<Text style={styles.showPasswordButtonText}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </Text>
        </TouchableOpacity>

    </View>

    <View style={styles.buttonContainer}>

    <TouchableOpacity
    onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>

    <View style={styles.textRegister}>
    <Text style={styles.textRegister1}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("LoginStack")}  style={styles.textRegister2}>Login</Text>
    </View>

    </View>

    </ScrollView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      }, 
      inputContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'column',
        marginVertical: 30,
      },
      image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 80,
        resizeMode: 'contain'
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
        width: '50%',
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
        marginBottom: 20,
    
      },
      buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
      },
      showPasswordButtonText: {
        fontWeight: 'bold',
        fontSize: 17,
        color :'#107929',
      },
    textTitle: {
        fontSize: 30,
        fontWeight: 800,
        color: "#242420",
        marginLeft: 20,
        marginVertical: 15,
      },
      textRegister:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
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