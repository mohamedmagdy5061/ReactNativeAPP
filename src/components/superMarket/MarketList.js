import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import MarketDetails from './MarketDetails';
import { withNavigation } from '@react-navigation/compat';

const MarketList = ({ title, data, navigation }) => {
    if ( !data.length ) {
        return null
    }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MarketInfo', { id: item.id })}
          >
            <MarketDetails data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(MarketList);
// export default MarketList
