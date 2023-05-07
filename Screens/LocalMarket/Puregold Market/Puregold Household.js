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
    id: 67,
    name: 'Bathroom Tissue',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Ftissue.png?alt=media&token=31c5a6d0-1a18-438e-8509-ccd37b8ff3d5',
    price: 109.99,
  },
  {
    id: 68,
    name: 'Sanicare Wipes',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Fwipes.png?alt=media&token=340b3553-8929-44da-a8e6-a775c9ba3d76',
    price: 89.52,
  },
  {
    id: 69,
    name: 'Downy Detergent',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Fdowny.png?alt=media&token=553a4a5a-36c0-479c-bf43-50c9b69cbb84',
    price: 42.25,
  },
  {
    id: 70,
    name: 'Surf Powder',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Fsurf.png?alt=media&token=ca205d9d-a19b-4913-98ac-0ecdfab46cb1',
    price: 39.29,
  },
  {
    id: 71,
    name: 'Pantene Shampoo',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Fpantene.png?alt=media&token=dfdd681c-0ded-4eab-a04d-afb34d9fe554',
    price: 199.13,
  },
  {
    id: 72,
    name: 'Safeguard Soap',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FPuregold%20Products%2FHousehold%20Necessities%2Fsafeguard.png?alt=media&token=7e1ad6a7-cdef-40b1-85f4-fb6b56b3cedb',
    price: 29.15,
  },
];

const PuregoldHousehold = () => {

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

export default PuregoldHousehold

