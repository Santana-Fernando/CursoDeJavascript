const peso01 = 1.1

const peso02 = Number('2.0')

console.log(peso01, peso02)

console.log(Number.isInteger(peso01))
console.log(Number.isFinite(peso01))


const avaliacao01 = 9.457
const avaliacao02 = 6.44758

const total = avaliacao01 * peso01 + avaliacao02 * peso02
const media = total / (peso01 + peso02)

console.log(media)

console.log(typeof String)