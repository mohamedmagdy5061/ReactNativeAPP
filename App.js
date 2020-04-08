import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import LoginScreen from './src/screens/LoginScreen'
import ResetPassword from './src/screens/ResetPassword';
import SplashScreen from './src/screens/SplashScreen';



import reducers from './store/reducers'


const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
  title:'Login',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#004d40' },
}

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
    <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Navigator headerMode='none'> */} 
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...ScreenOptions,
          title: 'Reset Password',
          headerShown: true
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>
</Provider>
  );
}

