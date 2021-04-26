function calculadora(num01, operador, num02){
    switch(operador){
        case '+' :
            return Number(num01 + num02)
        case '-':
            return Number(num01 - num02)
        case '*':
            return Number(num01 * num02)
        case '/':
            return Number(num01 / num02)
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(9, '*', 3))