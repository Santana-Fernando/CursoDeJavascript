const pessoa = {
    saldacao: 'Bom Dia',
    falar(){
        console.log(this === pessoa)
    }
}

const falar = pessoa.falar.bind(pessoa)
falar()