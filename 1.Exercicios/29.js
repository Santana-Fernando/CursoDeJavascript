function averiguarNumeros(array){
    let taNoIntervalo = 0
    let naoTaNoIntervalo = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 10 && array[i] <= 20){
            taNoIntervalo = taNoIntervalo + 1
        } else{
            naoTaNoIntervalo = naoTaNoIntervalo + 1
        }
    }

    console.log(`Estão no intervalo ${taNoIntervalo}`)
    console.log(`Não estão no intervalo ${naoTaNoIntervalo}`)
}

averiguarNumeros([1, 15, 8, 19, 20, 10, 17, 2, 3, 4, 5, 6])