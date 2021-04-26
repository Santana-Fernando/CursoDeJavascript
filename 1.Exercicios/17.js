function almento(salarioAtual, planoDeAlmento){
    switch(planoDeAlmento){
        case 'A' :
            return Number(salarioAtual + (10/100*salarioAtual))
        case 'B':
            return Number(salarioAtual + (15/100*salarioAtual))
        case 'C':
            return Number(salarioAtual + (20/100*salarioAtual))
        default:
            return 'Operação inválida'
    }
}

console.log(almento(1200, 'C'))