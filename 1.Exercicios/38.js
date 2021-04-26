function impares(i = 0, f = 100){
    let impares = []
    let inicio = 0
    let fim = 0

    if(i > f){
        fim = i
        inicio = f
    } else {
        inicio = i
        fim = f
    }

    for(let i = inicio; i < fim; i++){
        if(i % 2 != 0){
            impares.push(i)
        }
    }

    return impares
}

console.log(impares(15, 5))