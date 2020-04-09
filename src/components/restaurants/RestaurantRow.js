import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import StarsRating from './StarsRating';

const RestaurantRow = ({ restaurant, index, navigation }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: index % 2 === 0 ? '#FFF' : '#f3f3f3'
      }}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.address}>{restaurant.address}</Text>
        <View style={{ flexDirection: 'row' }}>
          <StarsRating rating={restaurant.rating} />
        </View>
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('RestaurantInfo', { restaurant })}
        underlayColor="#439889"
      >
        <Text style={styles.info}>Info</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  nameContainer: {
    flex: 8,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  name: {
    fontSize: 16
  },
  address: {
    color: 'gray'
  },
  button: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 17,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 15
  },
  info: {
    color: '#003d33',
    fontSize: 12
  }
});

export default withNavigation(RestaurantRow);
