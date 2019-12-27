import React, {Component} from 'react';
import params from './src/params'
import Flag from './src/components/Flag'
import Field from './src/components/Field'

import {
  Image,
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView
 
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  
  state = {
    language: null,
  };

  
render(){
  return (
      <View style={{width:'100%', height:'100%'}}>
        <ScrollView>
        <View style={styles.body}>
        
            {/*<Text style={styles.capa}>Tamanho da grade:{params.getRowAmount()}x{params.getColumnAmount()}</Text>
            <Field />
            <Field aberta/>
            <Field aberta pertoMinas={1}/>
            <Field aberta pertoMinas={2}/>
            <Field aberta pertoMinas={3}/>
            <Field aberta pertoMinas={7}/>
            <Field mina />
            <Field mina aberta />
            <Field mina aberta exploded />
            <Field flagged />
            <Field flagged aberta/>
            
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: 100, backgroundColor:'purple'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Setembro" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Image style={{height:200,width:300, marginLeft:10}}source={require('./image/Foto_Patrocinadores.gif')}/>
            <Text style={styles.capa}>Voce escolheu: {this.state.language}</Text>*/}
            <Flag />    
            <Flag bigger/>
        </View>
        </ScrollView>
      </View>
    )
    }
  }

const styles = StyleSheet.create({
  body: {
    marginTop:50,
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
    },
  capa:{
    color:'red',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:20,
    marginTop:'15%'
  },

});


