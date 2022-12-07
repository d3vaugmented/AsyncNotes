import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
  Notes,
  AddNote,
  EditNote,
  Settings,
  NoteDetail,
} from '../screens';
export default function Onboarding() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="NoteDetail"
        component={NoteDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNote}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNote}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

