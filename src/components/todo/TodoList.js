import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

const TodoList = ({data}) => {
    
    if ( !data.length ) {
        return null
    }

   const  renderItem = (item) => (
        <View style={styles.todoTextContainer}>
            <Text style={styles.todoText} >{item}</Text>
        </View>
   )

  return (
    <View >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={data => data}
        renderItem={({ item }) =>renderItem(item)}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    todoTextContainer: {
        marginBottom: 10,
        flex:1,
    },
  todoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default TodoList
