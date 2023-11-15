import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    contractor:{
        padding:15
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
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    rightText:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        color:colors.black  ,
        
    },
    box:{
        padding:14,
        width:wp('90'),
        backgroundColor:colors.white
    },
    boxText:{
        textAlign:'center',
        fontWeight:'400',
        fontSize:FontSize.scale22,
        color:colors.black  ,
    },
    boxDes:{
        textAlign:'center',
        fontWeight:'400',
        fontSize:FontSize.scale18,
        color:'#4D4D4D'  ,
        marginVertical:hp('2')

    },
    boxTickText:{
        textAlign:'center',
        fontWeight:'300',
        fontSize:FontSize.scale18,
        color:colors.black  ,
    }
})