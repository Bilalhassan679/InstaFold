import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet, Image, Text} from 'react-native';
import * as Screens from '../screens/index';

import { colors } from '../theme/color';
import { hp, wp } from '../theme/responsive';
import { chat, chatActive, home, homeActive, profile, profileActive, setting, settingActive } from '../assets/images';
import { color } from '../config/color';

globalStyles = {};
const isIOS = Boolean(Platform.OS == 'ios');
const tabarComponent = (activeImage, unActiveImage, ImageStyle) => {
  return {
    tabBarIcon: ({focused}) => (
      <View style={{...styles.tabarView(focused),}}>
        <Image
          style={{...styles.imgstyle, ...ImageStyle}}
          source={focused ? activeImage : unActiveImage}
        />
      {/* {focused  ? <Text style={{color:'black'}}>select</Text>:<Text style={{color:'black'}}>unselect</Text>} */}
      </View>
    ),
    title: '',
    tabBarLabelStyle: styles.tabarTitle,
  };
};

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => 
      
      (
        {
        tabBarActiveTintColor: 'yellow',
        tabBarActiveTintColor: color.white,
        tabBarInactiveTintColor:console.log(route,'kalsdfjklajsf') && 'transparent',
        headerShown: false,
        
        tabBarActiveBackgroundColor: '#522888',
        tabBarInactiveBackgroundColor: '#522888',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarStyle: {
          // height: isIOS ? hp('5') : hp('2'),
          height: hp('12'),
          borderTopWidth: 0,
          width: wp('100'),
          alignSelf: 'center',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor:'#522888',

          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="EditTripScreen"
        options={tabarComponent(settingActive, setting,   (ImageStyle = {
          // width: wp('24'),
          // height: hp('12'),
        }),)}
        component={Screens.HomeScreen}
      />
        <Tab.Screen
          name="HomeScreen"
          options={tabarComponent(homeActive, home)}
          component={Screens.HomeScreen}
        />
      <Tab.Screen
        name="SomeComponent"
        options={tabarComponent(
          chatActive,
          chat,
          (ImageStyle = {
            // width: wp('24'),
            // height: hp('12'),
          }),
        )}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="ChatScreen"
        options={tabarComponent(chatActive, chat,   (ImageStyle = {
          // width: wp('24'),
          // marginTop: hp('-1'),
          // height: hp('12'),
        }),)}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="AccountScreen"
        options={tabarComponent(profileActive, profile)}
        component={Screens.HomeScreen}
      /> 
 
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor:'red'

  },
  tabarTitle: {
    display: 'none',
    
  },
  tabarView: (focused, last) => ({
    width: 'auto',

    bottom: hp('-0.5'),
  }),

  imgstyle: {
    resizeMode:'contain',
    // aspectRatio:1,
    width:wp('14'),
    // resizeMode: 'contain',
    height: hp('14'),

  },
});
