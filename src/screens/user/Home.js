/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useSelector, useDispatch} from 'react-redux';
import {additem} from '../../redux/reducers';

const Home = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.currentUser.username);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 50}}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add item to list"
            placeholderTextColor="#6A7180"
            style={styles.textinp}
            onChangeText={text => {
              setItem(text);
            }}
            value={item}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          disabled={!item}
          style={{...styles.loginButton, opacity: !item ? 0.8 : 1}}
          onPress={() => {
            setItem('');
            dispatch(additem({username: username, item: item}));
          }}>
          <Text style={styles.text}>Add to list</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
