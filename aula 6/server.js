const express = require("express");
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Caneta Azul", preco: 3.90 },
    { id: 2, nome: "Caderno", preco: 25.90 }
];

let proximoId = 3;

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.json(produto);
});

app.post("/produtos", (req, res) => {
    const produto = {
        id: proximoId++,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(produto);
    res.status(201).json(produto);
});

app.put("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    produtos = produtos.filter(p => p.id !== id);
    res.json({ mensagem: "Produto removido com sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});