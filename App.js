import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen'
import LoginForm from './src/components/LoginForm'
import { SafeAreaView } from 'react-native';



const Stack = createStackNavigator();

const ScreenOptions = {
  // headerShown: false,
  title:'Login',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#E34C4F' },
}

export default function App() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
    <Stack.Navigator headerMode='none'>
    {/* <Stack.Navigator headerMode='none'> */} 
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
  // </SafeAreaView>

  // <LoginScreen />
  );
}

