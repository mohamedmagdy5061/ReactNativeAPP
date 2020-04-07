import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="rgba(0, 0, 0, 0.55)"
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="rgba(0, 0, 0, 0.55)"
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Sign In pressed')}
      >
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray'
  },
  input: {
    backgroundColor: '#ef9a9a',
    width: '80%',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
    color: '#000'
  },
  button: {
    borderColor: '#ba6b6c',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#ba6b6c',
    alignSelf: 'center',
    width: '80%',
    marginVertical: 5

  },
  textButton: {
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: 5
  }
});

export default LoginForm;
