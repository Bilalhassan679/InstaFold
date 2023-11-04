import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { TextComponent } from '../../components/TextComponent'
import { hp, wp } from '../../theme/responsive'
import buttonComponent from '../../components/buttonComponent'
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextComponent styles={styles.welcomeText} text={'Welcome To'}/>
      <View>
        <Image style={{width:wp('50'),marginTop:hp('10')}} resizeMode='contain' source={require('../../assets/images/BigLogo.png')} />
        {/* <SkeletonImageComponent uri={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} /> */}
      </View>
      <TextComponent styles={styles.bigText} numberOfLines={2} text={"We Fold Your Clean Clothes, So You Don't Have To"}/>
      {/* <buttonComponent text={'Let’s Get Started'} /> */}
    </View>
  )
}

export default WelcomeScreen
