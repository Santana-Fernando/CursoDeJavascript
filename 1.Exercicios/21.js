function calcularPlano(idadeConveniado){

    let totalDoPlano = 0
    
    if(idadeConveniado < 10)
        totalDoPlano = 80
    else if(idadeConveniado >= 10 && idadeConveniado <= 30)
        totalDoPlano = 50
    else if(idadeConveniado > 30 && idadeConveniado <= 60)
        totalDoPlano = 95
    else if(idadeConveniado > 60)
        totalDoPlano = 130
        
    
    return 100 + totalDoPlano
}

console.log(calcularPlano(31))