function valorFinal (valor) {
    if (valor >= 300) {
        console.log ("Você recebeu 15% de desconto")
        return valor - (valor * 0.15)
        
    }
    else if (valor >= 100) {
        console.log ("Você recebeu 10%¨de desconto")
        return valor - (valor * 0.10)
        
    }
    else {
        console.log("Infelizmente, você não tem descontos.")
        return valor
    }
}

console.log(valorFinal(320))
console.log(valorFinal(70))
console.log(valorFinal(65))