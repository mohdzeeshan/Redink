/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/user/Home';
import Settings from '../screens/user/settings';
import ListPage from '../screens/user/list';
import Icons from 'react-native-vector-icons/Ionicons';

const HomeTabNav = createBottomTabNavigator();

const HomeStackNav = ({route}) => {
  return (
    <HomeTabNav.Navigator
      screenOptions={{
        showLabel: false,
      }}
      initialRouteName="home">
      <HomeTabNav.Screen
        name="home"
        component={Home}
        initialParams={{...route?.params}}
        options={{
          gestureEnabled: true,
          tabBarIcon: ({color, size, focused}) => (
            <View style={{size: {size}, color: {color}}}>
              {focused === true ? (
                <Icons
                  name="home"
                  size={14}
                  color="blue"
                  style={{fontSize: 20}}
                />
              ) : (
                <Icons
                  name="home"
                  size={14}
                  color="black"
                  style={{fontSize: 20}}
                />
              )}
            </View>
          ),
        }}
      />

      <HomeTabNav.Screen
        name="List"
        component={ListPage}
        initialParams={{...route?.params}}
        options={{
          gestureEnabled: true,
          tabBarLabel: 'List',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{size: {size}, color: {color}}}>
              {focused === true ? (
                <Icons
                  name="ios-list"
                  size={14}
                  color="blue"
                  style={{fontSize: 20}}
                />
              ) : (
                <Icons
                  name="ios-list"
                  size={14}
                  color="black"
                  style={{fontSize: 20}}
                />
              )}
            </View>
          ),
        }}
      />
      <HomeTabNav.Screen
        name="Settings"
        component={Settings}
        initialParams={{...route?.params}}
        options={{
          gestureEnabled: true,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{size: {size}, color: {color}}}>
              {focused === true ? (
                <Icons
                  name="settings"
                  size={14}
                  color="blue"
                  style={{fontSize: 20}}
                />
              ) : (
                <Icons
                  name="settings"
                  size={14}
                  color="black"
                  style={{fontSize: 20}}
                />
              )}
            </View>
          ),
        }}
      />
    </HomeTabNav.Navigator>
  );
};

export default HomeStackNav;
