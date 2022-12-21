/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../../redux/reducers';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 50}}>
        <Text style={styles.heading}>Username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type your username"
            placeholderTextColor="#6A7180"
            style={styles.textinp}
            onChangeText={text => {
              setUsername(text);
            }}
            value={username}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.heading, {marginTop: 20}]}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#6A7180"
            style={styles.textinp}
            onChangeText={text => {
              setEmail(text);
            }}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.heading, {marginTop: 20}]}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#6A7180"
            style={styles.textinp}
            onChangeText={text => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={!username || !password || !email}
        style={{
          ...styles.loginButton,
          opacity: !username || !password || !email ? 0.7 : 1,
        }}
        onPress={() => {
          setUsername('');
          setPassword('');
          setEmail('');
          dispatch(
            register({username: username, password: password, email: email}),
          );
        }}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Already have an account?</Text>
        <Text
          style={{color: '#325FE2', marginLeft: 10}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {'Login'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'white',
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
    minWidth: '80%',
  },
});
