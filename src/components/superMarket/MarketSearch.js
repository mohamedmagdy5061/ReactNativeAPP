import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../SearchBar';
import useSearch from '../../hooks/useSearch';
import MarketList from '../superMarket/MarketList';

const MarketSearch = ({ navigation }) => {
  const [trem, setTrem] = useState('');
  const [search, restaurants, errorMessage] = useSearch();

  const filterRestaurantsByPrice = price =>
    restaurants.filter(item => item.price === price);

  return (
    // <View style={{ flex: 1 }}>   OR use
    <>
      <SearchBar
        trem={trem}
        onChangeTrem={setTrem}
        onTremSubmit={search}
      />
      {errorMessage ? (
        <Text style={styles.searchErrorMessage}>{errorMessage}</Text>
      ) : null}
      
      <ScrollView>
        <MarketList
          data={filterRestaurantsByPrice('$')}
          title="Cost Effective"
        />
        <MarketList
          data={filterRestaurantsByPrice('$$')}
          title="Bit Pricier"
        />
        <MarketList
          data={filterRestaurantsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
    // </View>
  );
};

const styles = StyleSheet.create({
  searchErrorMessage: {
    color: 'red',
    marginHorizontal: 15
  }
});

export default MarketSearch;
