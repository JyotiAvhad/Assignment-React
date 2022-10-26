import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DetailedScreen from './src/screens/DetailedScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        options={{ headerShown: true }}>

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: true }} />

        <Stack.Screen
          name="DetailedScreen"
          component={DetailedScreen}
          options={{ headerShown: true }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
