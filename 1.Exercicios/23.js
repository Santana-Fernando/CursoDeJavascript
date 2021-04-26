function calcularNota(notas){
    let maiorNota = 0
    let notasMedias = 0
    for(let nota of notas){
        if(nota > maiorNota){
            maiorNota = nota
        }
    }

    notasMedias = notas.filter(n => {
        if(n !== maiorNota){
            return n
        }
    })

    let mediaPonderada = (maiorNota * 4 + notasMedias[0] * 3 + notasMedias[1] * 3) / (4 + 3 + 3)

    return mediaPonderada


    
}

console.log(calcularNota([2, 1, 1]))