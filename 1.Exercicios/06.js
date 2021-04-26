const jurosSimples = (CapitalInicial, taxaDeJuros, tempoDeAplicacao) => {
    let montante = 0
    let jSimples = 0

    jSimples = (CapitalInicial * taxaDeJuros * tempoDeAplicacao)
    montante = CapitalInicial + jSimples

    return montante


}

const jurosCompostos = (CapitalInicial, taxaDeJuros, tempoDeAplicacao) => {
    let montante = jurosSimples(CapitalInicial, taxaDeJuros, tempoDeAplicacao)

    console.log('O montante é igual a ' + montante)

    let jurosCompostos = montante - CapitalInicial

    return jurosCompostos
}

console.log('O resultado geral e juros compostos é \n')
console.log(jurosCompostos(5000, 0.4, 8))

