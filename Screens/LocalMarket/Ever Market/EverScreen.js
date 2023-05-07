import { Image, Modal, View,StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles';

const Tab = createMaterialTopTabNavigator();


function EverScreen() {
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
      name: 'Fibisco Choco Chip Cookies 600g',
      image: require('../img/ever/snack/chocchip.png'),
      price: 216,
    },
    {
      id: 2,
      name: 'Fita Crackers 600g',
      image: require('../img/ever/snack/fita.png'),
      price: 186,
    },
    {
      id: 3,
      name: 'Chips Delight Cookies Baon Pack 10s',
      image: require('../img/ever/snack/chipsdelight.png'),
      price: 84.25,
    },
    {
      id: 4,
      name: 'Edelyns Crunchy Dry Toasted Cashew Nuts 300g',
      image: require('../img/ever/snack/cashew.png'),
      price: 475,
    },
    {
      id: 5,
      name: 'Fry & Pop Squid Flakes Crackers 400g',
      image: require('../img/ever/snack/squidflakes.png'),
      price: 82.75,
    },
    {
      id: 6,
      name: 'The Superfood Grocer Chia Seeds 100g',
      image: require('../img/ever/snack/chia.png'),
      price: 129,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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
      name: 'Absolute Pure Distilled Drinking Water 5L',
      image: require('../img/ever/beverages/absolute.png'),
      price: 69.25,
    },
    {
      id: 2,
      name: 'Coke Coca-Cola Original Taste Can 6x320ml SAVE',
      image: require('../img/ever/beverages/coca-cola-original.png'),
      price: 195,
    },
    {
      id: 3,
      name: 'Coke Coca-Cola Light Taste PET 2x1.5L P115',
      image: require('../img/ever/beverages/coca-cola-light.png'),
      price: 115,
    },
    {
      id: 4,
      name: 'Biofitea Herbal Tea 5s',
      image: require('../img/ever/beverages/biofitea.png'),
      price: 36.50,
    },
    {
      id: 5,
      name: 'Blend 45 Kapeng Pinoy Kondensada Coffee Mix 10x20g',
      image: require('../img/ever/beverages/blend.png'),
      price: 55.25,
    },
    {
      id: 6,
      name: 'Deja Brew Cafe 100% Pure Roasted Ground Coffee Barako Blend 250g',
      image: require('../img/ever/beverages/deja.png'),
      price: 210,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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
      name: 'Layden Cauliflower 480g-500g',
      image: require('../img/ever/fruigies/cauliflower.png'),
      price: 125,
    },
    {
      id: 2,
      name: 'Layden French Beans 480g-500g',
      image: require('../img/ever/fruigies/frenchbeans.png'),
      price: 199.50,
    },
    {
      id: 3,
      name: 'Layden Parsley 45g-50g',
      image: require('../img/ever/fruigies/parsley.png'),
      price: 30,
    },
    {
      id: 4,
      name: 'Layden Squash 240g-250g',
      image: require('../img/ever/fruigies/squash.png'),
      price: 24.75,
    },
    {
      id: 5,
      name: 'Layden Watermelon 1.5kg-3kg',
      image: require('../img/ever/fruigies/watermelon.png'),
      price: 225,
    },
    {
      id: 6,
      name: 'Layden Lemon Yellow 250g',
      image: require('../img/ever/fruigies/lemon.png'),
      price: 56.25,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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
      name: 'Aguila Beef Tapa 250g',
      image: require('../img/ever/frozen/beeftapa.png'),
      price: 229,
    },
    {
      id: 2,
      name: 'Aguila Bacon & Cheese Sausage 250g',
      image: require('../img/ever/frozen/baconncheese.png'),
      price: 163,
    },
    {
      id: 3,
      name: 'Aguila Vigan Longganisa 250g',
      image: require('../img/ever/frozen/viganlongganisa.png'),
      price: 150,
    },
    {
      id: 4,
      name: 'Dae Jang Gum Korean Tofu Premium Firm 500g',
      image: require('../img/ever/frozen/tofu.png'),
      price: 69,
    },
    {
      id: 5,
      name: 'Dae Jang Gum Chopped Kimchi 500g',
      image: require('../img/ever/frozen/kimchi.png'),
      price: 165,
    },
    {
      id: 6,
      name: 'Banh Trang Rice Paper Wrapper 22cm 400g',
      image: require('../img/ever/frozen/ricepaper.png'),
      price: 115,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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
      name: 'CDO Luncheon Meat Chinese Style 350g',
      image: require('../img/ever/canned/luncheonmeat.png'),
      price: 84.75,
    },
    {
      id: 2,
      name: 'Delimondo Garlic and Chili Corned Beef 260g',
      image: require('../img/ever/canned/delimondo.png'),
      price: 137.75,
    },
    {
      id: 3,
      name: 'SamDel Monte Pineapple Chunks in Extra Light Syrup 560gple',
      image: require('../img/ever/canned/chunks.png'),
      price: 80,
    },
    {
      id: 4,
      name: 'CDO Sweet Kaong Sugar Palm Fruit White 340g',
      image: require('../img/ever/canned/cdokaong.png'),
      price: 85.50,
    },
    {
      id: 5,
      name: 'CDO Sweet Nata de Coco Coconut Gel Green 340g',
      image: require('../img/ever/canned/cdonata.png'),
      price: 63,
    },
    {
      id: 6,
      name: 'SamHeinz Easy Squeeze Tomato Ketchup 20ozple',
      image: require('../img/ever/canned/heinztomato.png'),
      price: 199.25,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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
      name: 'Albatross Deodorizer Blocks Melon with Holder 50g',
      image: require('../img/ever/household/albatros.png'),
      price: 44.25,
    },
    {
      id: 2,
      name: '3M Scotch-Brite Heavy Duty Scrubbing Pad Trial',
      image: require('../img/ever/household/scotchbrite.png'),
      price: 18.50,
    },
    {
      id: 3,
      name: 'Baygon Multi Insect Killer Odorless Aerosol 500ml',
      image: require('../img/ever/household/baygon.png'),
      price: 374,
    },
    {
      id: 4,
      name: 'Breeze Power Machine Liquid Detergent Antibacterial 650ml',
      image: require('../img/ever/household/breeze.png'),
      price: 132.75,
    },
    {
      id: 5,
      name: 'Calla Detergent Powder with Fabric Conditioner Floral Fresh 1.6kg',
      image: require('../img/ever/household/callapowder.png'),
      price: 174.50,
    },
    {
      id: 6,
      name: 'Calla Detergent Bar with Fabric Conditioner Floral Fresh 370g',
      image: require('../img/ever/household/callabar.png'),
      price: 24.25,
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
        <Image style ={styles.grocery1} source={require('../img/grocery4.png')} />
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

export default EverScreen;