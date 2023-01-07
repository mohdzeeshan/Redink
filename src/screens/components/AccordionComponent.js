/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import ProfilePic from '../../assets/images/boy.svg';
import Icons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowAnimationContainer = useRef(new Animated.Value(0)).current;
  const toggleAnimation = {
    duration: 300,
    update: {
      duration: 300,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };

  const toggle = () => {
    const config = {
      duration: 300,
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(arrowAnimationContainer, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setIsOpen(!isOpen);
  };

  const arrowTransform = arrowAnimationContainer.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <>
      <TouchableOpacity
        style={isOpen ? styles.openedAccordion : styles.closedAccordion}
        onPress={() => toggle()}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}>
          <ProfilePic width={35} height={35} />
          <Text style={{marginLeft: 20, color: '#094353', fontSize: 15}}>
            Jay Kishor
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: '#A3E1C6',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 3,
            }}>
            <Text style={{color: 'black'}}>10</Text>
          </View>
          <Text style={{marginRight: 10}}>Points</Text>
          <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
            <Icons
              name="chevron-down-outline"
              size={14}
              color="black"
              style={{fontSize: 20}}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.extendedView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#094353',
                width: 6,
                height: 6,
                borderRadius: 100,
                marginRight: 15,
              }}
            />
            <Text style={{color: '#094353', fontSize: 14, fontWeight: '300'}}>
              12:30 PM , Aug 3 , Chemistry
            </Text>
            <Text style={{color: '#094353', fontSize: 14}}> - Ms.Marry</Text>
          </View>
          <View
            style={{
              height: 20,
              width: 1,
              backgroundColor: '#094353',
              justifyContent: 'center',
              marginLeft: 2,
            }}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#094353',
                width: 6,
                height: 6,
                borderRadius: 100,
                marginRight: 15,
              }}
            />
            <Text style={{color: '#094353', fontSize: 14, fontWeight: '300'}}>
              12:30 PM , Aug 3 , Chemistry
            </Text>
            <Text style={{color: '#094353', fontSize: 14}}> - Ms.Marry</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  closedAccordion: {
    flexDirection: 'row',
    borderRadius: 16,
    marginBottom: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 1,
    width: width * 0.9,
    overflow: 'hidden',
  },
  openedAccordion: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 999,
  },
  extendedView: {
    backgroundColor: 'white',
    width: width * 0.9,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 10,
    padding: 12,
    overflow: 'hidden',
  },
  mainBody: {
    position: 'absolute',
    marginTop: height * 0.13,
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: width,
    height: height * 0.85,
    borderRadius: 12,
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

export default AccordionComponent;
