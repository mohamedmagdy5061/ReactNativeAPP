import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MarketDetails = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name} >{data.name}</Text>
      <Text style={styles.rate} >{data.rating} Stars, {data.review_count} Reviews</Text>
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
  rate: {
    
  }
});

export default MarketDetails;
