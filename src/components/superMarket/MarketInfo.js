import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Linking,
  Platform,
  TouchableHighlight
} from 'react-native';
import { getSearchApiById } from '../../api/yelp';
import { Feather } from '@expo/vector-icons';
import StarsRating from '../StarsRating';

const MarketInfo = props => {
  const [marketDetails, setMarketDetails] = useState({});
  const { id } = props.route.params;

  const getmarketDetails = async id => {
    try {
      const data = await getSearchApiById(id);
      setMarketDetails(data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getmarketDetails(id);
  }, []);

  const openDiler = number => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${number}`);
    } else {
      Linking.openURL(`telprompt:${number}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>
        {marketDetails.name}
      </Text>
      <View style={styles.cardView}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => openDiler(marketDetails.phone)}
          underlayColor="#439889"
        >
          <Feather name="phone" size={20} color="blue" />
        </TouchableHighlight>

        <Text style={styles.profileInfo}>{marketDetails.phone} </Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {marketDetails.rating && <StarsRating rating={marketDetails.rating} />}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={marketDetails.photos}
        keyExtractor={photos => photos}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  image: {
    width: 200,
    height: 150,
    margin: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5
  },
  profileInfoCard: {
    margin: 5,
    backgroundColor: '#F8BA3C'
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  profileInfo: {
    color: '#020202',
    fontSize: 14,
    paddingTop: 8
  },
  button: {
    marginRight: 10
  }
});

export default MarketInfo;
