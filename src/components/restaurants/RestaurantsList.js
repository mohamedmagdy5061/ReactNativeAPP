import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Platform
} from 'react-native';
import Header from './Header';
import HeaderStyles from '../../styles/HeaderStyles';
import restaurants from '../../constants/Restaurants';
import RestaurantRow from './RestaurantRow'

const RestaurantsList = () => {
  const [search, setSearch] = useState('');

//   const renderItems = (item, index) => (
//     <View style={{ backgroundColor: index % 2 === 0 ? '#FFF' : '#f3f3f3' }}>
//       <Text>{item.name}</Text>
//       <Text>{item.id}</Text>
//     </View>
//   );

  // const platformHeaderStyles = Platform.select({
  //     ios: HeaderStyles.iOSHeader,
  //     android: HeaderStyles.header
  // })

  const filterdRestaurants = () =>
    restaurants.data.filter(item => {
      return (
        !search || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    });

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        placeholder="Filter By Name"
        value={search}
        style={styles.filterInput}
        onChangeText={value => setSearch(value)}
      />
      <ScrollView contentContainerStyle={{paddingTop:20}}>
        <FlatList
          style={styles.list}
          data={filterdRestaurants()}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => <RestaurantRow restaurant={item} index={index} />}
          initialNumToRender={10}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  filterInput: {
    borderColor: '#bbb',
    borderWidth: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom:5

  }
});

export default RestaurantsList;
