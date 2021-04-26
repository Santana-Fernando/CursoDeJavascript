/*const obj = {}

console.log(obj)


console.log(typeof Object, typeof new Object)

const obj = new Object
console.log(obj)


function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.25)
const p2 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Fernando', 50000, 4)
const f2 = criarFuncionario('Fernanda', 170000, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())

const filha = Object.create({})
filha.nome = "ANA"
console.log(filha)*/
const fromJSON = JSON.parse('{"info":"Sou um Json"}')

console.log(fromJSON.info)