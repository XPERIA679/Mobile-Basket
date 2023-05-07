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
    id: 127,
    name: 'Aguila Beef Tapa 250g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Fbeeftapa.png?alt=media&token=faf6bb60-7f68-4d7b-aa65-09815b234b6e',
    price: 229,
  },
  {
    id: 128,
    name: 'Aguila Bacon & Cheese Sausage 250g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Fbaconncheese.png?alt=media&token=4b43e458-ce45-4494-8889-6343ecfe6407',
    price: 163,
  },
  {
    id: 129,
    name: 'Aguila Vigan Longganisa 250g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Fviganlongganisa.png?alt=media&token=44b3c428-75f9-4e58-a4f8-4fd694fefda5',
    price: 150,
  },
  {
    id: 130,
    name: 'Dae Jang Gum Korean Tofu Premium Firm 500g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Ftofu.png?alt=media&token=48c78d37-8467-4fba-b6db-ed1d58f58e37',
    price: 69,
  },
  {
    id: 131,
    name: 'Dae Jang Gum Chopped Kimchi 500g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Fkimchi.png?alt=media&token=2f298b02-4151-4b15-8da5-b49f5b128283',
    price: 165,
  },
  {
    id: 132,
    name: 'Banh Trang Rice Paper Wrapper 22cm 400g',
    image: 'https://firebasestorage.googleapis.com/v0/b/mobilebasket-firebase.appspot.com/o/Local%20Market%2FEver%20Products%2FFrozen%2Fricepaper.png?alt=media&token=a662df2e-c661-49fc-beb4-63b0e0c3ac9e',
    price: 115,
  },
];

const EverFrozen = () => {

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

export default EverFrozen
