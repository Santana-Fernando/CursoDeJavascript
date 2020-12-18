console.log(Math.ceil(6.1))

const obj01 = {}

obj01.nome = 'Fernando'
//obj01['nome'] = 'Bola'

console.log(obj01['nome'])

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec..')
    }
}

const obj02 = new Obj('cadeira')
const obj03 = new Obj('fernando ')
obj03.exec()