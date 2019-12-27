import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import params from '../params'
import Mina from './Mine'
import Flag from './Flag'

export default props =>{
    const {mina, aberta, pertoMinas, exploded, flagged} = props

    const styleField = [styles.field]
    if(aberta) styleField.push(styles.aberta)
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!aberta && !exploded) styleField.push(styles.regular)
    
    let color = null
    if (pertoMinas>0){
        if(pertoMinas==1) color = '#2A28D7'
        if(pertoMinas==2) color = '#2B520F'
        if(pertoMinas>2&& pertoMinas<6) color = '#F9060A'
        if(pertoMinas>=6) color = '#F221A9'
    }
    
    return (
        <View style={styleField}>
            {!mina && aberta && pertoMinas>0 ?
                <Text style={[styles.label, {color:color}]}>{pertoMina}</Text> : false}
            {mina && aberta ? <Mina /> : false}
            {flagged && !aberta ? <Flag /> :false}
        </View>
    )
    
}
const styles = StyleSheet.create({
    field:{
        height:params.blockSize,
        width:params.blockSize,
        borderWidth: params.borderSize
    },
    regular:{
        backgroundColor:'#999',
        borderLeftColor:'#CCC',
        borderTopColor:'#CCC',
        borderRightColor:'#333',
        borderBottomColor:'#333'
    },
    aberta:{
        backgroundColor:'#999',
        borderColor:'#777',
        alignItems:'center',
        justifyContent:'center'
    },
    label:{
        fontSize:params.fontSize,
        fontWeight:'bold'
    }, 
    exploded:{
        backgroundColor:'red',
        borderColor:'red'
    }
})
