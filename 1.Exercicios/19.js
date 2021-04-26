function calcularContaDoPedido(idPedido, quantidade){
    switch(idPedido){
        case 100 :
            return 'Cachorro Quente R$' + Number(3 * quantidade)
        case 200:
            return 'Hambúrguer Simples R$' + Number(4 * quantidade)
        case 300:
            return 'Cheeseburguer R$' + Number(5.5 * quantidade)
        case 400:
            return 'Bauru R$' + Number(7.5 * quantidade)
        case 500:
            return 'Refrigerante R$' + Number(3.5 * quantidade)
        case 600:
            return 'Suco R$' + Number(2.8 * quantidade)
        default:
            'produto não existente'
    }
}

console.log(calcularContaDoPedido(100, 5))