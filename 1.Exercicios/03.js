function exponenciacao(base, expoente){
    let resultado = base
    for(let i = 0; i < (expoente-1); i++){
        resultado *= base
    }

    console.log(resultado)

}

exponenciacao(3, 3)
console.log(Math.pow(3, 3))