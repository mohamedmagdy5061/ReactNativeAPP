import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';


function Logo() {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/FAVPNG_lilo.png')}/> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center'
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 300/2,
        backgroundColor: '#9a0007',
        alignSelf: 'center',
    }


})

export default Logo
