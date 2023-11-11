import { StyleSheet } from "react-native";
import { hp, isIOS, wp } from "../../theme/responsive";
import { FontSize } from "../../theme/font";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    SplashScreen_RootView: {
       aspectRatio:1,
        height: '25%',
      },
      needHelp:{
        marginTop:hp('1.5'),
        fontWeight:'400',
        fontSize:FontSize.scale24,
      },
      imageContainer:{
        backgroundColor:colors.primary,
        height:isIOS? hp('28'):hp('33'),
        borderRadius:10,
        margin:10,
        marginTop:hp('2')
      },
      imageView:{
        resizeMode:'contain',
      },
      btmText:{
        padding:10,
        textAlign:'center',
        color:colors.black,
        fontWeight:'400'
      },
      flatList:{
        padding:10,
        alignItems:'center'
      }
})