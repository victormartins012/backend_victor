const aluno = {
    idade: 15,
    nome: "Pedro",
    cdd: "Cascavel",
    colegio: "Ceep",
};

console.log(`nome: ${aluno.nome}, Idade: ${aluno.idade}, cidade: ${aluno.cdd}, colegio: ${aluno.colegio},`);

aluno.idade = 16;

console.log(`idade: ${aluno.idade}`);
