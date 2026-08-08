let produtos = [
    { id: 1, nome: "Porsche", preco: 550000 },
    { id: 2, nome: "Ferrari", preco: 1250000 },
    { id: 3, nome: "Lamborghini", preco: 2000000 },
    { id: 4, nome: "Mercedes", preco: 750000 }
];

console.log("--- Lista de Carros ---");

for (let i = 0; i < produtos.length; i++) {
    console.log(
        `ID: ${produtos[i].id} | Carro: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco.toFixed(2)}`
    );
}

produtos.push({ id: 5, nome: "BMW", preco: 125000 });

console.log(`\nNovo tamanho do array: ${produtos.length} produtos.`);