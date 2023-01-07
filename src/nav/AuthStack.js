import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Screen2 from '../screens/auth/Screen2';
const AuthStack = createStackNavigator();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Screen2" component={Screen2} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;
