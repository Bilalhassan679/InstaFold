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
        marginTop:hp('12'),
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
    },  
    customer:{
        backgroundColor:colors.white,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        width:wp('40'),
        height:hp('18'),
        marginTop:hp('3'),
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,

    },
    tick:{
        aspectRatio:1,
        height:hp('2'),
        alignSelf:'flex-end',
        marginRight:wp('5')   
    },
    customerImge:{
        aspectRatio:1,
        height:hp('10'),

    }
})