const fabricantes = ['Ford', 'fiat', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))