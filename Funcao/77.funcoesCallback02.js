const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

//Sem callback

// let notasBaixas = []
// for(i in notas){
//     if(notas[i] < 7){
//         notasBaixas.push(notas[i])
//     }
// }

// console.log(notasBaixas)

// let notasBaixas = notas.filter(function (nota) {
//     return nota < 7
// })

// console.log(notasBaixas)
const filtro = nota => nota < 7

let notasBaixas = notas.filter(filtro)

console.log(notasBaixas)