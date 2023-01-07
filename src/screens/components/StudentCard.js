/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ProfilePic from '../../assets/images/boy.svg';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const NumView = ({num}) => {
  return (
    <View style={num >= 0 ? styles.numViewPositive : styles.numViewNegative}>
      <Text style={num >= 0 ? styles.numPositiveText : styles.numNegativeText}>
        {num}
      </Text>
    </View>
  );
};
const StudentCard = ({
  onPress,
  name = 'Mainak Tiwari',
  positive = '+14',
  negative = '-2',
}) => {
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
      <ProfilePic />
      <Text style={{marginTop: 9, marginBottom: 9}}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <NumView num={positive} />
        <NumView num={negative} />
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    width: '44%',
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
  },
  numViewPositive: {
    width: 35,
    height: 35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(185, 231, 222, 1)',
  },
  numPositiveText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: '#31A791',
  },
  numNegativeText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: '#EE5C7B',
  },
  numViewNegative: {
    width: 35,
    height: 35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#F9BFCB',
  },
});
