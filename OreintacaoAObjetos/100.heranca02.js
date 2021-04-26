//===
Object.prototype.att0 = "z"
const avo = {
    att1: "a"
}

const pai = {
    __proto__: avo, att2: 'b'
}
const filho = {__proto__: pai, att3: 'c'}

console.log(filho.att0, filho.att1, filho.att2, filho.att3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(400)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())