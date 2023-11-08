import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    loginView: {
        padding: 10,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: colors.bgLogin,
        width: wp('100')
    },
    imagebackground: { 
        marginTop:hp('5'),
        width: wp('100'),
        backgroundColor: colors.purpleColor,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    imageStyle:{
        width:wp('100'),
        height: hp('120'),
        
    },
    login:{
        color:'#ffffff',
        fontSize:FontSize.scale32,
        fontWeight:'700'
    },
    loginInfo:{
        color:colors.halfWhite1,
        fontSize:FontSize.scale16,
        fontWeight:'400'
    },
    forget:{
        color:colors.white,
        fontSize:FontSize.scale16,
        fontWeight:'400',
        marginTop:hp('2'),
        textAlign:'center'
    },
    loginButton:{
        marginTop:hp('5')
    }, 
    alreadyText:{
        color:colors.white,
        fontSize:FontSize.scale14,
        fontWeight:'400'
    },
    loginText:{
        color:colors.primary,
        fontSize:FontSize.scale14,
        fontWeight:'400'

    },
    lastContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('3')
    },
    divider:{
        width:wp('30'),borderColor:colors.halfWhite1,borderBottomWidth:1,marginTop:hp('2')},
        orwith:
            {fontSize:FontSize.scale20,marginHorizontal:hp('2'),color:colors.halfWhite,},
            logo:{
                width:wp('15'),
                margin:10,
                height:hp('8'),
            }
})