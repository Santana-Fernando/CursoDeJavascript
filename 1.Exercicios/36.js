function multiplicacao(array){
    let resultado = []
    for(let i = 0; i < array.length; i++){
        let produto = 0
        produto = array[i] * i
        resultado.push(produto)
    }

    return resultado
}

function multiplicacaoCondicional(array){
    let resultado = []
    for(let i = 0; i < array.length; i++){
        let produto = 0
        if(array[i] > 5){
            produto = array[i] * i
            resultado.push(produto)
        }
    }

    return resultado
}

console.log(multiplicacaoCondicional([1, 5, 6 ,8 ,7]))