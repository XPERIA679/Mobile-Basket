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
    id: 133,
    name: 'CDO Luncheon Meat Chinese Style 350g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fluncheonmeat.png?alt=media&token=6f86184e-b296-426c-b032-fe239a2a57b3',
    price: 84.75,
  },
  {
    id: 134,
    name: 'Delimondo Garlic and Chili Corned Beef 260g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fdelimondo.png?alt=media&token=adfb7ee7-c417-4c6c-8bb4-3b45b3fff6a3',
    price: 137.75,
  },
  {
    id: 135,
    name: 'SamDel Monte Pineapple Chunks in Extra Light Syrup 560gple',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fchunks.png?alt=media&token=c994ac89-c5c3-4d43-8e34-25417721e567',
    price: 80,
  },
  {
    id: 136,
    name: 'CDO Sweet Kaong Sugar Palm Fruit White 340g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fcdokaong.png?alt=media&token=a85960c3-855d-4131-88f8-6505255e5e82',
    price: 85.50,
  },
  {
    id: 137,
    name: 'CDO Sweet Nata de Coco Coconut Gel Green 340g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fcdonata.png?alt=media&token=ebd32514-969c-4c36-85c6-1edaa2174a6b',
    price: 63,
  },
  {
    id: 138,
    name: 'SamHeinz Easy Squeeze Tomato Ketchup 20ozple',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FCanned%20and%20Condiments%2Fheinztomato.png?alt=media&token=0f4bc7a9-0277-47a6-af50-727c9401c581',
    price: 199.25,
  },
];

const EverCanned = () => {

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
            <View style={styles.productContainer}>
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
              <Image style={styles.selectedImage} source={{uri: selectedItem.image}}/>
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

export default EverCanned
