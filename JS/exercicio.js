const produtos = [
  { nome: "Arroz", preco: 25, quantidade: 3 },
  { nome: "Feijão", preco: 18, quantidade: 2 },
  { nome: "Carne", preco: 45, quantidade: 4 },
  { nome: "Biscoito", preco: 8, quantidade: 1 },
]

function calcularSubTotal (produtos) {
    return (produtos.preco * produtos.quantidade)
}

function aplicarDesconto (desconto) {
    if(desconto >= 100) {
        console.log ("Você recebeu 10% de desconto")
        return desconto - (desconto * 0.10)
    }
    else {
        console.log("Infelizmente, você não tem descontos.")
        return desconto
    }
}

let total = 0

for(const percorrer of produtos) {
    const subTotal = calcularSubTotal(percorrer)
    const descontoFinal = aplicarDesconto(subTotal)

    total = descontoFinal + total

    console.log(percorrer.nome, "Subtotal: ", subTotal, "Com Desconto: ", descontoFinal)
}

console.log ("Preço total da compra é: ", total)

