import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const ScreenOptions = {
  title:'Home',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#E34C4F' },
}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
  );
}

