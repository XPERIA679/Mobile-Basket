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
    id: 115,
    name: 'Absolute Pure Distilled Drinking Water 5L',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fabsolute.png?alt=media&token=fd3e70c1-c956-4eb3-815a-0d355e413b60',
    price: 69.25,
  },
  {
    id: 116,
    name: 'Coke Coca-Cola Original Taste Can 6x320ml SAVE',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fcoca-cola-original.png?alt=media&token=28b4e5fb-410d-4d12-b120-3126c498e1af',
    price: 195,
  },
  {
    id: 117,
    name: 'Coke Coca-Cola Light Taste PET 2x1.5L P115',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fcoca-cola-light.png?alt=media&token=141cd07c-dac2-44f7-80da-a476733664e6',
    price: 115,
  },
  {
    id: 118,
    name: 'Biofitea Herbal Tea 5s',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fbiofitea.png?alt=media&token=6fb329eb-889b-4a94-b8ad-00c3f257c683',
    price: 36.50,
  },
  {
    id: 119,
    name: 'Blend 45 Kapeng Pinoy Kondensada Coffee Mix 10x20g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fbiofitea.png?alt=media&token=6fb329eb-889b-4a94-b8ad-00c3f257c683',
    price: 55.25,
  },
  {
    id: 120,
    name: 'Deja Brew Cafe 100% Pure Roasted Ground Coffee Barako Blend 250g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FDrinks%2Fdeja.png?alt=media&token=e0010589-b9d9-4b55-a37b-f7ff2d18909c',
    price: 210,
  },
];

const EverDrinks = () => {

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
                source={{uri:item.image}}
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

export default EverDrinks
