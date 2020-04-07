import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

function FooterLogin() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Forget password pressed')}
      >
        <Text style={{...styles.textButton, color: '#000'}}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Sign up pressed')}
      >
        <Text style={styles.textButton}>Sign Up >></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30
  },
  button: {
    alignSelf: 'flex-end',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#005b9f'
  }
});

export default FooterLogin;
