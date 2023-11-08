import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import useSignUpScreen from './useSignUpScreen'
import { styles } from './style';
import { TextComponent } from '../../components/TextComponent';
import { InputComponent } from '../../components/InputComponent';
import FastImage from 'react-native-fast-image';
import { hp } from '../../theme/responsive';
import ButtonComponent from '../../components/ButtonComponent';
import Divider from '../../components/Divider';

const SignUpScreen = ({navigation}) => {
  const {    handleSubmit,
    errors,
    reset,
    control,
    getValues,}=useSignUpScreen(navigation);
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
    
    <Image style={{aspectRatio:1,height:hp('20') ,marginTop:hp('6')}} resizeMode='contain' source={require('../../assets/images/BigLogo.png')} />
 
    <ImageBackground style={styles.imagebackground} imageStyle={styles.imageStyle} resizeMode='cover' source={require('../../assets/images/bgBook.png')}>
        <TextComponent text={'Sign Up '} styles={styles.login} />
        <TextComponent text={'Fill your Information'} styles={styles.loginInfo} />
        
        <InputComponent
          {...{
            text: 'Full Name',
            name: 'fullName',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Full Name',
            viewStyle: styles.loginInput,
            // isImage: sms,
            defaultValue: __DEV__ ? 'Userone' : '',
          }}
        />
        <InputComponent
          {...{
            text: 'Phone',
            name: 'phone',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Phone',
            viewStyle: styles.loginInput,
            // isImage: sms,
            defaultValue: __DEV__ ? '+54657111545' : '',
          }}
        />
        <InputComponent
          {...{
            text: 'Email',
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Email',
            viewStyle: styles.loginInput,
            // isImage: sms,
            defaultValue: __DEV__ ? 'user1@gmail.com' : '',
          }}
        />
        <InputComponent
          {...{
            text: 'Password',
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Password',
            viewStyle: styles.loginInput,
            isSecure: true,

            // isImage: sms,
            defaultValue: __DEV__? 'user1@gmail.com' : '',
          }}
        />
        <InputComponent
          {...{
            text: 'Confirm Password',
            name: 'confirmPassword',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Confirm Password',
            isSecure: true,
            // isImage: lock,
            defaultValue: __DEV__ ? 'Test@123' : '',
          }}
        />
        <TextComponent text={'Forget Password ?'} styles={styles.forget} />
        <ButtonComponent text={'Sign Up Now '} buttonStyle={styles.loginButton} onPress={()=>navigation.navigate('MybottomTabs')}/>
        <View style={styles.lastContainer}>
          <TextComponent styles={styles.alreadyText} numberOfLines={2} text={"Don’t have an Account? "} />
          <TextComponent styles={styles.loginText} numberOfLines={2} text={"Sign Up"} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Divider dividerStyle={styles.divider} />
          <TextComponent text={'or with'} styles={styles.orwith} />
          <Divider dividerStyle={styles.divider} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { }}>
            <FastImage
              style={{ ...styles.logo, tintColor: 'red' }}
              source={require('../../assets/images/googleLogo.png')}
              resizeMode={FastImage.resizeMode.contain}

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FastImage
              style={{ ...styles.logo, tintColor: 'red' }}
              source={require('../../assets/images/fbLogo.png')}
              resizeMode={FastImage.resizeMode.contain}

            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
</ScrollView>
  )
}

export default SignUpScreen
