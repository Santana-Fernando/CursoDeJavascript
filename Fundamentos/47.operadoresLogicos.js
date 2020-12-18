function compras(trabalho01, trabalho02){
    const comprarSorvete = trabalho01 || trabalho02
    const comprarTV50 = trabalho02 && trabalho02
    const comprarTV32 = trabalho01 != trabalho02
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
