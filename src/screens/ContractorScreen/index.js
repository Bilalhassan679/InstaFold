import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderComponent from '../../components/HeaderComponent'
import { TextComponent } from '../../components/TextComponent'
import { colors } from '../../theme/color'
import { carla, morgon, william } from '../../assets/images'
import { hp, wp } from '../../theme/responsive'
import Divider from '../../components/Divider'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContractorScreen = ({navigation}) => {
    const renderItem =({item,index})=>{
        return (
            <>
            <View style={{       backgroundColor:colors.white,
        width:wp('100'),
        padding:15,}}>

            <View style={styles.contractor}>
            <Image source={item.image} style={{width:wp('20'),height:hp('15'),resizeMode:"contain"}}/>
                <View style={{padding:10}}>
                    <TextComponent text={item.name} styles={styles.name}/>
                   <View style={styles.star}>
                    <Ionicons name={'star'} size={hp('2')} color={colors.primary} style={{marginRight:wp('2')}} />
                    <TextComponent text={'5.0 (10 Reviews)'} styles={styles.des}/>

                   </View>
                   <View style={styles.star}>
                    <Ionicons name={'checkmark-circle-outline'} size={hp('2')} color={colors.purpleColor} style={{marginRight:wp('2')}} />
                    <TextComponent text={'14 waiting in Line jobs'} styles={styles.des}/>

                   </View>
                   <View style={styles.star}>
                    <Ionicons name={'time-outline'} size={hp('2')} color={colors.purpleColor} style={{marginRight:wp('2')}} />
                    <TextComponent text={'2 hour minimum required'} styles={styles.des}/>

                   </View>
                  
                </View>
            </View>
            <View style={styles.contractorLastView}>
                <TextComponent text={'I have a 100% rating after completing 150+ tasks.'} />
                <TextComponent text={'View profile'} styles={{color:colors.purpleColor}}/>
            </View>
            </View>
            <Divider/>
            </>
        )
    }
  return (
        <>
        <SafeAreaView/>
      <HeaderComponent onPress={()=>navigation.goBack()} text={'Select Contractor'} rightIconName={"options"} iconName={'arrow-back'}/>  
      <View style={styles.container}>
      <FlatList
      keyExtractor={(index)=>index.id.toString()}
      renderItem={renderItem}
      data={[{id:0,image:morgon,name:'Morgan L.'},{id:1,image:carla,name:'Carla E.'},{id:2,image:william,name:'William P.'}]}
      />
    </View>
        </>
  )
}

export default ContractorScreen
