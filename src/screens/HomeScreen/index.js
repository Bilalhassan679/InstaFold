import {  FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextComponent } from '../../components/TextComponent';
import SkeletonImage from '../../components/SkeletonImage';
import { instadish, instafold, putaway, slider1 } from '../../assets/images';
import Slider from '../../components/Slider';
import { styles } from './style';
const HomeScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
  const data=[
    {id:1,name:"We Fold Your Clean Clothes, So You Don't Have To",image:slider1,},
    {id:2,name:"We Fold Your Clean Clothes, So You Don't Have To",image:slider1,},
    {id:3,name:"We Fold Your Clean Clothes, So You Don't Have To",image:slider1,}
  ]
  const data1=[
    {id:1,name:"Instafold",image:instafold,},
    {id:2,name:"Put Away",image:putaway,},
    {id:3,name:"Instadish",image:instadish,}
  ]
  const renderItem =({item,index})=>{
    return(
      <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen',{items:item})} style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageView}/>
        <TextComponent text={item.name} styles={styles.btmText}/>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView 
        // style={{ backgroundColor:!isVisible ? '#ffff' :"#171717"}} 
        />  
        <Slider data={data}/>
        <View style={{padding:20}}>
        <TextComponent text={'I need help with'} styles={styles.needHelp}/>
        <FlatList
          data={data1}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
        />

        </View>
        </ScrollView>
    </>

  )

}


export default HomeScreen

