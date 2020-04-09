import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import LoginScreen from './src/screens/LoginScreen';
import ResetPassword from './src/screens/ResetPassword';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import LogOut from './src/components//LogOut';
import RestaurantsList from './src/components/restaurants/RestaurantsList';
import RestaurantInfo from './src/components/restaurants/RestaurantInfo';
import Todo from './src/components/todo/Todo';
import MarketSearch from './src/components/superMarket/MarketSearch';
import MarketInfo from './src/components/superMarket/MarketInfo';





import reducers from './store/reducers';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RestaurantsList} />
      <Tab.Screen name="Settings" component={LoginScreen} />
    </Tab.Navigator>
  );
}

const ScreenOptions = {
  headerShown: false,
  title: 'Home',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#004d40' }
};

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Navigator headerMode='none'>  */}

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
            name="HomeScreen"
            component={HomeScreen}
            options={{
              ...ScreenOptions,
              title: 'Home',
              headerShown: true,
              headerLeft: false,
              headerRight: () => <LogOut />
            }}
          />

          <Stack.Screen
            name="Todo"
            component={Todo}
            options={{
              ...ScreenOptions,
              headerShown: true,
              title: 'Todo'
            }}
          />

          <Stack.Screen
            name="RestaurantsList"
            component={RestaurantsList}
            options={{
              ...ScreenOptions,
              title: 'List',
              headerShown: true
            }}
          />
          <Stack.Screen
            name="RestaurantInfo"
            component={RestaurantInfo}
            options={{
              ...ScreenOptions,
              title: 'Info',
              headerShown: true
            }}
          />
            <Stack.Screen
            name="MarketSearch"
            component={MarketSearch}
            options={{
              ...ScreenOptions,
              title: '',
              headerShown: true
            }}
          />

<Stack.Screen
          name="MarketInfo"
          component={MarketInfo}
          options={{
            ...ScreenOptions,
            title: 'Market Info',
            headerShown: true
          }}
        />
          <Stack.Screen
            name="tabs"
            component={TabScreen}
            ptions={{
              ...ScreenOptions,
              title: 'Info',
              headerShown: true
            }}
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
