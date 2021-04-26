function calcularMedia(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){

        total += array[i]
    }

    return total/array.length
}

console.log(calcularMedia([1, 2, 3, 4, 5]))