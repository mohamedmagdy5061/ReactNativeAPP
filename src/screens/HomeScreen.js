import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { black } from 'ansi-colors';

const HomeScreen = () => {
    const [todo, setTodo] = useState('')

    const handleInputAddTodo = (input) => {
        setTodo(input)
    }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer} >
            <TextInput 
                placeholder='Add todo'
                style={styles.input}
                value={todo}
                onChangeText={handleInputAddTodo}
                />
            <Button title='ADD' onPress={(x)=>console.log(x)}  />
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