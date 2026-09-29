function uniao(v1,v2){
    new_vet=[];
    for(let i=0;i<v1.length;i++){
        if(new_vet.includes(v1[i])==false){
            new_vet.push(v1[i])
        }
    }
    for(let j=0;j<v2.length;j++){
        if(new_vet.includes(v2[j])==false){
            new_vet.push(v2[j])
        }
    }
    return new_vet;
}
let v1=[];
let v2=[];
let qntd=prompt("Digite a qntd de items para o vetor 1: ");
let qntd2=prompt("Digite a qntd de items para o vetor 2: ")
for(let i=0;i<qntd;i++){
    let item=prompt("Digite algo para o vetor 1: ");
    if(isNaN(item)==true){
        item=item.toLowerCase();
    }
    v1.push(item);
}
for(let i=0;i<qntd2;i++){
    let item2=prompt("Digite algo para o vetor 2: ");
    if(isNaN(item2)==true){
        item2=item2.toLowerCase();
    }
    v2.push(item2);
}
console.log(uniao(v1,v2));