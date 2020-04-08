import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text, Image } from 'react-native';

function SplashScreen({navigation}) {
  const [value] = useState(new Animated.Value(0));

  useEffect(() => {
    const rotateAnimation = Animated.timing(value, {
      toValue: 1,
      duration: 2000
    });
    Animated.loop(rotateAnimation, {
      iterations: 3
    }).start();
    setTimeout(()=> navigation.navigate('Login') ,6000)

  }, []);

  const animationStyles = {
    transform: [
      {
        rotate: value.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, animationStyles]}
        source={require('../../assets/car-wash2.png')}
        resizeMode="cover"
      />
      <Text style={styles.text}>Car Care</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7f0000',
    padding: 5
  },
  image: {
    width: 200,
    height: 200
  }
});

export default SplashScreen;
