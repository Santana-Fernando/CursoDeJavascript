function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        mensagem: erro.message,
        date: new Date
    }
    
}

function imprimirNomeGritando (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(err){
        tratarErroELancar(err)
    } finally {
        console.log('Fim')
    }
}

const obl = { name:'Fernando' }
imprimirNomeGritando(obl)