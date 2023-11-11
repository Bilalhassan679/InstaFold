import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, isIOS, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    contractor:{
        alignItems:'center',
        flexDirection:'row',
 
    },
    contractorLastView:{
        padding:15,
        backgroundColor:colors.bgGray,
        borderRadius:5
    },
    name:{
        fontWeight:'500',
        fontSize:FontSize.scale20,
        marginBottom:hp('1')
    },
    des:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        color:colors.placeholderColor
    },
    star:{
        flexDirection:'row',
        
    }
})  