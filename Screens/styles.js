const styles ={

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical: 10,
    marginHorizontal: 15,
  },

  //tab bar
  tabBar: {
    backgroundColor: 'transparent',
    // flexDirection: 'column',
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#699773',
    inactiveTintColor: '#000000',
  },
  tabIcon: {
    width: 40,     
    height: 40,       
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tabBarLabelStyle: {
    fontSize: 10,         //size jj
    fontWeight: 'bold',
    marginTop: 25,
  },

  subContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 20,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 20,
  },

  //header
  image1: {
    width: 370,
    height: 250,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
  grocery1: {
    width: 100,
    height: 28,
    alignSelf:'flex-end',
  },
  grocery2: {
    width: 110,
    height: 28,
    padding: 5,
    marginLeft: 260,
  },
  grocery3: {
    width: 70,
    height: 28,
    padding: 5,
    marginLeft: 300,
  },
  grocery4: {
    width: 80,
    height: 25,
    padding: 5,
    marginLeft: 290,
  },
  textHeader1: {
    fontSize: 20,
    color: "black",
  },


  //card
  productCard: {
    width: 180,
    backgroundColor: '#f4c1c1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },


  //products list
  image: {
    width: 130,
    height: 115,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  info: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

name: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 5,
  marginTop: 5,
  textAlign: 'center',
},
price: {
  fontSize: 15,
  color: '#57504d',
  marginBottom: 10,
  alignSelf:'flex-end',
},

  //button cards
  button: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  //modal
  modal: {
    flex: 1,
    backgroundColor: '#F4DF9C',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#abd7ab',
    height: '100%',
    padding: 30,
  },
  modalImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',   
    marginBottom: 20,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalPrice: {
    fontSize: 25,
    color: '#000000',
    marginBottom: 8,
  },
  quantityPicker: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 3,
    left: 227,      //alignment of picker jj 180
  },
  arrowButton: {
    width: 30,
    height: 30,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  arrowButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  quantityPickerBtn: {
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    width: 30,
    height: 30,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  quantityPickerBtnHover: {
    cursor: 'pointer',
  },
  quantityPickerValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantityPickerValueFocus: {
    outline: 'none',
  },
  quantityPickerBtnDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  modalButton: {
    backgroundColor: '#78be79',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#888',
    textAlign: 'center',
  },
// Modal Styling
  selectedContainer:{
  flex: 1,
  alignItems: 'center',
  backgroundColor:'#fbc601',
  },
  selectedImage:{
  width: 350,
  height: 250,
  borderRadius: 50,
  marginTop: 50,
  marginBottom: 40,
  },
  
  selectedSubText:{
  backgroundColor:'white',
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  width: '100%',
  height: '100%',
  },
  selectedTextRow:{
  flexDirection:'row',
  marginTop: 15,
  justifyContent:'space-around',
  alignItems:'center',
  },
  selectedName:{
  fontSize: 25,
  fontWeight: 'bold',
  alignSelf:'flex-start',
  textTransform:'uppercase',
  },
  selectedPrice:{
  fontSize: 20,
  },
  selectedDescription:{
  fontSize: 14,
  lineHeight: 25,
  marginTop: 10,
  marginBottom: 10,
  marginHorizontal: 30,
  textAlign:'justify',
  },
  selectedDesign:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  },
  
  selectedBoxDesign:{
  backgroundColor:'#e0e6ff',
  height: 60,
  width: 70,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 10,
  shadowColor: '#46443F',
  elevation: 5,
  },
  
  selectedRowButton:{
  flexDirection:'row',
  justifyContent:'space-around',
  marginTop: 25,
  },
  icon: {
  fontSize: 25,
  color: "#7195a1", 
  },
  selectedIconButton:{
  width: '15%',
  height: 45,
  borderRadius: 30,
  backgroundColor:'white',
  justifyContent: 'center',
  shadowColor: '#46443F',
  elevation: 5,
  alignItems:'center',
  },
  selectedOnPressButton:{
  width: '50%',
  height: 45,
  backgroundColor: '#7195a1',
  borderRadius: 30,
  justifyContent: 'center',
  },
  selectedOnPressText:{
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'white'
  },

};

export default styles;
