import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {styles} from './style';
import {hp, wp} from '../../theme/responsive';
import {TextComponent} from '../../components/TextComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme/color';
import Divider from '../../components/Divider';
import ButtonComponent from '../../components/ButtonComponent';
const Servicedetails = ({navigation, route}) => {
  const {items} = route.params;
  return (
    <>
      <SafeAreaView />
      <HeaderComponent
        onPress={() => navigation.goBack()}
        text={'Service details'}
        iconName={'arrow-back'}
      />
      <View style={styles.contractor}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={items.image}
            style={{width: wp('20'), height: hp('12'), resizeMode: 'contain'}}
          />
          <TextComponent text={items.name} styles={styles.name} />
        </View>
        <View style={{padding: 10}}>
          <TextComponent text={'Start the conversation'} styles={styles.name} />
          <View style={styles.star}>
            <TextComponent
              numberOfLines={3}
              text={
                'You’re almost done! Share a few details to prepare your Contractor for the job.'
              }
              styles={styles.des}
            />
          </View>
        </View>
      </View>
      <Divider dividerStyle={{width: wp('100')}} />
      <TextInput
        style={{
          ...styles.inputField,
          // borderColor: value ? Colors.primaryColor : 'red',
          borderColor: colors.primaryColor,
        }}
        multiline
        numberOfLines={15}
        placeholder="For example, what supplies are needed, where to park, or timing restrictions."
      />
      <View style={{alignItems: 'center'}}>
        <ButtonComponent
          onPress={() => navigation.navigate('ReviewScreen', {items})}
          text={'Review & Confirm'}
        />
      </View>
    </>
  );
};

export default Servicedetails;
