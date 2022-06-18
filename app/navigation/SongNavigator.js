
import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';

import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator ();

const SongNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen  options={{headerShown: false}} name= "SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default SongNavigator