
// function soma(a, b, c) {
//     a = a || 1
//     b = b || 1
//     c = c || 1

//     return a + b + c
// }

// console.log(soma(0, 0, 0))

function soma(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c)? 1 : c

    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))

console.log(typeof 0)