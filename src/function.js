const criaTabuleiro = (linhas, colunas) => {
  return Array(linhas)
    .fill(0)
    .map((_, linha) => {
      return Array(colunas)
        .fill(0)
        .map((_, coluna) => {
          return {
            linha: linha,
            coluna: coluna,
            aberta: false,
            mina: false,
            flagged: false,
            exploded: false,
            pertoMinas: 0,
          };
        });
    });
};
const espalhaMinas = (tab, minasDesejadas) => {
  const linhas = tab.length;
  const colunas = tab[0].length;
  let minasPlantadas = 0;

  while (minasPlantadas < minasDesejadas) {
    const linhaSel = parseInt(Math.random() * linhas, 10);
    const colunaSel = parseInt(Math.random() * colunas, 10);

    if (!tab[linhaSel][colunaSel].mina) {
      tab[linhaSel][colunaSel].mina = true;
      minasPlantadas++;
    }
  }
};
const criaTabMinas = (linhas, colunas, minasDesejadas) => {
  const tab = criaTabuleiro(linhas, colunas);
  espalhaMinas(tab, minasDesejadas);
  return tab;
};
const cloneTab = tab => {
  return tab.map(linhas => {
    return linhas.map(campo => {
      return {...campo};
    });
  });
};

const getVizinhos = (tab, linha, coluna) => {
  const vizinhos = [];
  const linhas = [linha - 1, linha, linha + 1];
  const colunas = [coluna - 1, coluna, coluna + 1];
  linhas.forEach(l => {
    colunas.forEach(c => {
      const diferente = l != linha || c != coluna;
      const validaLinha = l >= 0 && l < tab.length;
      const validaColuna = c >= 0 && c < tab[0].length;
      if (diferente && validaColuna && validaLinha) {
        vizinhos.push(tab[l][c]);
      }
    });
  });
  return vizinhos;
};

const vizinhanca = (tab, linha, coluna) => {
  const safe = (result, vizinho) => result && !vizinho.mina;
  return getVizinhos(tab, linha, coluna).reduce(safe, true);
};

const campoAberto = (tab, linha, coluna) => {
  const campo = tab[linha][coluna];
  if (!campo.aberta) {
    campo.aberta = true;
    if (campo.mina) {
      campo.exploded = true;
    } else if (vizinhanca(tab, linha, coluna)) {
      getVizinhos(tab, linha, coluna).forEach(n =>
        campoAberto(tab, n.linha, n.coluna),
      );
    } else {
      const vizinhos = getVizinhos(tab, linha, coluna);
      campo.pertoMinas = vizinhos.filter(n => n.mina).length;
    }
  }
};

const inverteBandeira = (tab, linha, coluna) => {
  const campo = tab[linha][coluna];
  campo.flagged = !campo.flagged;
};
const campos = tab => [].concat(...tab);

const explodiu = tab => campos(tab).filter(campo => campo.exploded).length > 0;

const pendente = campo =>
  (campo.mina && !campo.flagged) || (!campo.mina && !campo.aberta);

const vitoria = tab => campos(tab).filter(pendente).length === 0;

const mostraMinas = tab =>
  campos(tab)
    .filter(campo => campo.mina)
    .forEach(campo => (campo.aberta = true));

const bandeirasUsadas = tab => campos(tab).filter(campo => campo.flagged).length

export {
  criaTabMinas,
  cloneTab,
  campoAberto,
  explodiu,
  vitoria,
  mostraMinas,
  inverteBandeira,
  bandeirasUsadas
};
