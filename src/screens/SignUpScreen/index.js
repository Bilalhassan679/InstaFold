import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
    <Image style={{aspectRatio:1,height:hp('20') ,marginTop:hp('10')}} resizeMode='contain' source={require('../../assets/images/BigLogo.png')} />
 
    <ImageBackground style={styles.imagebackground} imageStyle={styles.imageStyle} resizeMode='cover' source={require('../../assets/images/bgBook.png')}>
    <TextComponent  text={'Sign Up'}/>
    <TextComponent text={'Fill your Information'}/>
    </ImageBackground>
</ScrollView>
  )
}

export default SignUpScreen
