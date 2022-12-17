import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const GridItem = ({item, onSelected,}) => {
  return (
      <View style={styles.gridItem}> 
          
          
          <TouchableOpacity
              style=
              {{
                  ...styles.container,
                  backgroundColor: item.color
                  
              }}
              onPress={() => onSelected(item)}>
              <View>
                  <Image
                      style={styles.imageContainer}
                      source={{item.image}}
                  />
                  
                  
                  <Text style={styles.title}>
                      {item.title}
                  </Text>
                  
              </View>
          </TouchableOpacity>
       </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        
        borderRadius: 6,
        margin: 10,
        height: 160,
        
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
        
        
    },
    title: {
        fontFamily: 'ComfortaaBold',  
        
    },

    imageView: {
        height: 100,
        width:100,
    },
    
    imageContainer: {
        height: 30,
        width:30, 
    }



})