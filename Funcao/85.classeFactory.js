class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Fernando")
p1.falar()


const Pessoa02 = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = Pessoa02('Cassia')
p2.falar()