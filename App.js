import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all pages
import HomeScreen from './components/HomeScreen';
import UnlockLevel7Screen from './components/UnlockLevel7Screen';
import Level7Screen from './components/Level7Screen';
import Level8Screen from './components/Level8Screen';
import Level9Screen from './components/Level9Screen';
import ButtonA from './components/Buttons/ButtonA';
import ButtonB from './components/Buttons/ButtonB';
import ButtonC from './components/Buttons/ButtonC';
import ButtonD from './components/Buttons/ButtonD';
import ButtonE from './components/Buttons/ButtonE';
import ButtonF from './components/Buttons/ButtonF';
import ButtonG from './components/Buttons/ButtonG';
import ButtonH from './components/Buttons/ButtonH';
import ButtonI from './components/Buttons/ButtonI';
import DoorButton from './components/Buttons/DoorButton';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

// Navigation between pages
// NOTE the 'Screen' listed at the top of the stack will automatically be displayed when the app is loaded

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name="UnlockLevel7" component={UnlockLevel7Screen} options={{ title: 'Unlock' }}/>
          <Stack.Screen name="Level7" component={Level7Screen} options={{ title: 'Level 7' }}/>
          <Stack.Screen name="Level8" component={Level8Screen} options={{ title: 'Level 8' }}/>
          <Stack.Screen name="Level9" component={Level9Screen} options={{ title: 'Level 9' }}/>
          <Stack.Screen name="ButtonA" component={ButtonA} options={{ title: 'Level 9 - A' }}/>
          <Stack.Screen name="ButtonB" component={ButtonB} options={{ title: 'Level 9 - B' }}/>
          <Stack.Screen name="ButtonC" component={ButtonC} options={{ title: 'Level 9 - C' }}/>
          <Stack.Screen name="ButtonD" component={ButtonD} options={{ title: 'Level 9 - D' }}/>
          <Stack.Screen name="ButtonE" component={ButtonE} options={{ title: 'Level 9 - E' }}/>
          <Stack.Screen name="ButtonF" component={ButtonF} options={{ title: 'Level 9 - F' }}/>
          <Stack.Screen name="ButtonG" component={ButtonG} options={{ title: 'Level 9 - G' }}/>
          <Stack.Screen name="ButtonH" component={ButtonH} options={{ title: 'Level 9 - H' }}/>
          <Stack.Screen name="ButtonI" component={ButtonI} options={{ title: 'Level 9 - I' }}/>
          <Stack.Screen name="DoorButton" component={DoorButton} options={{ title: 'Level 8' }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};