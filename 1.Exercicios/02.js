function averiguacao(l1, l2, l3){
    let equilatero = l1 == l2 && l2 == l3 && l3 == l1
    let escalendo = l1 !== l2 && l1 != l3 && l2 != l3

    if(escalendo){
        return `triângulo escalendo`
    }else if(equilatero){
        return `triângulo equilátero`
    }else {
        return `triângulo isoceles`
    }
}

console.log(averiguacao(8, 4, 9))