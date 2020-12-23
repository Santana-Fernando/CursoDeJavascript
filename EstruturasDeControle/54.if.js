function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


function thisIsTrue(valor){
    if(!!valor){
        console.log('É verdade ')
    }
}

thisIsTrue(true)
thisIsTrue(false)
thisIsTrue(-1)
thisIsTrue(' ')