const pessoa = { nome: 'João' }
pessoa.nome = 'Fernando'
/*
console.log(pessoa.nome)
//=================================
pessoa = { nome: 'Ana'}*/

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)