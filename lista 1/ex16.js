const alunos = [
  { nome: 'Victor', nota: 9.0 },
  { nome: 'Fabricio', nota: 4.1 },
  { nome: 'Kelvin', nota: 8.2 },
  { nome: 'Toddy', nota: 6.5 },
  { nome: 'Murilo', nota: 7.6 },
];

const boletim = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'
  };
});
console.log(boletim);

const aprovados = boletim.filter(aluno => aluno.situacao === 'Aprovado');
console.log(`Aprovados: ${aprovados.length}`);

const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
const media = somaNotas / alunos.length;
console.log(`Média da turma: ${media.toFixed(2)}`);