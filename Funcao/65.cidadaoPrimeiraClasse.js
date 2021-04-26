function fun01(params) {
    
}

// =================== função em array

const fun02 = function (params) {
    
}

const array = [function (a, b) { return a + b }, fun01, fun02]

//console.log(array[0](8, 9))

// função em objeto
const obj = {}

obj.falar = function(texticulo) { return texticulo}

console.log(obj.falar('Ferdenancha'))

// função em função

function invocar(fun) {
    fun()
}

function name(params) {
    console.log(params)
}

invocar(function (){
    console.log('Fernando')
})

// função dentro de função

function soma(obj) {
    return function (c) {
        console.log(obj.a + obj.b + c)
    }
}

const somasoma = soma({ a: 4, b: 3})

somasoma(4)
