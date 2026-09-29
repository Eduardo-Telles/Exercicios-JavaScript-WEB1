function diferenca(v1,v2){
    for(let i=0;i<v2.length;i++){
        if(v1.includes(v2[i])){
            for(let j=0;j<v1.length;j++){
                if(v1[j]==v2[i]){
                    for(let x=j;x<v1.length-1;x++){
                        v1[x]=v1[x+1]
                    }
                    v1.length--;
                    j--;
                }
            }
        }
    }
    return v1;
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
console.log(diferenca(v1,v2));