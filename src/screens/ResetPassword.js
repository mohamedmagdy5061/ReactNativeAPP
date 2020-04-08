import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';



const ResetPassword = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSignIn = () => {
        console.log('Sign In pressed')
        setIsLoaded(true);
        setTimeout(() => {
             setIsLoaded(false)
        },3000)
    }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="rgba(0, 0, 0, 0.55)"
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
      >
        {!isLoaded ? <Text style={styles.textButton}>Reset Password</Text> :
        <ActivityIndicator  style={styles.textButton}  color="rgba(255, 255, 255, 0.8)" />}

      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#439889',
    width: '80%',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
    color: '#000'
  },
  button: {
    borderColor: '#003d33',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#004d40',
    alignSelf: 'center',
    width: '80%',
    marginVertical: 5,

  },
  textButton: {
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: 8,
    color: '#FFF'
  }
});

export default ResetPassword;
