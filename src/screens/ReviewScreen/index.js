import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import HeaderComponent from '../../components/HeaderComponent'
import { TextComponent } from '../../components/TextComponent'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/color'
import { hp, wp } from '../../theme/responsive'
import Divider from '../../components/Divider'
import { color } from '../../config/color'
import ButtonComponent from '../../components/ButtonComponent'
import BottomModal from '../../components/BottomModalComponent.js'

const ReviewScreen = ({navigation,route}) => {
    const {items}=route.params
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
     
    };
  return (
    <>
    <SafeAreaView />
      <HeaderComponent
        onPress={() => navigation.goBack()}
        text={'Review and confirm'}
        iconName={'arrow-back'}
      />
      <ScrollView contentContainerStyle={{}}>

      <View style={{flexDirection:'row',backgroundColor:colors.white,padding:15}}>
      <Ionicons
                    name={'card'} size={hp('5')} color={colors.primary}
               
                  />
        <TextComponent  numberOfLines={2} text={'Don’t worry, you won’t be billed until your service is complete.'} styles={styles.card}/>
      </View>
        <Divider/>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', backgroundColor:colors.white,padding:15}}>
        <View >
        <TextComponent  text={'Wait in line'} styles={styles.wait}/>

        <View style={{flexDirection:'row',alignItems:'center',
        marginBottom:hp('1'),
      
      }}>
        <Ionicons
                  name={'calendar-outline'}
                  size={hp('2')}
                  color={colors.purpleColor}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent
                  text={'Sunday - 22 Oct, 2023'}
                  styles={styles.des}
                />
              </View>
              <View style={styles.star}>
                <Ionicons
                  name={'time-outline'}
                  size={hp('2')}
                  color={colors.purpleColor}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent
                  text={'08:00 AM'}
                  styles={styles.des}
                />
        </View>
        </View>
<View style={{alignItems:'center'}}>

<Image
  source={items.image}
  style={{width: wp('20'), height: hp('12'), resizeMode: 'contain'}}
  />
<TextComponent text={items.name} styles={styles.name} />
  </View>
      </View>
        <Divider/>
        <View style={styles.paymentContainer}>
            <TextComponent text={'Payment'} styles={styles.payment}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>

            <TextComponent text={'Add payment'} styles={{...styles.payment,color:colors.purpleColor}}/>

      <Ionicons name={'arrow-forward'} size={hp('2')} color={colors.purpleColor} style={{marginLeft:wp('2')}}/>
            </View>
        </View>
        <Divider/>
        <View style={styles.paymentContainer}>
            <TextComponent text={'Promos'} styles={styles.payment}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>

            <TextComponent text={'Add code'} styles={{...styles.payment,color:colors.purpleColor}}/>

      <Ionicons name={'arrow-forward'} size={hp('2')} color={colors.purpleColor} style={{marginLeft:wp('2')}}/>
            </View>
        </View>
        <Divider/>
        <View style={styles.paymentContainer}>
            <TextComponent text={'Price details'} styles={styles.payment}/>
        </View>
        <View style={styles.paymentContainer}>
            <TextComponent text={'Per unit rate'} styles={{...styles.payment,color:colors.placeholderColor}}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>

            <TextComponent text={'$5.00'} styles={{...styles.payment,color:colors.placeholderColor}}/>

            </View>
        </View>
        <View style={styles.paymentContainer}>
            <TextComponent text={'Minimum unit quantity'} styles={{...styles.payment,color:colors.placeholderColor}}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <TextComponent text={'20-30'} styles={{...styles.payment,color:colors.placeholderColor}}/>
            </View>
        </View>
        <Divider/>
        <View style={{padding:10}}>
        <TextComponent numberOfLines={6} text={'You may see a temporary hold on your payment method in the amount of your Contractor’s unit rate of $5. You can cancel at any time. Contractor canceled less than 24 hours before the start time may be billed a cancellation fee of on hour. Contractor have a one-hour minimum.'} styles={{...styles.textDes,color:colors.placeholderColor}}/>
        </View>
        <View style={{padding:10}}>
        <TextComponent numberOfLines={2} text={'Please follow the public health regulations in your area. Learn more'} styles={{...styles.textDes,color:colors.placeholderColor}}/>
        </View>
      <View style={styles.container}>
        <ButtonComponent onPress={toggleModal} text={"Confirm & Chat"} />
    </View>
    </ScrollView>
    <BottomModal isVisible={isModalVisible} onClose={toggleModal} showCenter>
        <View style={styles.bottom}>
        <Image
              source={items.image}
              style={{width: wp('20'), height: hp('12'), resizeMode: 'contain'}}
            />
        <TextComponent numberOfLines={2} text={`You’ve booked ${items.name}`} styles={{...styles.modalText,}}/>
        <TextComponent numberOfLines={2} text={'Morgan L. is currently offline and will reach out once available in the next day or so.'} styles={{...styles.textDes,color:colors.placeholderColor}}/>
     
         <ButtonComponent  onPress={()=>{navigation.navigate('ContractScreen', { items}),setModalVisible(false)}}  text={'Select & Continue'}/>
         
        </View>
      </BottomModal>
    </>
  )
}

export default ReviewScreen
