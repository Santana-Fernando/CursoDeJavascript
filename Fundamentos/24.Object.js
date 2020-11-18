const prod01 = {}

prod01.nome = 'celolar'
prod01.codigo = 1234567
prod01.local = 'Brasil'
prod01.caracteristicas = { 
    cor: 'preto',
    tamanho: '22 cm',
    eNovo: true
}
prod01['desconto'] = 0.06 // evite isso

console.log(prod01)

const prod02 = {
    nome: 'Notbook',
    modelo: 'i7 S145',
    valor: 4500,
    obj: {
        obj02:{
            nome: 'fernando'
        }
    }
}


console.log(prod02)

console.log(prod02.obj.obj02)