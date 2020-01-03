import React, {Component} from 'react';
import params from './src/params';
import Campo from './src/components/Campo';
import Level from './src/components/Level';
import Header from './src/components/Header';
import {
  criaTabMinas,
  cloneTab,
  campoAberto,
  explodiu,
  vitoria,
  mostraMinas,
  inverteBandeira,
  bandeirasUsadas
} from './src/function';

import {
  Image,
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.criaEstado();
  }
  state = {
    dificuldade: null,
  };

  minasDesejadas = () => {
    const colunas = params.getColumnAmount();
    const linhas = params.getRowAmount();
    if(this.state.dificuldade==='Facil'){
      params.dificultLevel=0.1
    }
    else if(this.state.dificuldade==='Medio'){
      params.dificultLevel=0.2
    }
    else if(this.state.dificuldade==='Dificil'){
      params.dificultLevel=0.3
    }
    return Math.ceil(colunas * linhas * params.dificultLevel);
  };

  criaEstado = () => {
    const colunas = params.getColumnAmount();
    const linhas = params.getRowAmount();
    return {
      tab: criaTabMinas(linhas, colunas, this.minasDesejadas()),
      venceu: false,
      perdeu: false,
      mostraLevel:false
    };
  };

  onOpenField = (linha, coluna) => {
    const tab = cloneTab(this.state.tab);
    campoAberto(tab, linha, coluna);
    const perdeu = explodiu(tab);
    const venceu = vitoria(tab);

    if (perdeu) {
      mostraMinas(tab);
      Alert.alert('Booom', 'Perdeu');
    }
    if (venceu) {
      Alert.alert('AEEEEE venceu');
    }
    this.setState({tab, perdeu, venceu});
  };
  onSelectField =(linha, coluna) => {
    const tab = cloneTab(this.state.tab);
    inverteBandeira(tab, linha, coluna);
    const venceu = vitoria(tab);
    if (venceu) {
      Alert.alert('Parabens marcou todas as bandeirinha');
    }
    this.setState({tab, venceu});
  }
  levelSelecionado = dificuldade =>{
    params.dificultLevel=dificuldade
    this.setState(this.criaEstado())

  }

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#999'}}>
        <ScrollView>
          <View style={styles.body}>
            {/*<Level isVisible={this.state.mostraLevel}
            levelSelecionado={this.levelSelecionado}
            onCancel={() => this.setState({mostraLevel:false})}/>*/}

            <Header bandeirasUsadas={this.minasDesejadas() - bandeirasUsadas(this.state.tab)}
            onNewGame={() => this.setState(this.criaEstado())}
            onFlagPress={() => this.setState({mostraLevel:true})}/>
            <Picker
              selectedValue={this.state.dificuldade}
              style={{height: 50, width: '100%', backgroundColor: 'grey'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({dificuldade: itemValue})
              }>
              <Picker.Item label="Facil" value="Facil" />
              <Picker.Item label="Medio" value="Medio" />
              <Picker.Item label="Dificil" value="Dificil" />
            </Picker>
            {/*<Image style={{height:200,width:300, marginLeft:10}}source={require('./image/Foto_Patrocinadores.gif')}/>

            <Image style={{height:200,width:300, marginLeft:10}}source={{uri:'https://images.app.goo.gl/21r9JwhnJo8dMiuM7'}}/>*/}
            <View styles={styles.tab}>
              <Campo
                tab={this.state.tab}
                onOpenField={this.onOpenField}
                onSelectField={this.onSelectField}
              />
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',

    flex: 1,
    backgroundColor: '#999',
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#999',
  },
});
