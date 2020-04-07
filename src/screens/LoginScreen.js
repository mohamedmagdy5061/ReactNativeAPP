import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

import Logo from '../components/Logo';

const LoginScreen = () => {
  return (
    <View>
      <Logo />

      <View>
        <TextInput placeholder="User Name" />
        <TextInput placeholder="Password" />
        <Button title="Login" />
      </View>
      <View>
          <Form>
            <Item floatingLabel>
              <Label style={{color:'green'}}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
