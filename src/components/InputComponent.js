import React, { useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
import {Touchable} from './Touchable';
import {eye, eyeOff} from '../Assests';
import {TextComponent} from './TextComponent';
import { colors } from '../theme/color';
import { hp, wp } from '../theme/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const InputComponent = ({
  minLength,
  placeholder,
  isRequired,
  isSecure,
  control,
  name,
  errors,
  type,
  autoCapitalize = 'none',
  defaultValue = '',
  isDisabled,
  maxLength,
  editable,
  viewStyle,
  isImage,
  forPasswordStyle,
  textStyle,
  inputIconStyle,
  inputLines,
  multiline,
  inputLength,
  text
}) => {
  const [show, setShow] = useState(!isSecure);
  const handleClick = () => setShow(!show);
  const keyboardType = ['number', 'reset_code'].includes(name)
    ? 'phone-pad'
    : 'default';
  // const [countLine, setLines] = useState();
  // const textLengthRef = useRef(0);
  // const TextCount = useCallback(() => {
  //   return (
  //     <TextComponent
  //       styles={styles.textInput}
  //       text={`${textLengthRef.current.length}/200`}
  //     />
  //   );
  // }, [textLengthRef]);
  // const {getValues} = useForm();
  const [length, setLength] = useState('');
  return (
    <>
      <Controller
        render={({field: {onChange, value}}) => (
          setLength(value),
          (
            // (textLengthRef.current = value),
            // console.log(value, textLengthRef.current.length, 'asdkjasldjk'),
            <>
            <TextComponent text={text} styles={styles.textInput}/>
            <View style={{...styles.textfield, ...viewStyle}}>
              {isImage && (
                <Image
                  source={isImage}
                  style={{
                    resizeMode: 'contain',
                    ...styles.inputIcon,
                    ...inputIconStyle,
                  }}
                />
              )}
              <TextInput
                type={type}
                maxLength={maxLength}
                style={{...forPasswordStyle}}
                numberOfLines={inputLines}
                multiline={multiline}
                {...{
                  value,
                  isDisabled,
                  selectionColor: colors.gray,
                  placeholder,
                  keyboardType,
                  style: {...styles.input(isSecure), ...textStyle},
                  secureTextEntry: !show,
                  onChangeText: onChange,
                  placeholderTextColor: colors.gray,
                  fontSize: hp('2'),
                  autoCapitalize,
                  autoCorrect: false,
                  spellCheck: false,
                  editable,
                }}
              />
             
              {isSecure && (
                <Pressable style={styles.eyeContainer} onPress={handleClick}>
                  <Ionicons
                    name={!show ?'eye':'eye-off'} size={hp('2')} color={colors.black}
               
                  />
                </Pressable>
              )}
            </View>
            </>
          )
        )}
        {...{
          name,
          control,
          defaultValue,
          rules: {required: Boolean(isRequired), minLength},
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // width: Platform.OS == 'ios' ? width * 0.875 : Sizes.width * 0.9,
          // width: Sizes.width * 0.9,
        }}>
        <View>
          {errors[name]?.message && (
            <Text style={[styles.error]}>{errors[name]?.message}</Text>
          )}
        </View>

        {inputLength && (
          <View style={{justifyContent: 'flex-end'}}>
            <TextComponent
              styles={{textAlign: 'right', color: colors.blueMenu2}}
              text={`${length.length}/200`}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlign: 'left',
    fontSize: hp('2.0'),
    color: colors.white,
    marginTop:hp('2.0'),
  },
  textfield: {
    width: '100%',
    // borderWidth: 1,
    height: hp('6'),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    // borderColor: colors.lightblue,
    marginTop: hp('1'),
    backgroundColor: colors.halfWhite,

  },
  input: isSecure => ({
    height: '100%',
    width: isSecure ? '75%' : '86%',
    borderRadius: 2,
    // textAlign: 'left',
    color: colors.white,
    paddingHorizontal: wp('2'),
    paddingLeft: wp('3'),
    fontWeight: '400',
  }),
  eyeContainer: {
    width: 30,
    height: 30,
    // top: '30%',
    right: '1%',
    marginRight: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colors.red,
    marginTop:hp('1')
  },
  inputIcon: {
    marginLeft: hp('2'),
    height: hp('3'),
    width: wp('6'),
  },
});
