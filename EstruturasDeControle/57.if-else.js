Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Caso de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('recuperação')
    } else if(nota.entre(0, 4.99)){
        console.log('reprovado')
    } else {
        console.log('Invalide')
    }
}

imprimirResultado(10)
imprimirResultado(8.1)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado('fernando')