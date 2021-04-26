function diferenciar(array){
    let i = 0
    let p = 0

    for(let a of array){
        if(a % 2 == 0){
            p++
        } else {
            i++
        }
    }


    return `Ímpares: ${i} \nPares: ${p}`
}

console.log(diferenciar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))