const express = require('express')
const app = express()

app.use(express.json())

const produtos = [
  { id: 1, nome: "Arroz", preco: 25 },
  { id: 2, nome: "Feijão", preco: 18 },
  { id: 3, nome: "Carne", preco: 45 },
]

app.get('/ola', (req, res) => {
    res.json({mensagem: 'Olá Mundo'})
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(p => p.id === id)
    if (!produto) {
        res.status(404).json("Insira um ID que exista.")
        return
    }
    res.json(produto)
})

app.post('/produtos', (req, res) => {
    const id = produtos.length + 1
    
    const novoProduto = {
         id: id,
         nome: req.body.nome,
         preco: req.body.preco
}
    produtos.push(novoProduto)

    res.status(201).json(novoProduto)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})