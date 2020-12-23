function soBoaNoticia(nota){
    nota = Number(nota)
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia('Fernando')


function thisIsTrue(valor){
    if(!!valor){
        console.log('É verdade ')
    }
}