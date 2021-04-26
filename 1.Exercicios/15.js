function revendedoraDeCarros(fruta){
    switch(fruta){
        case 'hatch' :
            return console.log('Compra efetuada com sucesso')
        case 'sedans':
            return console.log('Tem certeza que não prefere este modelo?')
        case 'motocicletas':
            return console.log('Tem certeza que não prefere este modelo?')
        case 'caminhonetes':
            return console.log('Tem certeza que não prefere este modelo?')
        default:
            return console.log('Fruta inválida')
    }
}

revendedoraDeCarros('hatch')