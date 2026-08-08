const alunos = [
    { id: 1, nome: "Kelvin", nota: 5.5 },
    { id: 2, nome: "Murilo", nota: 6.2 },
    { id: 3, nome: "Julio", nota: 4.2 },
    { id: 4, nome: "Fabricio", nota: 7.5 },
    { id: 5, nome: "Vinicius", nota: 9.2 }
];

const comSituacao = alunos.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(comSituacao);