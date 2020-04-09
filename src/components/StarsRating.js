import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarsRating = ({ rating }) => {
    const stars = [...Array(Math.ceil(rating))]

  return (
        stars.map((item, index) => {
            const name = Math.floor(rating) > index ? 'star' : 'star-half-full'
            return <FontAwesome key={index} name={name} style={styles.stars} color="#FFD64C" />
        })

  );
};

const styles = StyleSheet.create({
  stars: {
    fontSize: 13
  }
});

export default StarsRating;
