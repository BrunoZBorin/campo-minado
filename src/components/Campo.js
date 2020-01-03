import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

export default props => {
  const linhas = props.tab.map((linha, l) => {
    const colunas = linha.map((campo, c) => {
      return (
        <Field
          {...campo}
          key={c}
          onOpen={() => props.onOpenField(l, c)}
          onSelect={e => props.onSelectField(l, c)}
        />
      );
    });
    return (
      <View style={{flexDirection: 'row'}} key={l}>
        {colunas}
      </View>
    );
  });
  return <View style={styles.container}>{linhas}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
