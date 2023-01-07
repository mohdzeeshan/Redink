/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import Medal from '../../assets/images/medal.svg';
import PolygonPNG from '../../assets/images/Polygon.png';
import AccordionComponent from '../components/AccordionComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Screen2 = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('apple');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} />

      <View style={styles.mainBody}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: -60, marginRight: 35}}>
            <Medal />
          </View>
          <DropDownPicker
            containerStyle={{width: 120}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <ImageBackground
          source={PolygonPNG}
          resizeMode="contain"
          style={{
            marginTop: 10,
            marginBottom: 15,
            width: 120,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            30
          </Text>
          <Text style={{color: 'white', fontSize: 16}}>pts</Text>
        </ImageBackground>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 78, 1, 2, 3, 4, 4, 4, 5, 5, 3, 4, 5, 6, 7, 8].map(
            () => (
              <AccordionComponent />
            ),
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
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
    height: height * 0.115,
  },
  mainBody: {
    position: 'absolute',
    marginTop: height * 0.09,
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: width,
    height: height * 0.85,
    borderRadius: 16,
    zIndex: 999,
  },
});

export default Screen2;
