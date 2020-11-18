let valor //Não foi definida um valor
console.log(valor)

valor = null //não possui um valor
console.log(valor)
//console.log(valor.toString())erro

const produto = {}

produto.preco = { valor:25, a:{nome: 'fernando'}}
console.log(produto.preco.a)
produto.preco.valor = undefined

console.log(!produto.preco.valor)

produto.preco.valor = null

console.log(!!produto.preco.valor)