import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,  
} from 'react-native';
// import { withNavigation } from '@react-navigation/compat';
import { useNavigation } from '@react-navigation/native';



function FooterLogin( ) {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ResetPassword')}

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
    color: '#005b9f'
  }
});

// export default withNavigation(FooterLogin);
export default FooterLogin;
