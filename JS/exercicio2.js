const produtos = [
  { nome: "Arroz", preco: 25, quantidade: 3 },
  { nome: "Feijão", preco: 18, quantidade: 2 },
  { nome: "Carne", preco: 45, quantidade: 4 },
  { nome: "Biscoito", preco: 8, quantidade: 1 },
  { nome: "Leite", preco: 12, quantidade: 6 },
  { nome: "Macarrão", preco: 6, quantidade: 5 },
]

const subTotal = produtos.map(function(produtos) {
    return produtos.preco * produtos.quantidade
})

console.log(subTotal)

const caros = produtos.filter(function(produtos) {
    return produtos.preco * produtos.quantidade >= 50
})

console.log(caros)

const total = produtos.reduce(function(acumulador, produtos) {
    acumulador = acumulador + produtos.preco * produtos.quantidade
    return acumulador
}, 0)

console.log(total)