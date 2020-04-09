import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ trem, onChangeTrem, onTremSubmit }) => {
  return (
    <View style={styles.SearchBarContainer}>
      <Feather style={styles.SearchBarIcon} name="search" />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        // autoCompleteType={false}
        placeholder="Search" 
        style={styles.SearchBarInput} 
        value={trem}
        onChangeText={ onChangeTrem }
        onEndEditing={ onTremSubmit }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarContainer: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  SearchBarIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  SearchBarInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18
  }
});

export default SearchBar;
