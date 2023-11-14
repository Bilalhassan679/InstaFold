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
        alignItems:'center'
        
    },
    bottom:{
        height:hp('32'),
        alignItems:'center',
    },
    filterTitle:{
        fontSize:FontSize.scale22,
        fontWeight:'300',
        color:colors.black,
        marginBottom:hp('2'),
    },
    filterType:{
        fontSize:FontSize.scale20,
        fontWeight:'400',
        color:colors.black,
        marginRight:wp('5')
        
    },
    bottom:{
        height:hp('32'),
        alignItems:'center',
    },

})  