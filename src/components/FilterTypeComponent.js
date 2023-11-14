import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize } from '../theme/font';
import { colors } from '../theme/color';
import { hp, wp } from '../theme/responsive';
import { TextComponent } from './TextComponent';
import Divider from './Divider';
const FilterTypeComponent = ({text}) => {
  const [show,setShow]=useState(false)
  const toggleFunction =()=>{
    if(!show ) {
       setShow(true)
    }
    else {
      
      setShow(false)
    }
  }
  return (
    <>
    <TouchableOpacity onPress={()=>toggleFunction()} style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',width:wp('95'),padding:10}}>
   {
    show &&
     <Ionicons name={'search'} size={hp('2')} color={colors.black} style={{marginRight:wp('2'),}} />
   
   }
    <TextComponent text={text} styles={{...styles.filterType,}}/>
    <View></View>
    </TouchableOpacity>
    <Divider dividerStyle={{width:wp('100')}}/>
    </>
  )
}

export default FilterTypeComponent

const styles = StyleSheet.create({
    filterType:{
        fontSize:FontSize.scale18,
        fontWeight:'300',
        color:colors.black,
        marginRight:wp('5')
        
    }
})