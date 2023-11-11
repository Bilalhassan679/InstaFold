import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponent from '../../components/HeaderComponent'
import { TextComponent } from '../../components/TextComponent'
import Divider from '../../components/Divider'
import { colors } from '../../theme/color'
import { hp, wp } from '../../theme/responsive'
import BoldDivider from '../../components/BoldDivider'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { location1 } from '../../assets/images'
import ButtonComponent from '../../components/ButtonComponent'

const ServicesLocation = ({navigation}) => {
  const renderItem =()=>{
    return(
      <TouchableOpacity style={styles.list }>

        <Image source={location1} style={{width:wp('5.5'),height:wp('9'),resizeMode:'contain'}}/>
        <View>
          <TextComponent text={'Los Angeles'} styles={styles.locationTxt}/>
          <TextComponent text={'Los Angeles, CA, USA'} styles={styles.desc}/>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <>
    <SafeAreaView/>
      <HeaderComponent iconName={'arrow-back'} text={"Service Area"}/>
    <View style={styles.container}>
    <TextComponent
          numberOfLines={2}
          text={'What is the service location?'}
          styles={styles.serviceLocationText}
        />
    
   <BoldDivider />
    <View style={styles.midContainer}>
      <TouchableOpacity style={{...styles.input,width:wp('62')}}>
        <View style={{flexDirection:'row'}}>
      <Ionicons name={'search'} size={hp('2')} color={colors.black} style={{marginRight:wp('2')}} />
          
        <TextInput style={styles.textInput} placeholder='Los Angeles, CA, USA' placeholderTextColor={colors.placeholderColor}/>
      <Ionicons name={'close-outline'} size={hp('2')} color={colors.black} style={{marginRight:wp('2')}} />

        </View>
      </TouchableOpacity>

        <TextComponent text={'Apartment'} styles={styles.input}/>
    </View>
        <Divider/>
        <FlatList
        data={[{id:0,name:'bilal'},{id:1,name:'bilal'}]}
        keyExtractor={(index)=>index.id.toString()}
        renderItem={renderItem}
        />
        <ButtonComponent onPress={()=>navigation.navigate('ContractorScreen')} text={'Continue'} buttonStyle={{alignSelf:'center',marginBottom:hp('5')}}/>
    </View>
    </>
  )
}

export default ServicesLocation
