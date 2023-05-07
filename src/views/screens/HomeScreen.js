import React from "react";
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import { FullWindowOverlay } from "react-native-screens";


const HomeScreen = ({navigation}) => {

return (
<SafeAreaView style={styles.container}>
        <ScrollView style={styles.svContainer}>
        <View style={styles.viewContainer}>

          <View style={styles.imageContainer}>
          <Image style ={styles.image} source={require("../../img/header1.png")} />
          <Text style={styles.textHeader1}>Buy more, Save more</Text>
          <Image style ={styles.image} source={require("../../img/header2.png")} />
          <Text style={styles.textHeader2}>Frozen Foods</Text>
            </View>

            <Text style={styles.textHeading}>Grocery Stores</Text>

            <View style={styles.containerGrocery}>
              <View style={styles.viewRobinson}><Image style ={styles.imageGrocery} source={require("../../img/grocery1.png")} /></View>
              <View style={styles.viewPuregold}><Image style ={styles.imageGrocery} source={require("../../img/grocery2.png")} /></View>
              <View style={styles.viewSavemore}><Image style ={styles.imageGrocery} source={require("../../img/grocery3.png")} /></View>
              <View style={styles.viewEver}><Image style ={styles.imageGrocery} source={require("../../img/grocery4.png")} /></View>
            </View>
       

        
        </View>
        
        </ScrollView>
        </SafeAreaView>

)
// const [userDetails, setUserDetails] = React.useState();
// React.useEffect(() => {getUserData();}, [])
// const getUserData = async() => {
//   const userData = await AsyncStorage.getItem("userData");
//   if (userData) {
//     console.log("Home Screen");
//     console.log(JSON.parse(userData));
//     setUserDetails(JSON.parse(userData));
//   }
// };

// const logout =() => {
//   AsyncStorage.setItem("userData", JSON.stringify({
//     ...userDetails, loggedIn: false})
//   );

//   navigation.navigate("Login Screen");
// };

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={styles.text}>Welcome {userDetails?.fullName} </Text>
//         <Button title="Logout" onPress={logout} />

//       </View>
//     );
//   }

//   const styles= StyleSheet.create({
//     text:{
//       textAlign: "center",
//       fontSize: 16,
//       color: "black",
//       fontWeight: "bold",
//     },
//   });
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
    width: 180,
    height: 170,
    alignSelf: "center",
    borderRadius: 15,
},
imageContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
},  
textHeader1: {
  position: "absolute",
  fontSize: 16,
  fontWeight: "bold",
  color: "#4DBD4A",
  padding: 5,
  marginLeft: 5,
  borderRadius: 8,
  marginTop: 20,
  backgroundColor: "#FFFFFF",
},
textHeader2: {
  position: "absolute",
  backgroundColor: "#FFFFFF",
  marginLeft: 210,
  marginTop: 65,
  padding: 10,
  paddingHorizontal: 20,
  borderRadius: 15,
  fontSize: 16,
  fontWeight: "bold",
  backgroundColor: "#F6EAC2",
},

viewContainer:{
  paddingVertical: 20,
},

textHeading: {
  fontSize: 25,
  fontWeight: "400",
  color: "black",
},

containerGrocery: {
flexDirection: "column",
alignItems: "center",
marginTop: 20,
},

imageGrocery: {
width: 180,
height: 70,
marginVertical: 10,
marginLeft: 50,

},

viewRobinson: {
backgroundColor: "#FFAAA8",
width: 369,
height: 90,
marginBottom: 20,
borderRadius: 10,
},

viewPuregold: {
  backgroundColor: "#BBE8B9",
  width: 369,
  height: 97,
  marginBottom: 20,
  borderRadius: 10,
  },

viewSavemore: {
    backgroundColor: "#F5E6B7",
    width: 369,
    height: 97,
    marginBottom: 20,
    borderRadius: 10,
    },

  viewEver: {
      backgroundColor: "#FFB9B0",
      width: 369,
      height: 97,
      marginBottom: 20,
      borderRadius: 10,
      },

});


  export default HomeScreen;