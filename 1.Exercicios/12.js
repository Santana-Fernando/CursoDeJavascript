function fatorial(numero){
    let fatorial = 1
    for(let i = 1; i <= numero; i++){
       fatorial = fatorial * i
    }

    return fatorial
}

console.log(fatorial(4))

