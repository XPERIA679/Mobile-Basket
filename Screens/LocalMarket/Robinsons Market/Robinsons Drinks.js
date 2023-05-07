import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal
} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart} from '../../Redux/CartReducer';
import styles from '../Style'

const images = [
  {
    id: 7,
    name: 'Mountain Dew Softdrink Bottle 1.5L',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Fmountaindew.png?alt=media&token=95d4c570-3c87-4833-ad3b-7e3bd23101d5',
    price: 58.75,
  },
  {
    id: 8,
    name: 'Royal Tru-Orange Softdrink Bottle 2L',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Froyal.png?alt=media&token=d4a6751e-666b-48ab-92e7-d92ee0554cb2',
    price: 76.25,
  },
  {
    id: 9,
    name: 'Summit Natural Drinking Water 5000ml',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Fsummit.png?alt=media&token=a536e84e-50f0-4b02-a4d3-f06d26419c54',
    price: 60,
  },
  {
    id: 10,
    name: 'Kopiko 3 in 1 Kopiccino 25g x 30s',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Fkopiko.png?alt=media&token=7bc2c29f-30aa-4b66-ab21-dc86e18ad78b',
    price: 227,
  },
  {
    id: 11,
    name: 'Kopiko Cafe Blanca 30g x 30s',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Fkopikowhite.png?alt=media&token=37188f7e-6f8b-474e-a905-82eaff3e60ab',
    price: 250.50,
  },
  {
    id: 12,
    name: 'NESCAFE GOLD Instant Coffee 200g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FRobinsons%20Products%2FDrinks%2Fnescafegold.png?alt=media&token=568e7832-fb92-48db-95ff-5e98d53cb0ff',
    price: 673,
  },
];

const RobinsonsDrinks = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  
  const toggleModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };
  
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  
  function formatCurrency(number) {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(number);
  }
  
  return (
    <ScrollView style={styles.container}>
  
      <View style={styles.subContainer}>
  
        {images.map((item) => (
          <Pressable
            key={item.id} onPress={() => toggleModal(item)}> 
            <View style={StyleSheet.compose(styles.productContainer, {backgroundColor:'#f4c1c1'})}>
              <Image
                style={styles.image}
                source={{uri: item.image}}
              />

              
  
              <View style={styles.productInfo}>
                <Text style={styles.productText}>{item.name}</Text>
                <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
              </View>

              
            </View>
          </Pressable>
        ))}
  
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          {selectedItem && (
  
            <View style={styles.selectedContainer}>
              <Image style={styles.selectedImage} source={{uri:selectedItem.image}}/>
              <View style={styles.selectedSubText}>
                <View style={styles.selectedTextRow}>
              <Text style={styles.selectedName}> {selectedItem.name}</Text>
              <Text style={styles.selectedPrice}> {formatCurrency(selectedItem.price)}</Text>
              </View>
              <Text style={styles.selectedDescription}> {selectedItem.description}</Text>
            
            <View style={styles.selectedDesign}>
              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>Ewan ko</Text>
              </View>
  
              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>jeje</Text>
              </View>
  
              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>sleep well</Text>
              </View>
            </View>
  
  
        <View style={styles.selectedRowButton}>
  
        <Pressable style={styles.selectedIconButton}>
              <Icon name="chevron-left" style={styles.icon} onPress={() => setModalVisible(false)} />
        </Pressable>
  
        {cart.some((value) => value.id == selectedItem.id) ? (
                  <Pressable onPress={() => removeItemFromCart(selectedItem)}
                    style ={styles.selectedOnPressButton}>
                    <Text style={styles.selectedOnPressText}>Remove from Cart</Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => addItemToCart(selectedItem)}
                    style ={styles.selectedOnPressButton}>
                    <Text style={styles.selectedOnPressText}>Add to Cart</Text>
                  </Pressable>
                )}
  {/* 
        <Pressable style={styles.selectedOnPressButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.selectedOnPressText}>Back</Text>
        </Pressable> */}
        </View>
        </View>
            </View>
          )}
        </Modal>
  
      </View>
    </ScrollView>
  );
  };


  export default RobinsonsDrinks