import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginScreen from './screens/login';
import garageScreen from './screens/garage';
import addCarScreen from './screens/addCar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Garage" component={garageScreen} />
        <Stack.Screen name="Add a Car" component={addCarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
