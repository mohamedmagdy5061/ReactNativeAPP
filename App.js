import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen'
import LoginForm from './src/components/LoginForm'


const Stack = createStackNavigator();

const ScreenOptions = {
  title:'Login',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#E34C4F' },
}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={ScreenOptions}
      />

      {/* <Stack.Screen
        name="SearchDetails"
        component={SearchDetails}
        options={{
          ...ScreenOptions,
          title: 'Details Search'
        }}
      /> */}

    </Stack.Navigator>
  </NavigationContainer>

  // <LoginScreen />
  );
}

