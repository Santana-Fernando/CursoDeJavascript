const pessoa = { 
    nome: 'Fernando',
    idade: 21,
    peso: 80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave, valor)
});


console.log(Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
}))

pessoa.dataNascimento = '12/04/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const obj = {a: 1}

/*const r = Object.assign(pessoa, obj)
console.log(r)*/
Object.freeze(pessoa)
pessoa.nome = 'Jerondiolina'
console.log(pessoa)