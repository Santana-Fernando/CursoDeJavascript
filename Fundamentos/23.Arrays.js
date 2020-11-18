const valores = [7.7, 8.4, 6.2, 8.3]
valores[4] = 10
console.log(valores[0], valores[4])
console.log(valores)

console.log(valores.length)

valores.push({id: 1}, false, null, 'teste', 8.7)

console.log(valores)
console.log(valores.length)

valores.pop()

console.log(valores)
console.log(valores.length)

delete valores[0]
console.log(valores)
console.log(valores.length)

console.log(typeof valores)