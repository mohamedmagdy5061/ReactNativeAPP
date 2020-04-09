import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList,Linking, Platform, Button } from 'react-native';
import { getSearchApiById } from '../../api/yelp';

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


  const openDiler = (number) => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${number}`);
    } else {
      Linking.openURL(`telprompt:${number}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{marketDetails.name}</Text>
      {/* <View style={styles.profileInfoCard} onPress={() => openDiler()}> */}
          <View style={styles.cardView}>
            <Button  title="phone" color={'#DB2544'} size={20}  onPress={() => openDiler(marketDetails.phone)} />
            <Text style={styles.profileInfo}>{marketDetails.phone} </Text>
          </View>
        {/* </View> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={marketDetails.photos}
        keyExtractor={ photos => photos}
        renderItem={({ item }) =>
          <Image style={styles.image} source={{ uri: item }} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    width: 200,
    height: 150
  },
  profileInfoCard: {
    margin: 5,
    // justifyContent: 'space-between',
    backgroundColor: '#F8BA3C',
    // flexWrap: 'wrap'
  },
  cardView: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  profileInfo: {
    color: '#020202',
    fontSize: 14,
    paddingTop:8,
    // textAlignVertical:'meddil'

  },
});

export default MarketInfo;
