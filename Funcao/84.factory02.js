function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        desconto: (((valor * 15) / 100))
    }
}

console.log(criarProduto("Sabonete", 40))
console.log(criarProduto("Sapato", 280))
console.log(criarProduto("Briquedo", 90))
console.log(criarProduto("Fone", 30))