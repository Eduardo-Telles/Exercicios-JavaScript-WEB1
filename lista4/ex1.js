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
let vet_aprovados=[];
for(let pessoa of alunos){
    let contador=0;
    let soma=0;
    for(let notas of pessoa.notas){
        let nota_atual=notas;
        soma+=nota_atual;
        contador++;
    }
    if(soma/contador>=6){
        vet_aprovados.push(pessoa);
    }
}
let vet_rep_pSemestre=[];

for (let semestre_atual=1;semestre_atual<6;semestre_atual++){
  let reprovados=0;
  for(let pessoa of alunos){
      let soma=0;
      let contador=0;
      if(pessoa.semestre==semestre_atual){
        for(let nota of pessoa.notas){
          soma+=nota;
          contador++;
        }
        if(soma/contador<6){
          reprovados+=1
        }
    }
  }
  vet_rep_pSemestre.push(reprovados);
}
let maior_nota=0;
for(let pessoa of alunos){
  for(let nota of pessoa.notas){
    if(nota>maior_nota){
      maior_nota=nota;
    }
  }
}
let lista_objetos=[];
for(let semestre_atual=1;semestre_atual<6;semestre_atual++){
  let maior_media=0;
  let melhor_pessoa;
  for(let pessoa of alunos){
    if(pessoa.semestre==semestre_atual){
      let soma=0;
      let contador=0;
      for(let nota of pessoa.notas){
        soma+=nota;
        contador++;
      }
      let media_atual=soma/contador;
      if(maior_media<media_atual){
        maior_media=media_atual;
        melhor_pessoa=pessoa;
      }
    }
  }
  lista_objetos.push(melhor_pessoa);
}
for(let pessoa of alunos){
  let soma=0;
  let contador=0;
  for(let nota of pessoa.notas){
    soma+=nota;
    contador++;
  }
  let media=soma/contador;
  pessoa.Média=media;
}
console.log(vet_aprovados);
console.log(vet_rep_pSemestre);
console.log(maior_nota);
console.log(lista_objetos);
console.log(alunos);