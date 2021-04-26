const produto = new Object
produto.nome = 'Cadeira'
produto['Marca'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Fernando',
        idade: 21,
        endereco:{
            logradouro: 'Rua a',
            numero: 123
        },
        condutores: [
            {
                nome: 'carlos',
                idade: 18
            },
            {
                nome: 'Tereza',
                idade: 23
            }
    
        ]
    }
}


console.log(carro.proprietário)