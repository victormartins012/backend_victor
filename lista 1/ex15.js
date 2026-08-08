const produtos = [
  { id: 1, nome: 'Pizza', preco: 110 },
  { id: 2, nome: 'Lanche', preco: 32 },
  { id: 3, nome: 'Vibrador', preco: 150 },
  { id: 4, nome: 'Relogio', preco: 350 },
  { id: 5, nome: 'Consolo', preco: 100 },
];

const produto3 = produtos.find(produto => produto.id === 3);
console.log(produto3);

const caros = produtos.filter(produto => produto.preco > 100);
console.log(caros);

const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

produtos.forEach(produto => {
  console.log(`${produto.nome} - R$ ${produto.preco}`);
});