//Funcao sem retorno

function imprimirSoma(num1, num2){
    console.log(`A soma é ${num1 + num2}`)
}

//imprimirSoma(2, 7)

// Funcao com retorno

function soma(num01 = 5, num02 = 1){
    return num01 + num02
}

console.log(soma())