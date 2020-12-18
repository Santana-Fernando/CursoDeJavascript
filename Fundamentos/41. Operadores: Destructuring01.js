const pessoa = {
    nome: 'fernando',
    idade: 21,
    endereco:{
        logradouro: 'rua 4',
        numero: 1000
    }
}

let { nome, idade, endereco:{logradouro} } = pessoa

console.log(logradouro)