/*let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
*/
isAtivo = 1

console.log(!!isAtivo)

console.log('Verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo == 0))

console.log('\nFalsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = 'Ferdenantcha'
console.log(nome || 'desconhecido')