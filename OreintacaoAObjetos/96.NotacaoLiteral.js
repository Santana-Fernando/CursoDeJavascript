const a = 1
const b = 2
const c = 3

const obj = {a, b, c}

console.log(obj)

const nome = 'Nota'
const valor = 9.77

const obj3 = {}

obj3[nome] = valor

console.log(obj3)

const obj5 = {
    func: function() {

    },
    nomePessoa(nome) {
        console.log(nome)
    }
}

obj5.nomePessoa('Fernando')