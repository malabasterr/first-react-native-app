import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all pages
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import UnlockLevel7Screen from './components/UnlockLevel7Screen';
import Level7Screen from './components/Level7Screen';
import Level8Screen from './components/Level8Screen';
import Level9Screen from './components/Level9Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

// Navigation between pages
// NOTE the 'Screen' listed at the top of the stack will automatically be displayed when the app is loaded

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="UnlockLevel7" component={UnlockLevel7Screen} />
          <Stack.Screen name="Level7" component={Level7Screen} />
          <Stack.Screen name="Level8" component={Level8Screen} />
          <Stack.Screen name="Level9" component={Level9Screen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};