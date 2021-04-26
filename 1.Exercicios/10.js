function divisivelPor3(numero){
    if(Math.round(numero) % 3 !== 0 ){
        return false
    } else {
        return true
    }
}

console.log(divisivelPor3(8.6))