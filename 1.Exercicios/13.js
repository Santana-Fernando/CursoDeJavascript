function diasUteis(dia){
    switch(dia){
        case 7 :
            return 'Fim de semana'
        case 1 :
            return 'Fim de semana'
        case 2 :
            return 'Dia útil'
        case 3 :
            return 'Dia útil'
        case 4 :
            return 'Dia útil'
        case 5 :
            return 'Dia útil'
        case 6 :
            return 'Dia útil'
        default:
            return 'Dia inválido'
    }
}
console.log(diasUteis(4))