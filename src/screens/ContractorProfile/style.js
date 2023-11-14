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
        fontWeight:'500',
        fontSize:FontSize.scale20,
        marginBottom:hp('1')
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
    title:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        marginBottom:hp('1')
    },
    lastContainer:{
        borderRadius:10,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:colors.placeholderColor,
        margin:20,
        padding:8,
        backgroundColor:colors.white
    },
    imageContainer:{
        flexDirection:'row'
    },
    title1:{
        fontWeight:'400',
        fontSize:FontSize.scale18,
        marginBottom:hp('0.2'),
    },
    bottom:{
        height:hp('40'),
        alignItems:'center',
    },

    scheduleText:{
        fontWeight:'300',
        fontSize:FontSize.scale22,
        marginBottom:hp('0.2'),
    }
})