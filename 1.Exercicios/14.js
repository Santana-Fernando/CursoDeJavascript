function frutaria(fruta){
    switch(fruta){
        case 'Maçã' :
            return console.log('Não temos essa fruta aqui')
        case 'Kiwi':
            return console.log('Estamos com escassez de kiwis')
        case 'Melancia':
            return console.log('Aqui está, 3 reais o quilo')
        default:
            return console.log('Fruta inválida')
    }
}

frutaria('banana')