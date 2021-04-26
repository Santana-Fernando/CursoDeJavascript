function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

// const uno = new Carro
// uno.acelerar()
// console.log(uno.getVelocidadeAtual())


const uno = new Carro(300, 20)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log(typeof uno)