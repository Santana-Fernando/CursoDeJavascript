function maiorMenor(array){
    let maior = 0
    let menor = 9999999999999
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        } 
        
        if(array[i] < menor) {
            menor = array[i]
        }
    }

    console.log(`Maior número ${maior}`)
    console.log(`Menor número ${menor}`)
}

maiorMenor([1, 2, 3, 4, 5, 6, 7,, 8, 9, 10])
