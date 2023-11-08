import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    welcomeText:{
        fontSize:FontSize.scale32,
        marginTop:hp('8'),
        fontWeight:'400'
        
    },
    bigText:{
        fontSize:FontSize.scale20,
        marginTop:hp('8'),
        width:wp('60'),
        textAlign:'center',
        fontWeight:'400'
        
    },
    alreadyText:{
        color:colors.black,
        fontSize:hp('2'),
        fontWeight:'400'
    },
    loginText:{
        color:colors.secondary,
        fontSize:hp('2'),
        fontWeight:'400'

    },
    lastContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('3')
    }
})