import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import TodoList from './TodoList' 

const HomeScreen = () => {
    const [todo, setTodo] = useState('')
    const [todoLists, setTodoLists] = useState([])

    const handleInputTodo = (inputValue) => {
        setTodo(inputValue);

    }
    const handleAddTodoButton = () => {
        setTodoLists( todoLists => [...todoLists, todo] ) ;
        setTodo('');

    }


  return (
    <View style={styles.container}>
        <View style={styles.inputContainer} >
            <TextInput 
                placeholder='Add todo'
                style={styles.input}
                value={todo}
                onChangeText={handleInputTodo}
                />
            <Button title='ADD' onPress={handleAddTodoButton}  />
        </View>
        <View>
            {todoLists.map(item => <TodoList data={item} />) }
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  input: {
    backgroundColor: '#F0EEEE',
    paddingVertical: 10,
    borderColor: '#FEEEEE',
    borderWidth: 1,
    borderRadius: 3,
    flex:3,
    paddingHorizontal: 5
  },
  inputContainer: {
    flexDirection: 'row'
  }

});


export default HomeScreen