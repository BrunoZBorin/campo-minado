import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Flag from './Flag'

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.onFlagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.bandeirasFaltantes}> = {props.bandeirasUsadas}</Text>
            </View> 
            <TouchableOpacity onPress={props.onNewGame} style={styles.button}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}
styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#EEE',
        justifyContent:'space-around',
        paddingVertical:20,
        paddingHorizontal:20,
    },
    flagContainer:{
        flexDirection:'row',
    },
    onflagButton:{
        marginTop:10,
        minWidth:30
    },
    bandeirasFaltantes:{
        fontSize:30,
        fontWeight:'bold',
        marginLeft:20
    },
    button:{
        backgroundColor:'#999',
        padding:5
    },
    buttonLabel:{
        fontSize:20,
        color:'#DDD',
        fontWeight:'bold'
    }
})