import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../theme/responsive'
import { colors } from '../theme/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../config/color';
const ButtonComponent = ({onPress,text,buttonStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container,...buttonStyle
    
    }}>
      <Text style={styles.text}>{text}</Text>
      <Ionicons name={'arrow-forward'} size={hp('2')} color={color.black} />
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  container:{
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:colors.primary,
        height:hp('6'),
        justifyContent:'center',
        alignItems:'center',
        width:wp('90')
      },
      text:{
          color:colors.black,
          fontSize:hp('2'),
          fontWeight:'500'
      }
})