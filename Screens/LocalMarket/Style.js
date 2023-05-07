const styles = {
    container: {
      flex: 1,
      backgroundColor: '#FDFCF4',
    }, 
    subContainer: {
      marginVertical: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      rowGap: 20,
    },
    productContainer:{
    width: 175,
    height: 220,
    backgroundColor: '#f6df8a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#46443F',
    elevation: 10,
    },
    image:{
    width: 140, 
    height: 110, 
    borderRadius: 10,
    resizeMode:"contain",
    },
    productInfo:{
      marginTop: 20,
    },
    productText:{
      textAlign:'center',
      fontSize:17,
      fontWeight: 'bold',
    },
    productPrice:{
      fontSize: 17,
      alignSelf:'flex-end',
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
    color: 'white',
    },
}

export default styles;