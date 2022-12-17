 import { StyleSheet, Text, View, Button, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../store/actions/cart.action";

 

const BreadDetailsScreen = () => {
  
  const bread = useSelector((state) => state.breads.selected);

  useEffect(() => {
    console.log(bread);
  }, []);

  const dispatch = useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(bread));
  
 return (
   <View style={styles.container}>
    
      
    <View style={styles.screen}>
       
       
       
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>${bread.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
        </View>
      </View>
    </View>
  );
 }
 
export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: 'ComfortaaBold',
  },
  description: {
    fontSize: 20,
    fontFamily: 'ComfortaaBold',
  },
  price: {
    fontSize: 40,
    fontFamily: 'ComfortaaBold',
  },
  button: {
    marginTop: 15,
    
  },
  imageContainer: {
    height: 100,
    width:100
  }
});