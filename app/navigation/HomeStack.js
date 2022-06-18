import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SongList from '../screens/SongList';
//import SongDisplay from '../screens/SongDisplay';

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SongList' component={SongList} />
    </Stack.Navigator>
  );
}