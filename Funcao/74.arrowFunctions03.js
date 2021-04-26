// let compararComOThis = function (params) {
//     console.log(this === params)
// }

// //compararComOThis(global)

const obj = {}
// comparaComThis = compararComOThis.bind(obj)
// comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

//comparaComThisArrow(this)

let arrow = comparaComThisArrow.bind(obj)
arrow(module.exports)

