function troca(vetorA, vetorB){
    let auxA = 0
    let auxB = 0
    console.log('\nVetor A antes:')
    console.log(vetorA)
    console.log('\nVetor B antes:')
    console.log(vetorB)
    for(let i = 0; i < vetorA.length; i++){
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }

    console.log('\nVetor A:')
    console.log(vetorA)
    console.log('\nVetor B:')
    console.log(vetorB)
}

troca([1, 2, 3],[3, 2, 1])