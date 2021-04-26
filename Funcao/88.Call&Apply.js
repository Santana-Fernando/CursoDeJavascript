function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4556,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 15000, desc: 0.16}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.15, "R$"))
console.log(getPreco.apply(carro, [0.15, "R$"]))