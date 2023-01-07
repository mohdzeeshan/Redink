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
  Dimensions,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers';
import Icons from 'react-native-vector-icons/Ionicons';
import StudentCard from '../components/StudentCard';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  //   return (
  // <SafeAreaView style={styles.container}>
  //   <View style={{marginTop: 50}}>
  //     <Text style={styles.heading}>Username</Text>
  //     <View style={styles.inputContainer}>
  //       <TextInput
  //         placeholder="Type your username"
  //         placeholderTextColor="#6A7180"
  //         style={styles.textinp}
  //         onChangeText={text => {
  //           setUsername(text);
  //         }}
  //         value={username}
  //         autoCapitalize="none"
  //       />
  //     </View>

  //     <Text style={[styles.heading, {marginTop: 20}]}>Password</Text>
  //     <View style={styles.inputContainer}>
  //       <TextInput
  //         placeholder="Enter your password"
  //         placeholderTextColor="#6A7180"
  //         style={styles.textinp}
  //         onChangeText={text => {
  //           setPassword(text);
  //         }}
  //         value={password}
  //         secureTextEntry={true}
  //         autoCapitalize="none"
  //       />
  //     </View>
  //   </View>
  //   <TouchableOpacity
  //     disabled={!username || !password}
  //     style={{
  //       ...styles.loginButton,
  //       opacity: !username || !password ? 0.7 : 1,
  //     }}
  //     onPress={() => {
  //       setUsername('');
  //       setPassword('');
  //       dispatch(login({username: username, password: password}));
  //     }}>
  //     <Text style={styles.text}>Login</Text>
  //   </TouchableOpacity>

  //   <View style={{flexDirection: 'row', marginTop: 20}}>
  //     <Text>Dont have an account</Text>
  //     <Text
  //       style={{color: '#325FE2', marginLeft: 10}}
  //       onPress={() => {
  //         navigation.navigate('Register');
  //       }}>
  //       {'Register here'}
  //     </Text>
  //   </View>
  // </SafeAreaView>
  //   );

  const [index, setIndex] = React.useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.9,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icons
              name="menu-outline"
              size={14}
              color="white"
              style={{fontSize: 25, marginRight: 20}}
            />
            <Text style={styles.headingText}>Behaviour</Text>
          </View>
          <Text style={{color: '#57D29D', marginTop: 10, fontSize: 16}}>
            Report
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={() => setIndex(1)}
            style={{width: 70, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.tabHeaderText}> 6-A</Text>

            <View
              style={{
                marginTop: 2,
                width: 55,
                borderWidth: 3,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderColor: 'rgba(87, 210, 157, 1)',
                opacity: index === 1 ? 1 : 0,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIndex(2)}
            style={{width: 70, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.tabHeaderText}> 6-B</Text>
            <View
              style={{
                marginTop: 2,
                width: 55,
                borderWidth: 3,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderColor: 'rgba(87, 210, 157, 1)',
                opacity: index === 2 ? 1 : 0,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIndex(3)}
            style={{
              width: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.tabHeaderText}> 10-C</Text>
            <View
              style={{
                marginTop: 2,
                width: 55,
                borderWidth: 3,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderColor: 'rgba(87, 210, 157, 1)',
                opacity: index === 3 ? 1 : 0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {index === 1 ? (
        <View style={styles.mainBody}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                marginBottom: 30,
                textDecorationLine: 'underline',
                color: 'rgba(0, 0, 0, 0.68)',
                fontSize: 16,
              }}>
              Select Multiple
            </Text>
          </View>
          {/* <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: width}}
        /> */}
          <FlatList
            contentContainerStyle={{
              paddingLeft: 15,
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6, 78]}
            numColumns={2}
            renderItem={item => (
              <StudentCard onPress={() => navigation.navigate('Screen2')} />
            )}
          />
        </View>
      ) : (
        <View style={styles.mainBody}>
          <Text>no data</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'column',
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#094353',
    width: width,
    height: height * 0.19,
  },
  mainBody: {
    position: 'absolute',
    marginTop: height * 0.162,
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: width,
    height: height * 0.85,
    borderRadius: 18,
    zIndex: 999,
  },
  text: {
    color: 'white',
  },
  headingText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  tabHeaderText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
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
