function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma(1.1, 2.1, "Fernando"))


console.log(soma('fernando','é','lindo'))