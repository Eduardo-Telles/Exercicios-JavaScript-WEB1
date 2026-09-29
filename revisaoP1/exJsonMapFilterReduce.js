const alunos = [
  {
    nome: "Ana Pereira",
    semestre: 1,
    notas: [8.5, 7.0, 9.2]
  },
  {
    nome: "Carlos Souza",
    semestre: 2,
    notas: [6.5, 7.8, 8.0, 5.9]
  },
  {
    nome: "Mariana Costa",
    semestre: 3,
    notas: [9.1, 8.7]
  },
  {
    nome: "Lucas Almeida",
    semestre: 4,
    notas: [7.5, 6.8, 8.2, 7.9, 9.0]
  },
  {
    nome: "Fernanda Lima",
    semestre: 2,
    notas: [5.5, 6.0, 7.2]
  },
  {
    nome: "Rafael Martins",
    semestre: 5,
    notas: [8.8, 9.3, 7.6]
  },
  {
    nome: "Juliana Rocha",
    semestre: 1,
    notas: [6.2, 7.4]
  },
  {
    nome: "Pedro Henrique",
    semestre: 3,
    notas: [9.0, 8.5, 8.7, 9.4]
  }
];
let vet=alunos.filter(alunos=>{let media=alunos.notas.reduce((soma,nota)=>soma+nota,0)/alunos.notas.length;
  return media>=6;
})
.map(aluno=>aluno.nome);
console.log(vet);
let vet2=alunos.map(aluno=>{let media=aluno.notas.reduce((soma,nota)=>soma+nota,0)/aluno.notas.length;
  return {
    semestre: aluno.semestre,
    reprovado: media<6
  };
})
let reprovados=vet2.filter(aluno=>aluno.reprovado===true);
let resultado=reprovados.reduce((acumulador,aluno)=>{
  acumulador[aluno.semestre-1]=(acumulador[aluno.semestre-1]||0)+1;
  return acumulador;
},[0,0,0,0,0]);
console.log(resultado);
let maiores=alunos.map(aluno=>{
  let maior=aluno.notas.reduce((maior,nota)=>{
    if(maior<nota){
      maior=nota;
    }
    return maior;
  });
  return{
    nome:aluno.nome,
    maiorNota:maior
  };
})
let maiorNot=maiores.reduce((maior,aluno)=>{
  if(aluno.maiorNota>maior.maiorNota){
    maior=aluno;
  }
  return maior;
})
console.log(maiorNot.nome);
let listaObjetos=alunos.map(aluno=>{
  let media=aluno.notas.reduce((soma,nota)=>soma+nota,0)/aluno.notas.length;
    return{
      nome:aluno.nome,
      semestre:aluno.semestre,
      media:media
    };
})
let result = [1, 2, 3, 4, 5].map(semestre => {

    let alunosSemestre = listaObjetos.filter(aluno =>
        aluno.semestre === semestre
    );

    return alunosSemestre.reduce((maior, aluno) => {

        if (aluno.media > maior.media) {
            maior = aluno;
        }

        return maior;

    });
});

console.log(result);
