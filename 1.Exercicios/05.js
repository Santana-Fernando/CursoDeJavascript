const converterAMoeda = (valor) => {
    const formatar = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    })

    return formatar.format(valor)
}

console.log(converterAMoeda(0.30000000000000004))