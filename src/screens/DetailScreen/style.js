import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, isIOS, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image:   {
        width:wp('100'),
        height:isIOS?hp('25'):hp('31'),
      },
      name:{
        position:'absolute',
        left:80,
        top:80,
        width:wp('60'),
        fontSize:FontSize.scale34,
        fontWeight:'700',
        color:colors.white,
        textAlign:'center'
      },
      renderItem:{
        flexDirection:'column',
        position:'relative',
        marginTop:hp('2')
      },
 
    text:{
        position:'absolute',
        top:80,
    },
    midText:{
        marginTop:hp('2'),
        width:wp('60'),
        fontSize:FontSize.scale24,
        fontWeight:'600',
        color:colors.black,
        textAlign:'center'
    },
    description:{
        marginTop:hp('1'),

        width:wp('95'),
        fontSize:FontSize.scale14,
        fontWeight:'400',
        color:colors.black,
        textAlign:'center'
    },
    midImageContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:wp('95')
    },
    midImage:{
      resizeMode:'contain',
      width:wp('45'),
      height:hp('20'),
      borderRadius:10,
      marginTop:hp('2'),
    },
    star:{
      resizeMode:'contain',
      width:wp('25'),
      height:hp('10'),
      marginTop:hp('2'),
    },
    starContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:wp('90'),
      alignItems:'center',
    },
    starText:{
      color:colors.purpleColor,
      fontSize:FontSize.scale12,
      fontWeight:'500',
      textAlign:'center'
    },
    priceUnit:{
      color:colors.purpleColor,
      fontSize:FontSize.scale34,
      fontWeight:'700'
    },
    book:{
      marginTop:hp('3'),

    },
    back:{
      marginTop:hp('3'),
      backgroundColor:'white',
    borderWidth:1,
    marginBottom:hp('5')
    }
})  