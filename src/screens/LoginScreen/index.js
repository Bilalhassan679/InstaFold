import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { hp, wp } from '../../theme/responsive'
import { TextComponent } from '../../components/TextComponent'
import { InputComponent } from '../../components/InputComponent'
import useLoginScreen from './useLoginScreen'
import ButtonComponent from '../../components/ButtonComponent'
import Divider from '../../components/Divider'
import { FontSize } from '../../theme/font'
import FastImage from 'react-native-fast-image'

const LoginScreen = ({ navigation }) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,

  } = useLoginScreen(navigation);
  return (

    <ScrollView
    bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Image style={{ aspectRatio: 1, height: hp('20'), marginTop: hp('6') }} resizeMode='contain' source={require('../../assets/images/BigLogo.png')} />
      <ImageBackground style={styles.imagebackground} imageStyle={styles.imageStyle} resizeMode='cover' source={require('../../assets/images/bgBook.png')}>
        <TextComponent text={'Login '} styles={styles.login} />
        <TextComponent text={'Login with your Information'} styles={styles.loginInfo} />
        <InputComponent
          {...{
            text: 'Email',
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'example@example.com',
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
            isSecure: true,
            // isImage: lock,
            defaultValue: __DEV__ ? 'Test@123' : '',
          }}
        />
        <TextComponent text={'Forget Password ?'} styles={styles.forget} />
        <ButtonComponent text={'Login Now'} buttonStyle={styles.loginButton} onPress={()=>navigation.navigate('SignUpScreen')} />
        <View style={styles.lastContainer}>
          <TextComponent styles={styles.alreadyText} numberOfLines={2} text={"Don’t have an Account? "} />
          <TextComponent styles={styles.loginText} numberOfLines={2} text={"Sign Up"} onPress={() => navigation.navigate('SignUpScreen') }/>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen') }>
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

export default LoginScreen
