import React, { useEffect, useState } from 'react';
import {
  LogBox,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import FastImage from 'react-native-fast-image';

function AppTwo() {
  const [isVisible, setIsVisible] = useState(true);
  const SplashScreen = () => {
    return (
      <View style={{flex:1,backgroundColor:'##FFFFFF',
      justifyContent:'center',
      alignItems:'center',
    }}>

      <FastImage
        style={styles.SplashScreen_RootView}
        source={require('./src/assets/images/BigLogo.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        />
        </View>
    );
  };

  useEffect(async () => {
    (async () => {
      LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
        'ViewPropTypes will be removed from React Native',
      ]);
      LogBox.ignoreAllLogs(true);
    })();
    setTimeout(function () {
      setIsVisible(false);
    }, 3000);
  }, []);
  return (
    <>
         <StatusBar backgroundColor={'#ffffff'} barStyle={'light-content'} />

      {isVisible ?
      SplashScreen()
      
      :
      <>
        {/* <SafeAreaView/> */}
        <NavigationContainer >
          <StackNavigatior />
        </NavigationContainer>
      </>
        }
    </>
  );
}

export default AppTwo;

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    aspectRatio:1,
     height: '25%',
   },
});