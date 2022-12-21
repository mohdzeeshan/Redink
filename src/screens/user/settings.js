/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/reducers';

const Settings = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.currentUser);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.heading}>Username:</Text>
        <Text style={styles.text}> {userData.username}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.heading}>Email:</Text>
        <Text style={styles.text}> {userData.email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.heading}>Password:</Text>
        <Text style={styles.text}> {userData.password}</Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          dispatch(logout());
        }}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 16,
  },
  heading: {
    color: '#0E0D0D',
    fontSize: 16,
  },
  textinp: {
    marginTop: 5,
    textAlign: 'left',
    color: '#000000',
    backgroundColor: 'white',
    borderRadius: 12,
    minWidth: '80%',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 12,
    width: '50%',
  },
});
