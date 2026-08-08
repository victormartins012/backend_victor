const express = require("express");
const app = express();

app.use(express.json());

app.get("/sobre", (req, res) => {
    res.json({
        nome: "Victor",
        disciplina: "Back-End",
        ano: "2c Ensino Médio",
    });
});

const produtos = [
    { id: 1, nome: "Caneta Azul", preco: 3.90 },
    { id: 2, nome: "Caderno", preco: 25.00 },
    { id: 3, nome: "Mochila", preco: 150.00 },
    { id: 4, nome: "Notebook", preco: 2500.00 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/status", (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor funcionando normalmente!"
    });
});

app.get("/produtos/caros", (req, res) => {
    const produtosCaros = produtos.filter(produto => produto.preco > 100);

    res.json(produtosCaros);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});