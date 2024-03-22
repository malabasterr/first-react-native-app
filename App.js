import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all pages
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

// Navigation between pages
// NOTE the 'Screen' listed at the top of the stack will automatically be displayed when the app is loaded

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};