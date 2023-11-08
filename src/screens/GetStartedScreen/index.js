import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { TextComponent } from '../../components/TextComponent'
import { hp, wp } from '../../theme/responsive'
import ButtonComponent from '../../components/ButtonComponent'
import FastImage from 'react-native-fast-image'
import { colors } from '../../theme/color'
const WelcomeScreen = ({navigation}) => {
  const [user,setUser]=useState(true)
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TextComponent styles={styles.welcomeText} text={'Sign Up As a'}/>
      <TouchableOpacity onPress={()=>setUser(true)} style={{...styles.customer,marginTop:hp('10'),
      borderColor:user && '#522888',borderWidth:user ? 1 :0
    }}>
     {user && <FastImage
        style={{...styles.tick,tintColor:'red'}}
        source={require('../../assets/images/tick.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        />}
      <FastImage
        tintColor={user ? '#522888':colors.black}
        style={{...styles.customerImge,tintColor:'red'}}
        source={require('../../assets/images/customer.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        />
        <TextComponent text={'Customer'} styles={{marginTop:hp('1')}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setUser(false)} style={{...styles.customer,
        borderColor:user && '#522888',borderWidth:user==false ? 1:0 }
  }>
      {user == false && <FastImage

        style={{...styles.tick,}}
        source={require('../../assets/images/tick.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        />}
        
     <FastImage
              tintColor={user===false ? '#522888':colors.black}
        style={{...styles.customerImge,}}
        source={require('../../assets/images/handshake.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        /> 
       <TextComponent text={'Contractor'} styles={{marginTop:hp('1')}}/> 
      </TouchableOpacity>
      <View style={{marginTop:hp('15')}}>
      <ButtonComponent text={'Let’s Get Started'}  width={'85'} onPress={()=>navigation.navigate('LoginScreen')}/>
      <View style={styles.lastContainer}> 
      <TextComponent styles={styles.alreadyText} numberOfLines={2} text={"Already have an account? "}/>
      <TextComponent styles={styles.loginText} numberOfLines={2} text={"Login"}/>

      </View>
      </View>
    </ScrollView>
  )
}

export default WelcomeScreen
