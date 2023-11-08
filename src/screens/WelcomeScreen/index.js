import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { TextComponent } from '../../components/TextComponent'
import { hp, wp } from '../../theme/responsive'
import ButtonComponent from '../../components/ButtonComponent'
const WelcomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TextComponent styles={styles.welcomeText} text={'Welcome To'}/>
        <Image style={{width:wp('50'),marginTop:hp('10')}} resizeMode='contain' source={require('../../assets/images/BigLogo.png')} />
      <TextComponent styles={styles.bigText} numberOfLines={2} text={"We Fold Your Clean Clothes, So You Don't Have To"}/>
      <View style={{marginTop:hp('20')}}>
      <ButtonComponent onPress={()=>navigation.navigate('GetStartedScreen')} text={'Let’s Get Started'}  width={'85'}/>
      <View style={styles.lastContainer}>  
      <TextComponent styles={styles.alreadyText} numberOfLines={2} text={"Already have an account? "} />
      <TextComponent styles={styles.loginText} numberOfLines={2} text={"Login"} onPress={()=>navigation.navigate('LoginScreen')}/>

      </View>
      </View>
    </ScrollView>
  )
}

export default WelcomeScreen
