const criaTabuleiro = (linhas, colunas) =>{
    return Array(linhas).fill(0).map((_, linha)=>{
        return Array(colunas).fill(0).map((_, coluna)=>{
            return{
                linha:linha,
                coluna:coluna,
                aberta:false,
                mina:false,
                flagged:false,
                exploded:false,
                pertoMinas:0
            }
        })
    })
}
