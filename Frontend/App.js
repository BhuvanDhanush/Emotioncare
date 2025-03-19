import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
import UserProfile from './components/UserProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="User Profile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
import UserProfile from './components/UserProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="User Profile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}