import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Todo')}>
          <Image
            style={styles.todo}
            source={require('../../assets/todo6.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RestaurantsList')}>
          <Image
            style={styles.todo}
            source={require('../../assets/restaurant3.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.todo}
            source={require('../../assets/superMarket.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.todo}
            source={require('../../assets/hotel.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.todo}
            source={require('../../assets/transport.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.todo}
            source={require('../../assets/hospital.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15
  },
  button: {
    padding: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#439889',
    borderRadius: 4
  },
  todo: {
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor:"#fff"
  },
  restaurant: {
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 2
  }
});

export default HomeScreen;
