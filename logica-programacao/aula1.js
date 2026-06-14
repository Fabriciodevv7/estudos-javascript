const produto = "Camiseta"
const preco = 30
const percentualDesconto = 10
const valorDoDesconto = preco * (percentualDesconto / 100)
const precoFinal = preco - valorDoDesconto

console.log("Produto:", produto)
console.log("valorDoDesconto: R$",valorDoDesconto)
console.log("Preço Final: R$",precoFinal)