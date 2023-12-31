import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hp, wp} from '../theme/responsive';
import {color} from '../config/color';
import {TextComponent} from './TextComponent';
import {FontSize} from '../theme/font';
import {colors} from '../theme/color';
import Divider from './Divider';

const HeaderComponent = ({
  text,
  iconName,
  rightIconName,
  onPress,
  navigation,
  IconOnPress
}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}}>

        <Ionicons
          name={iconName}
          size={hp('3')}
          color={colors.purpleColor}
          style={{marginRight: wp('2')}}
          />
        <TextComponent text={text} styles={styles.text} />
          </TouchableOpacity>
       {IconOnPress && <Ionicons
          onPress={IconOnPress}
          name={rightIconName}
          size={hp('3')}
          color={colors.primary}
          style={{marginRight: wp('2')}}
        />}
      </View>
      <Divider />
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: FontSize.scale18,
    color: colors.black,
    width: wp('78'),
  },
});
