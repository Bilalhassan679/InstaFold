import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style';
import HeaderComponent from '../../components/HeaderComponent';
import {hp, wp} from '../../theme/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../theme/color';
import {TextComponent} from '../../components/TextComponent';
import Divider from '../../components/Divider';
import ButtonComponent from '../../components/ButtonComponent';
import BottomModal from '../../components/BottomModalComponent.js';
import ErrorInputComponent from '../../components/ErrorInputComponent';

const ContractorProfile = ({navigation, route}) => {

    
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
   
  };
  const {items} = route.params;
  const listItem =()=>{
    return (
      <View style={styles.lastContainer}>
          <View style={styles.imageContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: wp('10'),
                  height: hp('5'),
                  resizeMode: 'contain',
                  borderRadius: 70,
                }}
                source={{
                  uri: 'https://wallpapers.com/images/high/aesthetic-anime-profile-pictures-act70lmrgm5gxgbk.webp',
                }}
              />
              <View style={{
        marginLeft:wp('1.5')

              }}>
                <TextComponent text={'Shawn C.'} styles={styles.title1} />
                <TextComponent text={'Tue, May 17, 2022'} styles={styles.des} />
              </View>
            </View>
          </View>
          <TextComponent
            styles={{...styles.des, marginTop: hp('1')}}
            numberOfLines={3}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra magna ut urna molestie interdum!'
            }
          />
        </View>
    )
  }
  return (
    <>
      <SafeAreaView />
      <HeaderComponent
        onPress={() => navigation.goBack()}
        text={'Contractor Profile'}
        rightIconName={'options'}
        iconName={'arrow-back'}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
      
      style={styles.container}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ContractorProfile')}
          style={{
            backgroundColor: colors.white,
            width: wp('100'),
          }}>
          <View style={styles.contractor}>
            <Image
              source={items.image}
              style={{width: wp('20'), height: hp('12'), resizeMode: 'contain'}}
            />
            <View style={{padding: 10}}>
              <TextComponent text={items.name} styles={styles.name} />
              <View style={styles.star}>
                <Ionicons
                  name={'star'}
                  size={hp('2')}
                  color={colors.primary}
                  style={{marginRight: wp('2')}}
                />
                <TextComponent text={'5.0 (10 Reviews)'} styles={styles.des} />
              </View>
            </View>
          </View>
          <Divider dividerStyle={{width: wp('100')}} />

          <View style={{padding: 15}}>
            <View style={styles.star}>
              <Ionicons
                name={'checkmark-circle-outline'}
                size={hp('2')}
                color={colors.purpleColor}
                style={{marginRight: wp('2')}}
              />
              <TextComponent
                text={'14 waiting in Line jobs'}
                styles={styles.des}
              />
            </View>

            <View style={styles.star}>
              <Ionicons
                name={'timer-outline'}
                size={hp('2')}
                color={colors.purpleColor}
                style={{marginRight: wp('2')}}
              />
              <TextComponent
                text={'2 hour minimum required'}
                styles={styles.des}
              />
            </View>
            <View style={styles.star}>
              <Entypo
                name={'tools'}
                size={hp('2')}
                color={colors.purpleColor}
                style={{marginRight: wp('2')}}
              />
              <TextComponent
                text={'Tools: I don’t have special tools'}
                styles={styles.des}
              />
            </View>
            <View style={styles.star}>
              <Ionicons
                name={'chatbubble-outline'}
                size={hp('2')}
                color={colors.purpleColor}
                style={{marginRight: wp('2')}}
              />
              <TextComponent
                text={'Speaks: English, Spanish'}
                styles={styles.des}
              />
            </View>
          </View>
          <Divider dividerStyle={{width: wp('100')}} />
          <View style={{padding: 15}}>
            <TextComponent text={'Skills & experience'} styles={styles.title} />
            <TextComponent
              numberOfLines={8}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra magna ut urna molestie interdum. Vestibulum euismod lacus eget lorem iaculis congue. Maecenas at.....'
              }
              styles={styles.des}
            />
          </View>
          <Divider dividerStyle={{width: wp('100')}} />
          <View style={{padding: 15}}>
            <TextComponent text={'Rating & Reviews'} styles={styles.title} />
            <View style={styles.star}>
              <Ionicons
                name={'star'}
                size={hp('2')}
                color={colors.primary}
                style={{marginRight: wp('2')}}
              />
              <TextComponent text={'5.0 (10 Reviews)'} styles={styles.des} />
            </View>
          </View>
          <Divider dividerStyle={{width: wp('100')}} />
        </TouchableOpacity>
        <FlatList
        data={[{id:0},{id:1}]}
        renderItem={listItem}
        />
        <View style={{alignItems:'center',marginBottom:hp('5')}}>
      <ButtonComponent  onPress={toggleModal} text={'Select'}/>
        </View>
      </ScrollView>
      <BottomModal isVisible={isModalVisible} onClose={toggleModal}>
        <View style={styles.bottom}>
          <TextComponent text={'Morgan’s Schedule'} styles={styles.scheduleText} />
          <ErrorInputComponent
          text={'Date'}
          VectorIconName={'calendar-outline'}
          isDate
        />
        <ErrorInputComponent
          isDate
          text={'Time'}
          VectorIconName={'time-outline'}
        />
         <ButtonComponent  onPress={()=>{navigation.navigate('Servicedetails',{items}),setModalVisible(false)}} text={'Select & Continue'}/>
         
        </View>
      </BottomModal>
    </>
  );
};

export default ContractorProfile;
