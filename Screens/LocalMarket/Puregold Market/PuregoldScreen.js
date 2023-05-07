import { Image, Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Appbar, tabBarOptions, useTheme } from 'react-native-paper';
import styles from '../styles';

const Tab = createMaterialTopTabNavigator();


function PuregoldScreen() {
  return (
    <View style={{flex:1,}} >
      {/* <Image source={require('./img/grocery4.png')} style={styles.headerImage} /> */}
    
    <Tab.Navigator tabBarOptions={styles.tabBarOptions}>
    <Tab.Screen 
          name="Tab1" 
          component={Screen1} 
          options={{
            tabBarIcon: ({size}) => (
              <Image source={require('./img/snack.png')} style={[styles.tabIcon]} />
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
              <Image source={require('./img/beverage.png')} style={[styles.tabIcon]} />
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
              <Image source={require('./img/fruits.png')} style={[styles.tabIcon]} />
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
              <Image source={require('./img/frozen.png')} style={[styles.tabIcon]} />
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
              <Image source={require('./img/canned.png')} style={[styles.tabIcon]} />
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
              <Image source={require('./img/household.png')} style={[styles.tabIcon]} />
            ),
            tabBarLabel: ' ',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginTop: 17,
            }
          }}
        />

      {/* <Tab.Screen name="Tab1" component={Screen1} /> */}
      {/* <Tab.Screen name="Tab2" component={Screen2} />
      <Tab.Screen name="Tab3" component={Screen3} />
      <Tab.Screen name="Tab4" component={Screen4} />
      <Tab.Screen name="Tab5" component={Screen5} />
      <Tab.Screen name="Tab6" component={Screen6} /> */}
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
      name: 'Piattos All Flavors',
      image: require('./img/puregold/snack/junkfood.png'),
      price: 149.25,
    },
    {
      id: 2,
      name: 'Frutos Chewy Candy',
      image: require('./img/puregold/snack/candies.png'),
      price: 35.75,
    },
    {
      id: 3,
      name: 'Snickers Pack',
      image: require('./img/puregold/snack/chocolate.png'),
      price: 192.85,
    },
    {
      id: 4,
      name: 'My San Fita',
      image: require('./img/puregold/snack/biscuit.png'),
      price: 17.65,
    },
    {
      id: 5,
      name: 'Gardenia Bread',
      image: require('./img/puregold/snack/bread.png'),
      price: 223.75,
    },
    {
      id: 6,
      name: 'Nagaraya All Flavors',
      image: require('./img/puregold/snack/nuts.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/snacks.png')} /> 
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
      name: 'Alfonso Light 1',
      image: require('./img/puregold/beverages/alcohol.png'),
      price: 233.15,
    },
    {
      id: 2,
      name: 'Coca Cola 1.75L',
      image: require('./img/puregold/beverages/softdrink.png'),
      price: 90.15,
    },
    {
      id: 3,
      name: 'Kopiko Pack',
      image: require('./img/puregold/beverages/coffee.png'),
      price: 52.25,
    },
    {
      id: 4,
      name: 'Gatorade All Flavors',
      image: require('./img/puregold/beverages/sportsdrink.png'),
      price: 210.19,
    },
    {
      id: 5,
      name: 'Zesto Juice All Flavors',
      image: require('./img/puregold/beverages/juice.png'),
      price: 49.29,
    },
    {
      id: 6,
      name: 'San Miguel Pale Pilsen',
      image: require('./img/puregold/beverages/beer.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/drinks.png')} /> 
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
      name: 'Apple',
      image: require('./img/puregold/fruigies/apple.png'),
      price: 9.99,
    },
    {
      id: 2,
      name: 'Mango',
      image: require('./img/puregold/fruigies/mango.png'),
      price: 19.99,
    },
    {
      id: 3,
      name: 'Pechay',
      image: require('./img/puregold/fruigies/pechay.png'),
      price: 29.99,
    },
    {
      id: 4,
      name: 'Squash',
      image: require('./img/puregold/fruigies/squash.png'),
      price: 29.99,
    },
    {
      id: 5,
      name: 'Carrot',
      image: require('./img/puregold/fruigies/carrot.png'),
      price: 29.99,
    },
    {
      id: 6,
      name: 'Avocado',
      image: require('./img/puregold/fruigies/avocado.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/fruigies.jpg')} /> 
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
      name: 'Beef',
      image: require('./img/puregold/frozen/beef.png'),
      price: 300.22,
    },
    {
      id: 2,
      name: 'Chicken Wings',
      image: require('./img/puregold/frozen/chicken.png'),
      price: 117.38,
    },
    {
      id: 3,
      name: 'Tilapia',
      image: require('./img/puregold/frozen/tilapia.png'),
      price: 177.55,
    },
    {
      id: 4,
      name: 'Mackerel',
      image: require('./img/puregold/frozen/mackerel.png'),
      price: 239.19,
    },
    {
      id: 5,
      name: 'Tender Juicy Cheesedog',
      image: require('./img/puregold/frozen/hotdog.png'),
      price: 141.42,
    },
    {
      id: 6,
      name: 'Funtaystyk Young Pork Tocino',
      image: require('./img/puregold/frozen/tocino.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/frozens.jpg')} /> 
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
      name: 'Spam Less Sodium',
      image: require('./img/puregold/canned/spam.png'),
      price: 240.42,
    },
    {
      id: 2,
      name: 'Datu Puti Trio Pack',
      image: require('./img/puregold/canned/datu.png'),
      price: 57.13,
    },
    {
      id: 3,
      name: 'Mega Sardines with Chili',
      image: require('./img/puregold/canned/sardines.png'),
      price: 22.52,
    },
    {
      id: 4,
      name: 'Heinz Tomato Ketchup',
      image: require('./img/puregold/canned/ketchup.png'),
      price: 56.23,
    },
    {
      id: 5,
      name: 'Mang Tomas All Around Sarsa',
      image: require('./img/puregold/canned/mangtomas.png'),
      price: 33.61,
    },
    {
      id: 6,
      name: 'Supreme Cup Noodles Bulalo',
      image: require('./img/puregold/canned/bulalo.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/condiments.jpg')} /> 
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
      name: 'Bathroom Tissue',
      image: require('./img/puregold/household/tissue.png'),
      price: 109.99,
    },
    {
      id: 2,
      name: 'Sanicare Wipes',
      image: require('./img/puregold/household/wipes.png'),
      price: 89.52,
    },
    {
      id: 3,
      name: 'Downy Detergent',
      image: require('./img/puregold/household/downy.png'),
      price: 42.25,
    },
    {
      id: 4,
      name: 'Surf Powder',
      image: require('./img/puregold/household/surf.png'),
      price: 39.29,
    },
    {
      id: 5,
      name: 'Pantene Shampoo',
      image: require('./img/puregold/household/pantene.png'),
      price: 199.13,
    },
    {
      id: 6,
      name: 'Safeguard Soap',
      image: require('./img/puregold/household/safeguard.png'),
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
        <Image style ={styles.grocery1} source={require('./img/grocery2.png')} />
        </View>
        <Image style ={styles.image1} source={require('./img/detergents.webp')} /> 
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


export default PuregoldScreen;