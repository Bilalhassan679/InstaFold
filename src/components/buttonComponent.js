import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wp } from '../theme/responsive'
import { colors } from '../theme/color'

const buttonComponent = ({onPress,text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default buttonComponent

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        width:wp('100'),
        backgroundColor:colors.primary
    }
})