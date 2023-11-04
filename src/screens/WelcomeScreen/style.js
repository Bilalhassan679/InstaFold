import { StyleSheet } from "react-native";
import { FontSize } from "../../theme/font";
import { hp, wp } from "../../theme/responsive";

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
        
    }
})