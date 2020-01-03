import {Dimensions} from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //prosporcao do header ou painel superior
  dificultLevel: 0.1,
  getColumnAmount() {
    const Width = Dimensions.get('window').width;
    return Math.floor(Width / this.blockSize);
  },
  getRowAmount() {
    const Height = Dimensions.get('window').height;
    const boardHeight = Height * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};
export default params;
