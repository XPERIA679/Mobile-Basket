import React from "react";
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions, Animated} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
const aspectRatio = 1.4; // Replace with the actual aspect ratio of your image
const imageContainerWidth = screenWidth;
const imageContainerHeight = imageContainerWidth / aspectRatio;

const photos = [
  require('../Image/img/slide1.png'), 
  require('../Image/img/slide2.png'), 
  require('../Image/img/slide3.png'), 
  require('../Image/img/slide4.png'), 
];

 class Slideshow extends React.Component {
  scrollX = new Animated.Value(0) 

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <View
          style={{ width: 350, height: 250}}
          > */}
           <View style={{ width: imageContainerWidth, height: imageContainerHeight }}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true} 
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event( 
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] 
            )} 
            scrollEventThrottle={16} 
            >
            {photos.map((source, i) => { 
              return ( 
                <Image
                  key={i} 
                  // style={{ width, height: width, resizeMode:'contain' }}
                  style={{ width: imageContainerWidth, height: imageContainerHeight, resizeMode: 'cover' }}
                  source={source}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{ flexDirection: 'row' }} 
          >
          {photos.map((_, i) => { 
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], 
              outputRange: [0.3, 1, 0.3], 

              extrapolate: 'clamp' 
            });
            return (
              <Animated.View 
                key={i} 
                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const ProductScreen = () => {

const navigation = useNavigation();

return (
<SafeAreaView style={styles.container}>
        <ScrollView style={styles.svContainer}>
        <View style={styles.viewContainer}>

<View style={{ flex: 1 }}>
      <Slideshow />
    </View>
          {/* <View style={styles.imageContainer}>
          <Image style ={styles.image} source={require("../Image/img/header1.png")} />
          <Text style={styles.textHeader1}>Buy more, Save more</Text>
          <Image style ={styles.image} source={require("../Image/img/header2.png")} />
          <Text style={styles.textHeader2}>Frozen Foods</Text>
            </View> */}

            <Text style={styles.textHeading}>Grocery Stores</Text>

            <View style={styles.containerGrocery}>

            <TouchableOpacity style={styles.viewRobinson}
              onPress={() => navigation.navigate("LocalMarketNavigation", { screen: "Robinsons" })}>
              <Image style ={styles.imageRobinson} source={require("../Image/img/grocery1.png")} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewPuregold}
onPress={() => navigation.navigate("LocalMarketNavigation", { screen: "Puregold" })}>
              <Image style ={styles.imagePuregold} source={require("../Image/img/grocery2.png")} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewSavemore}
onPress={() => navigation.navigate("LocalMarketNavigation", { screen: "Savemore" })}>
              <Image style ={styles.imageSavemore} source={require("../Image/img/grocery3.png")} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewEver}
onPress={() => navigation.navigate("LocalMarketNavigation", { screen: "Ever" })}>
              <Image style ={styles.imageEver} source={require("../Image/img/grocery4.png")} />
              </TouchableOpacity>

            </View>
            <View style={styles.imageContainer}>
          <Image style ={styles.image} source={require("../Image/img/header1.png")} />
          <Text style={styles.textHeader1}>Buy more, Save more</Text>
          <Image style ={styles.image} source={require("../Image/img/header2.png")} />
          <Text style={styles.textHeader2}>Frozen Foods</Text>
            </View>
            
       

        
        </View>
        
        </ScrollView>
        </SafeAreaView>

)

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
  marginTop: 20,
},

containerGrocery: {
flexDirection: "column",
alignItems: "center",
marginTop: 20,
},

imageRobinson: {
width: 163,
height: 65,
marginVertical: 14,
marginLeft: 3,
alignSelf: 'center'
},
  
imagePuregold: {
width: 197,
height: 97,
marginVertical: -2,
marginLeft: -4,
alignSelf: 'center'
},

imageSavemore: {
width: 150,
height: 66,
marginVertical: 8,
marginLeft: -5,
alignSelf: 'center',
},

imageEver: {
width: 142,
height: 52,
marginVertical: 19,
marginLeft: 2,
alignSelf: 'center'
},

viewRobinson: {
backgroundColor: "#FFAAA8",
width: 175,
height: 87,
marginBottom: 20,
borderRadius: 10,
marginLeft: -188,
},

viewPuregold: {
backgroundColor: "#BBE8B9",
width: 175,
height: 87,
marginBottom: 20,
borderRadius: 10,
marginTop: -108,
marginLeft: 190
},

viewSavemore: {
backgroundColor: "#F5E6B7",
width: 175,
height: 87,
marginBottom: 20,
borderRadius: 10,
marginLeft: -188,
},

viewEver: {
backgroundColor: "#FFB9B0",
width: 175,
height: 87,
marginBottom: 40,
borderRadius: 10,
marginLeft: 190,
marginTop: -108,
},

});


  export default ProductScreen;