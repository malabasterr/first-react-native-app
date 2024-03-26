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
import ButtonA from './components/Level9Buttons/ButtonA';
import ButtonB from './components/Level9Buttons/ButtonB';
import ButtonC from './components/Level9Buttons/ButtonC';
import ButtonD from './components/Level9Buttons/ButtonD';
import ButtonE from './components/Level9Buttons/ButtonE';
import ButtonF from './components/Level9Buttons/ButtonF';
import ButtonG from './components/Level9Buttons/ButtonG';
import ButtonH from './components/Level9Buttons/ButtonH';
import ButtonI from './components/Level9Buttons/ButtonI';

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
          <Stack.Screen name="ButtonA" component={ButtonA} />
          <Stack.Screen name="ButtonB" component={ButtonB} />
          <Stack.Screen name="ButtonC" component={ButtonC} />
          <Stack.Screen name="ButtonD" component={ButtonD} />
          <Stack.Screen name="ButtonE" component={ButtonE} />
          <Stack.Screen name="ButtonF" component={ButtonF} />
          <Stack.Screen name="ButtonG" component={ButtonG} />
          <Stack.Screen name="ButtonH" component={ButtonH} />
          <Stack.Screen name="ButtonI" component={ButtonI} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};