const produtos = [
    { id: 1, nome: "Caneta Azul", preco: 3.90 },
    { id: 2, nome: "Caneta Preta", preco: 3.50 },
    { id: 3, nome: "Caneta Vermelha", preco: 2.50 },
    { id: 4, nome: "Caneta Premium Pro Max", preco: 500 }
];

const produtoEncontrado = produtos.find(p => p.id === 3);
console.log(`Produto encontrado: ${produtoEncontrado.nome}`);

const produtosCaros = produtos.filter(p => p.preco > 50);
console.log(produtosCaros);