function calcularBhaskara (a, b, c) {
    let raizes = []
    if(a == 0){
        return console.log(`Não é possível fazer a 
        operação com o o expoente A zerado`)
    } else {
        let delta = calcularDelta(a, b, c)
        
        if(delta < 0){
            return console.log(`É impossível fazer esse cálculo com o Delta negativado`)
        } else {
            let x1 = ((-b) + Math.sqrt(delta))/2 * a
            raizes.push(x1)
            let x2 = ((-b) - Math.sqrt(delta))/2 * a
            raizes.push(x2)

            return raizes
        }
    }
}

function calcularDelta (a, b, c){
    let delta = ((b * b) - (4 * a * c))

    return delta
}

console.log(calcularBhaskara(4, 2, -6))