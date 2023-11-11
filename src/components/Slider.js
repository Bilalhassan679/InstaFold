import { Dimensions, FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { slider1 } from '../../assets/images';
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image';
import { TextComponent } from './TextComponent';
import { hp, isIOS, wp } from '../theme/responsive';
import { FontSize } from '../theme/font';
import { colors } from '../theme/color';

const Slider = ({data}) => {
    const { width } = useWindowDimensions();
    const renderItem =({item,index})=>{
        return(
          <View style={styles.renderItem}>
          <Image 
    
          source={item.image} resizeMode='contain' style={[styles.image(width),styles ]} />
        <TextComponent  numberOfLines={3} text={item.name} styles={styles.name}/>
          </View>
        )
    }
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
      const slideWidth = Dimensions.get('window').width;
      const currentIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
      setActiveIndex(currentIndex);
    };
  return (
    <>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        data={data}
        keyExtractor={(index)=>index.toString()}
        renderItem={renderItem}
        onMomentumScrollEnd={handleScroll}
        // ListFooterComponent={ListFooterComponent}
        />
         <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot(activeIndex === index),
              { backgroundColor: activeIndex === index ? colors.purpleColor : colors.purpleColorOpacity },
            ]}
          />
        ))}
      </View>
        </>
  )
}

export default Slider

const styles = StyleSheet.create({
    image: (width) => ({
        width:wp('100'),
        height:isIOS?hp('25'):hp('31'),
      }),
      name:{
        position:'absolute',
        left:80,
        top:80,
        width:wp('60'),
        fontSize:FontSize.scale22,
        fontWeight:'700',
        color:colors.white,
        textAlign:'center'
      },
      renderItem:{
        flexDirection:'column'
      },
      dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      dot:(activeImage)=> ({
        width: activeImage?27:8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 5,
      }),
})