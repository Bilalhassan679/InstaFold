import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    contractor:{
        flexDirection:'row',
        padding: 15,
        backgroundColor:'white',
        alignItems:'center'
    },
    contractorLastView:{
        backgroundColor:colors.bgGray,
        borderRadius:5,
        
    },
    name:{
        fontWeight:'400',
        fontSize:FontSize.scale16,
    },
    des:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        color:colors.placeholderColor,
        
    },
    star:{
        flexDirection:'row',
        marginTop:hp('0.5'),
        alignItems:'center'

    },
    input:{
        width:wp('90'),
        justifyContent:'flex-start',
        margin:15,
        padding:10,
        backgroundColor:colors.white,
        height:hp('50'),
        borderRadius:10,
        borderWidth:StyleSheet.hairlineWidth

    },
    inputField: {
        backgroundColor:colors.white,
        textAlignVertical: 'top',
        paddingTop: hp('1.5'),
        fontSize: FontSize.scale14,
        color: colors.themeGray,
        borderRadius: 5,
        padding: 10,
        borderWidth: 0.8,
        marginTop: hp('1.5'),
        margin:15,
        height:hp('55'),
      },
   
})