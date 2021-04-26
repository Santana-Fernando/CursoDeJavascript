function operacoes(valor01, valor02){
    let operacoes = {
        soma: (valor01 + valor02),
        subtracao: (valor01 - valor02),
        divisao: (valor01/valor02),
        multiplicacao: (valor01 * valor02)
    }

    return operacoes
}

console.log(operacoes(8, 4))