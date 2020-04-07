import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Logo from '../components/Logo'


const LoginScreen = () => {
    return(
        <View>
            <Logo />

            <View >
                <TextInput placeholder='User Name'/>
                <TextInput placeholder='Password' />
                <Button title='Login'/>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({

})


export default LoginScreen