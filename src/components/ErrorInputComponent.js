import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Touchable,
    Pressable,
    TouchableOpacity,
    Modal,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Controller} from 'react-hook-form';
  import {TextComponent} from './TextComponent';
  import {eye, eyeOff} from '../Assets/index';
  import DividerLine from './Divider';
  import {Button} from 'react-native';
  import DatePicker from 'react-native-date-picker';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import DatePicker1 from 'react-native-modern-datepicker';
import { colors } from '../theme/color';
import { FontSize } from '../theme/font';
import { hp, wp } from '../theme/responsive';
  export default function ErrorInputComponent({
    name,
    errors,
    control,
    minLength,
    placeholder,
    style,
    keyboard,
    iconImg,
    secureTextEntry,
    multiline,
    numberOfLines,
    isRequired,
    defaultValue = '',
    inputLength,
    isSecure,
    text,
    ViewStyle,
    textStyle,
    maxLength,
    isDate,
    VectorIconName,
    MIN_DEFAULT,
    MAX_DEFAULT,
    isGallery,
    min,
    max,
    setMin,
    setMax,
    setRangeValue,
    galleryData,
    onSelectImage,
    deleteImage,
    isLocation,
    locationText,
    locationValue,
    locationOnPress,
  }) {
    const [value, setValue] = useState('');
    const [selectedTime, setSelectedTime] = useState('00:00');
    const [show, setShow] = useState(!isSecure);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
  
    //For DateFormat Convert Function
    function formatDateToCustomFormat(isoDate) {
      var originalDate = new Date(isoDate);
  
      var year = originalDate.getUTCFullYear();
      var month = originalDate.getUTCMonth() + 1;
      var day = originalDate.getUTCDate();
  
      var formattedDate = day + ' / ' + month + ' / ' + year;
      console.log({formattedDate});
      return formattedDate;
    }
    var customFormatDate = formatDateToCustomFormat(date);
  
    //For Time Format Convert Function
    function convertToCustomTimeFormat(isoDate) {
      const date = new Date(isoDate);
  
      // Subtract 5 hours
      date.setUTCHours(date.getUTCHours() - 7);
  
      // Extract hours and minutes
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
  
      // Determine if it's A.M. or P.M.
      const amOrPm = hours < 12 ? 'P.M.' : 'A.M.';
  
      // Convert hours to 12-hour format
      const formattedHours = hours % 12 || 12;
  
      // Ensure that both hours and minutes have two digits
      const formattedTime = `${formattedHours}:${String(minutes).padStart(
        2,
        '0',
      )} ${amOrPm}`;
  
      return formattedTime;
    }
    const customTimeFormat = convertToCustomTimeFormat(date);
    const currentDate = new Date();
    const initialTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  
    const [time, setTime] = useState(initialTime);
  
    return (
      <>
        <View style={{...styles.container, ...ViewStyle}}>
          <TextComponent text={text} styles={styles.text} />
          {placeholder && (
            <TextInput
              maxLength={maxLength}
              placeholderTextColor={colors.themeGray}
              numberOfLines={numberOfLines}
              multiline={multiline}
              placeholder={placeholder}
              style={{
                ...styles.inputField,
                height: hp(numberOfLines > 3 ? '15' : '5'),
                // borderColor: value ? Colors.primaryColor : 'red',
                borderColor: colors.primaryColor,
              }}
              onChangeText={setValue}
              value={value}
              secureTextEntry={!show}
            />
          )}
          {multiline && (
            <View
              style={{
                justifyContent: 'flex-end',
                position: 'absolute',
                right: 30,
                bottom: 30,
              }}>
              <TextComponent
                styles={styles.textLength}
                text={`${value.length ?? 0}/200`}
              />
            </View>
          )}
  
          <>
            {VectorIconName && (
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.dateContainer}>
                <Ionicons
                  style={styles.dropDown}
                  color={colors.primaryColor}
                  name={VectorIconName}
                  size={hp('3')}
                />
  
                <TextComponent
                  text={
                    (VectorIconName == 'time-outline' && customTimeFormat) ||
                    (VectorIconName == 'calendar-outline' && customFormatDate) ||
                    (VectorIconName == 'stopwatch-outline' && selectedTime)
                  }
                  styles={{color: colors.themeGray}}
                />
              </TouchableOpacity>
            )}
            {isDate && (
              <DatePicker
                is24hourSource="device"
                mode={
                  (VectorIconName == 'time-outline' && 'time') ||
                  (VectorIconName == 'calendar-outline' && 'date')
                }
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  console.log({date});
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            )}
          </>
  
          
  
      
          {isLocation && (
            <TouchableOpacity
              style={{...styles.dateContainer, justifyContent: 'space-between'}}
              onPress={locationOnPress}>
              <TextComponent
                text={locationText}
                styles={{color: colors.themeGray}}
              />
              <MaterialIcons
                style={styles.dropDown}
                color={colors.themeYellow}
                name={'my-location'}
                size={hp('3')}
              />
            </TouchableOpacity>
          )}
        </View>
  
        <DividerLine />
  
        {/* Modal for DatePicker1 */}
        {VectorIconName == 'stopwatch-outline' && (
          <Modal animationType="slide" transparent={true} visible={open}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <DatePicker1
                  mode="time"
                  minuteInterval={3}
                  onTimeChange={selectedTime => {
                    console.log({selectedTime});
                    setSelectedTime(selectedTime);
                    setOpen(false);
                  }}
                />
              </View>
            </View>
          </Modal>
        )}
        {/*End Modal for DatePicker1 */}
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: wp('100'),
      padding: 20,
      justifyContent: 'center',
    },
    text: {
      fontSize: FontSize.scale16,
      fontWeight: '500',
    },
    inputField: {
      textAlignVertical: 'top',
      paddingTop: hp('1.5'),
      fontSize: FontSize.scale14,
      color: colors.themeGray,
      borderRadius: 5,
      padding: 10,
      borderWidth: 0.8,
      marginTop: hp('1.5'),
    },
    textLength: {
      textAlign: 'right',
      color: colors.themeGray,
      fontSize: FontSize.scale16,
    },
    dateContainer: {
      flexDirection: 'row',
      textAlignVertical: 'top',
      fontSize: FontSize.scale14,
      color: colors.themeGray,
      borderRadius: 5,
      padding: 10,
      borderWidth: 0.8,
      alignItems: 'center',
      marginTop: hp('1.5'),
    },
    dropDown: {
      marginRight: wp('2'),
    },
    // Add styles for the modal
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: wp('80%'),
      alignItems: 'center',
    },
    closeButton: {
      marginTop: hp('2'),
      backgroundColor: colors.primaryColor,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    // location: {},
  });