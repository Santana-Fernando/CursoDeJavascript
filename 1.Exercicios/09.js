// if nota < 40
//   if (nota - pegarMultiploDe5(nota) == 3) nota = pegarMultiploDe5(nota)
//   if (nota < 38) reprovado
//   else aprovado

/*pegarMultiploDe5(nota) {
    let novaNota = nota
    while(novaNota % 5 != 0){
        novaNota++
    }
     return novaNota
}*/

function averiguacaoDeNota(nota){
    if(nota < 40){
        if ((nota - pegarMultiploDe5(nota)) < 3) {
            nota = pegarMultiploDe5(nota)
        } else {
            return {Nota: nota, Situacao:'reprovado'}
        }

        if (nota < 38) {
           return{Nota: nota, Situacao:'reprovado'}
        }
        else {
            return {Nota: nota, Situacao:'aprovado'}
        }
    } else {
        return { Nota: pegarMultiploDe5(nota), Situacao: 'aprovado'}
    }
}

function pegarMultiploDe5(nota) {
    let novaNota = nota
    while(novaNota % 5 != 0){
        novaNota++
    }
    return novaNota
}

console.log(averiguacaoDeNota(84))