function pa(n, a, r){
    let progrssao = []
    let soma = a
    for(let i = 0; i < n; i++){
        soma = soma + r
        progrssao.push(soma)
    }

    return progrssao
}

function pg(n, a, r){
    let progrssao = []
    let produto = a
    for(let i = 0; i < n; i++){
        produto = produto * r
        progrssao.push(produto)
    }

    return progrssao
}


console.log(pg(10, 1, 2))