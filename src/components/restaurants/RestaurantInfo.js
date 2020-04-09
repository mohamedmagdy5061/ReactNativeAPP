import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import StarsRating from './StarsRating';


const  RestaurantInfo = ({route}) => {
    const data = route.params.restaurant
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{uri: data.image}}  />
            <Text  style={styles.name} > {data.name}</Text>
            <Text>{data.address}</Text>
            <StarsRating rating={data.rating} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20

    },
    name: {
        fontSize: 18,

    },
    image: {
        width: 300,
        height: 200
    }
  });

export default RestaurantInfo
