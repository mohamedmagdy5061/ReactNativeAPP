import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarsRating from '../StarsRating';

const MarketDetails = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name} >{data.name}</Text>
      <View style={{ flexDirection: 'row', marginBottom: 20,  alignItems:'center'}}>
        {data.rating && <StarsRating rating={data.rating} />}
        <Text style={styles.reviews} >{data.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      padding: 5,
      backgroundColor: '#f3f3f3',
      marginLeft: 15,
      marginBottom: 10
  },
  image: {
    width: 200,
    height: 150
  },
  name: {
      fontWeight: 'bold'
  },
  reviews: {
    color: "gray",
    marginLeft:5,
    fontSize:12
   
  }
});

export default MarketDetails;
