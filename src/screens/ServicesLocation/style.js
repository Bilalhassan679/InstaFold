import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    serviceLocationText:{
        fontWeight:'400',
        fontSize:FontSize.scale22,
        padding:20
    },
    midContainer:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        borderWidth:1,
        borderColor:colors.placeholderColor,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        color:colors.placeholderColor

    },
    textInput:{
        width:wp('45'),
        color:colors.placeholderColor
    },
    list:{
        backgroundColor:'white',
        flexDirection:'row',
        padding:15,
        borderWidth:0.2,
        borderColor:colors.placeholderColor,
        alignItems:'center'

    },
    locationTxt:{
        marginLeft:wp('3'),
        fontWeight:'300',
        fontSize:FontSize.scale16,
    },
    desc:{
        marginLeft:wp('3'),
        fontWeight:'300',
        fontSize:FontSize.scale14,
        color:colors.placeholderColor
    }

   
})