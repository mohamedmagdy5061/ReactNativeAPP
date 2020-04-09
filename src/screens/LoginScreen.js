import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm'
import FooterLogin from '../components/FooterLogin'

// import { connect } from 'react-redux';
// import { loginUser } from '../../store/actions'


const LoginScreen = ({ navigation }) => {
  return (
    <>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{backgroundColor:'#FFF',flex:1}}>
      <Logo />
      <LoginForm navigation={navigation} />
      <FooterLogin />
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </>
  );
};
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default LoginScreen;


// export default connect(null, {loginUser} )(LoginScreen);
