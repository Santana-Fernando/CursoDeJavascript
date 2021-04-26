function positivoNegativo(array){
    let positivo = 0
    let negativo = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            positivo = positivo + 1
        } 
        
        if(array[i] < 0) {
            negativo = negativo + 1
        }
    }

    console.log(`Positivos: ${positivo}`)
    console.log(`Negativos: ${negativo}`)
}

positivoNegativo([-1, -2, -3, -4, 5, 6, 7, 8, 9, 10])
