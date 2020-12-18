let a = 3

global.b = 234

console.log(this.a)
console.log(global.b)

console.log(module.exports === this)