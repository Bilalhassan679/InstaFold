import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {TextComponent} from '../../components/TextComponent';
import { basket, star, towel } from '../../assets/images';
import ButtonComponent from '../../components/ButtonComponent';
const DetailScreen = ({route, navigation}) => {
  console.log(route, 'alskjdflkajsdlfjkal');
  const {items} = route.params;
  return (
    <>
      <SafeAreaView />
      <ScrollView  contentContainerStyle={styles.container}>
        <View style={styles.renderItem}>
          <Image
            source={items.image}
            resizeMode="contain"
            style={[styles.image, styles]}
          />
          <TextComponent
            numberOfLines={3}
            text={items.name}
            styles={styles.name}
          />
        </View>
        <TextComponent
          numberOfLines={2}
          text={'Simplifying your life one fold at a time.'}
          styles={styles.midText}
        />
        <TextComponent
          numberOfLines={10}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          styles={styles.description}
        />
        <View style={styles.midImageContainer}>
        <Image source={basket} style={styles.midImage}/>
        <Image source={towel}style={styles.midImage}/>
        </View>
        <TextComponent
          numberOfLines={2}
          text={'Neatly, Quickly, Kindly.'}
          styles={styles.midText}
        />
        <TextComponent
          numberOfLines={10}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore ma,'
          }
          styles={styles.description}
        />
        <View style={styles.starContainer}>
          <View>

        <Image
            source={star}
            resizeMode="contain"
            style={[styles.star, styles]}
            />
 <TextComponent
          numberOfLines={1}
          text={
            'Groundbreaking'
          }
          styles={styles.starText}
          />
          </View>
          <View>

<Image
    source={star}
    resizeMode="contain"
    style={[styles.star, styles]}
    />
<TextComponent
  numberOfLines={1}
  text={
    'Affordable'
  }
  styles={styles.starText}
  />
  </View>
  <View>

<Image
    source={star}
    resizeMode="contain"
    style={[styles.star, styles]}
    />
<TextComponent
  numberOfLines={1}
  text={
    'Promoting Happiness'
  }
  styles={styles.starText}
  />
  </View>
        </View>
        <TextComponent
          numberOfLines={2}
          text={'Pricing'}
          styles={styles.midText}
        />
        <TextComponent
          numberOfLines={2}
          text={'$5.00 / Per Unit'}
          styles={styles.priceUnit}
        />
        <ButtonComponent text={'Book Service'} buttonStyle={styles.book} onPress={()=>navigation.navigate('ServicesLocation')}/>
        <ButtonComponent text={'Back'} buttonStyle={styles.back}/>
              </ScrollView>
    </>
  );
};

export default DetailScreen;
