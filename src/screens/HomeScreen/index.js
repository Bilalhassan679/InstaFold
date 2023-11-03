import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { WebView } from 'react-native-webview';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';


const HomeScreen = () => {
  const [webViewIsLoaded, setWebViewIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  // const SplashScreen = () => {
  //   return (
  //     <View style={{flex:1,backgroundColor:'#171717',
  //     justifyContent:'center',
  //     alignItems:'center',
  //   }}>

  //     <FastImage
  //       style={styles.SplashScreen_RootView}
  //       source={require('../../assets/images/rm-appIcon.png')}
  //       resizeMode={FastImage.resizeMode.contain}
        
  //       />
  //       </View>
  //   );
  // };


  return (
    <>
      <StatusBar backgroundColor={'#ffff'} barStyle={'light-content'} />
      <View style={{ flex: isVisible ? 0 : 1 }}>
        <SafeAreaView style={{ backgroundColor:!isVisible ? '#ffff' :"#171717"}} />
        {/* <WebView
          onLoadEnd={(e) => {
            setIsVisible(false)
          }}
          source={{ uri: 'https://websitedesignvalley.com/' }}
          mediaPlaybackRequiresUserAction={true} // Set to true to block video auto-play
        /> */}
      </View>
      {/* {isVisible && SplashScreen()} */}
    </>

  )

}


export default HomeScreen

