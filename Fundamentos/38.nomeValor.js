const saudacao = 'Opa'

function exec (){
    const saudacao = 'falaaaaaaaaa'
    return saudacao
}

//Objetos são grupos aninhado de pares chave/valor

const client = {
    nome: 'Fernando',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(client)
