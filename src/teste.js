import React, {Component} from 'react';
import params from './src/params';
import {Image, StyleSheet, View, Text, Picker} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class teste extends Component {
  state = {
    language: null,
  };
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.capa}>Segunda pagina</Text>
        <Picker
          selectedValue={this.state.language}
          style={{
            height: 50,
            width: '22.4%',
            backgroundColor: 'purple',
            marginLeft: 10,
            maxWidth: '100%',
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Setembro" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Image
          style={{height: 200, width: 300, marginLeft: 10}}
          source={require('./image/Foto_Patrocinadores.gif')}
        />
        <Text style={styles.capa}>Voce escolheu: {this.state.language}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  capa: {
    color: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginTop: '15%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
