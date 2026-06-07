const compras = [
  { produto: "Arroz", preco: 25 },
  { produto: "Feijão", preco: 18 },
  { produto: "Carne", preco: 45 },
  { produto: "Biscoito", preco: 8 },
]

for (const percorrer of compras) {
    console.log(percorrer)
}

let TotalDaCompra = 0

for (const percorrer of compras) {
    TotalDaCompra = percorrer.preco + TotalDaCompra   
}

console.log(TotalDaCompra)
