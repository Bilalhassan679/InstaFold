import { StyleSheet } from "react-native";
import { hp, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";
import { FontSize } from "../../theme/font";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:hp('3')
    },
    card:{
        fontSize:FontSize.scale16,

        marginLeft:wp('2'),
        color:colors.placeholderColor
    },
    des:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        color:colors.placeholderColor
    },
    star:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    wait:{
        fontWeight:'400',
        fontSize:FontSize.scale20,
        color:colors.black,
        marginBottom:hp('1')
    },
    paymentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
        backgroundColor:colors.white
    },
    payment:{
        fontSize:FontSize.scale18,
        fontWeight:'400',
    },
    textDes:{
        fontSize:FontSize.scale16,
        fontWeight:'300',
        justifyContent:'center',
        textAlign:'center',
        marginBottom:hp('1')

    },
    bottom:{
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        
    },
    modalText:{
        fontSize:FontSize.scale22,
        fontWeight:'400',
        marginBottom:hp('1')
    },
    
})