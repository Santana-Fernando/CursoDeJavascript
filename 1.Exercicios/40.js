function notas(notas){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            console.log(notas[i], ' = D')

        }
        if(notas[i] >= 5 && notas[i] <= 6.9){
            console.log(notas[i], ' = C')

        }
        if(notas[i] >= 7 && notas[i] <= 8.9){
            console.log(notas[i], ' = B')

        }
        if(notas[i] >= 9 && notas[i] <= 10){
            console.log(notas[i], ' = A')
        }
    }
}

notas([6,7,5,9,3])