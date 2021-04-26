function taxaDeCrescimento(tamanhosTaxas){
    let progressaoTaxa01 = tamanhosTaxas[0].tamanho
    let progressaoTaxa02 = tamanhosTaxas[1].tamanho

    let i = 0

    while(progressaoTaxa01 != progressaoTaxa02){
        progressaoTaxa01 = progressaoTaxa01 + tamanhosTaxas[0].taxa
        progressaoTaxa02 = progressaoTaxa02 + tamanhosTaxas[1].taxa
        
        i++
    }

    return `Essas crianças terão a mesma idade daqui ${i} anos`

    
}

console.log(taxaDeCrescimento([
    {
        tamanho: 120,
        taxa: 30
    },
    {
        tamanho: 150,
        taxa: 20
    }
]))