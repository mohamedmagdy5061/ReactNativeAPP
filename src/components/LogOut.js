import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from '@react-navigation/compat';

const LogOut = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons
          name="ios-log-out"
          style={styles.textButton}
          color="#f3f3f3"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    paddingRight: 10
  },
  textButton: {
    fontSize: 20,
    color: '#FFF'
  }
});

export default withNavigation(LogOut);
