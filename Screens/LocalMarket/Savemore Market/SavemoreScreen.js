import { Image, Modal, View, StyleSheet,Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles';

const Tab = createMaterialTopTabNavigator();


function SavemoreScreen() {
  return (
    <View style={{flex:1,}} >
      {/* <Image source={require('../img/grocery4.png')} style={styles.headerImage} /> */}
    
    <Tab.Navigator tabBarOptions={styles.tabBarOptions}>
    <Tab.Screen 
          name="Tab1" 
          component={Screen1} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/snack.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />

      <Tab.Screen 
          name="Tab2" 
          component={Screen2} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/beverage.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Tab3" 
          component={Screen3} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/fruits.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              // Add your styles here for tabBarLabel
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Tab4" 
          component={Screen4} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/frozen.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Tab5" 
          component={Screen5} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/canned.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
      <Tab.Screen 
          name="Tab6" 
          component={Screen6} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('../img/household.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />
    </Tab.Navigator>
            </View>

  );
}




function ProductCardA({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#f4c1c1'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#fdaaaa'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ProductCardB({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#e5d0ff'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#b9acd4'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ProductCardC({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#ffcba7'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#ffb684'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ProductCardD({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#c0dacb'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#97C1A9'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ProductCardE({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#fff7b1'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#FDD771'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ProductCardF({ product, onPress }) {
  return (
    <TouchableOpacity style={StyleSheet.compose(styles.productCard,{backgroundColor:'#C8D9F0'})} onPress={onPress}>
      <View style={styles.info}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}> ₱ {product.price}</Text>
        </View>
        <TouchableOpacity style={StyleSheet.compose(styles.button,{backgroundColor:'#A8B5E0'})}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}



function QuantityPicker({ quantity, onIncrease, onDecrease, max }) {
  return (
    <View style={styles.quantityPicker}>
      <TouchableOpacity style={styles.arrowButton} onPress={onDecrease} disabled={quantity === 1}>
        <Text style={styles.arrowButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.arrowButton} onPress={onIncrease} disabled={quantity === max}>
        <Text style={styles.arrowButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


function ProductModal({ product, visible, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(Math.max(1, Math.min(newQuantity, 10)));
    }
  };

  const handleAddToCart = () => {
    const item = {
      product: product,
      quantity: quantity,
    };
    // add item to cart page here hehe pagod na ako
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Image source={product.image} style={styles.modalImage} />
        <Text style={styles.modalName}>{product.name}</Text>
        <View style={styles.priceRow}>
          {/* <View style={styles.quantityContainer}> */}
            <Text style={styles.modalPrice}>₱ {(product.price * quantity).toFixed(2)}</Text>
            <QuantityPicker
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onChangeText={handleQuantityChange}
              max={10}
            />
          </View>
        
        <TouchableOpacity style={styles.modalButton} onPress={handleAddToCart}>
          <Text style={styles.modalButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
      
    </Modal>
  );
}


//Procucts for Snacks category
function ProductListA() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Mang Juan Chikn Skin',
      image: require('../img/savemore/snack/mang.png'),
      price: 149.25,
    },
    {
      id: 2,
      name: 'Maxx Candies Honey-Lemon',
      image: require('../img/savemore/snack/maxx.png'),
      price: 35.75,
    },
    {
      id: 3,
      name: 'Ricoa Flat Tops',
      image: require('../img/savemore/snack/flattops.png'),
      price: 192.85,
    },
    {
      id: 4,
      name: 'Happy Peanuts BBQ',
      image: require('../img/savemore/snack/happy.png'),
      price: 17.65,
    },
    {
      id: 5,
      name: 'Crossini Choco',
      image: require('../img/savemore/snack/crossini.png'),
      price: 223.75,
    },
    {
      id: 6,
      name: 'Sky Flakes Crackers',
      image: require('../img/savemore/snack/skyflakes.png'),
      price: 72.15,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Snacks</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/snacks.png')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardA
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}


//Procucts for Beverages category
function ProductListB() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Ginebra San Miguel Gin',
      image: require('../img/savemore/beverages/gin.png'),
      price: 233.10,
    },
    {
      id: 2,
      name: 'Absolute Distilled Drinking Water 1L',
      image: require('../img/savemore/beverages/water.png'),
      price: 90.15,
    },
    {
      id: 3,
      name: 'Nescafe Classic',
      image: require('../img/savemore/beverages/nescafe.png'),
      price: 52.25,
    },
    {
      id: 4,
      name: 'Royal Tru Orange 1L',
      image: require('../img/savemore/beverages/royal.png'),
      price: 210.19,
    },
    {
      id: 5,
      name: 'Nestea House Blend Iced Tea',
      image: require('../img/savemore/beverages/nestea.png'),
      price: 49.29,
    },
    {
      id: 6,
      name: 'San Miguel Flavored Beer Bottle',
      image: require('../img/savemore/beverages/sanmig.png'),
      price: 55.15,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Beverages</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/drinks.png')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardB
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}

//Procucts for Fruits and Vegetables category
function ProductListC() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Lemon',
      image: require('../img/savemore/fruigies/lemon.png'),
      price: 9.99,
    },
    {
      id: 2,
      name: 'Banana',
      image: require('../img/savemore/fruigies/banana.png'),
      price: 19.99,
    },
    {
      id: 3,
      name: 'Tomato',
      image: require('../img/savemore/fruigies/tomato.png'),
      price: 29.99,
    },
    {
      id: 4,
      name: 'Onion',
      image: require('../img/savemore/fruigies/onion.png'),
      price: 29.99,
    },
    {
      id: 5,
      name: 'Lettuce',
      image: require('../img/savemore/fruigies/lettuce.png'),
      price: 29.99,
    },
    {
      id: 6,
      name: 'Bitter Gourd',
      image: require('../img/savemore/fruigies/ampalaya.png'),
      price: 29.99,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Fruits & Vegetables</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/fruigies.jpg')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardC
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}


//Procucts for Frozen category
function ProductListD() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Salmon',
      image: require('../img/savemore/frozen/salmon.png'),
      price: 300.22,
    },
    {
      id: 2,
      name: 'Packed Fries',
      image: require('../img/savemore/frozen/fries.png'),
      price: 117.38,
    },
    {
      id: 3,
      name: 'Porkchop',
      image: require('../img/savemore/frozen/pork.png'),
      price: 177.55,
    },
    {
      id: 4,
      name: 'Chicken Leg',
      image: require('../img/savemore/frozen/leg.png'),
      price: 239.19,
    },
    {
      id: 5,
      name: 'Purefoods Crazy Cut Nuggets',
      image: require('../img/savemore/frozen/nuggets.png'),
      price: 141.42,
    },
    {
      id: 6,
      name: 'Purefoods Cooked Ham',
      image: require('../img/savemore/frozen/ham.png'),
      price: 91.95,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Frozen</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/frozens.jpg')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardD
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}


//Procucts for Canned and Condiments category
function ProductListE() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Purefoods Corned Beef',
      image: require('../img/savemore/canned/corned.png'),
      price: 240.42,
    },
    {
      id: 2,
      name: 'Century Tuna Flakes in Oil',
      image: require('../img/savemore/canned/tuna.png'),
      price: 57.13,
    },
    {
      id: 3,
      name: 'Mama Sitas Oyster Sauce',
      image: require('../img/savemore/canned/oyster.png'),
      price: 22.52,
    },
    {
      id: 4,
      name: 'Knorr Liquid Seasoning',
      image: require('../img/savemore/canned/knorr.png'),
      price: 56.23,
    },
    {
      id: 5,
      name: 'Lucky Me Pancit Canton All Flavors',
      image: require('../img/savemore/canned/canton.png'),
      price: 33.61,
    },
    {
      id: 6,
      name: 'Golden Fiesta Palm Oil',
      image: require('../img/savemore/canned/oil.png'),
      price: 31.35,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Canned & Condiments</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/condiments.jpg')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardE
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}


//Procucts for Household category
function ProductListF() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: 'Dove Body Wash',
      image: require('../img/savemore/household/dove.png'),
      price: 109.99,
    },
    {
      id: 2,
      name: 'Citrus Hand Soap',
      image: require('../img/savemore/household/handsoap.png'),
      price: 89.52,
    },
    {
      id: 3,
      name: 'Zonrox Bleach',
      image: require('../img/savemore/household/zonrox.png'),
      price: 42.25,
    },
    {
      id: 4,
      name: 'Tide Soap',
      image: require('../img/savemore/household/tide.png'),
      price: 39.29,
    },
    {
      id: 5,
      name: 'Lysol Disinfectant Spray',
      image: require('../img/savemore/household/lysol.png'),
      price: 199.13,
    },
    {
      id: 6,
      name: 'Green Cross Isopropyl Alcohol',
      image: require('../img/savemore/household/green.png'),
      price: 29.15,
    },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    // <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <Text style={styles.textHeader1}>Household Necessities</Text> 
        <Image style ={styles.grocery1} source={require('../img/grocery3.png')} />
        </View>
        <Image style ={styles.image1} source={require('../img/detergents.webp')} /> 
          <View style={styles.row}>
            {products.map((product) => (
              <ProductCardF
              
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product)}
              />
            ))}
          </View>

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              visible={modalVisible}
              onClose={handleModalClose}
            />
          )}
        </View>
      </ScrollView>
    // </View>
  );
}


//tab screens
function Screen1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListA />
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListB />
    </View>
  );
}

function Screen3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListC />
    </View>
  );
}

function Screen4() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListD />
    </View>
  );
}

function Screen5() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListE />
    </View>
  );
}

function Screen6() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProductListF />
    </View>
  );
}

export default SavemoreScreen;