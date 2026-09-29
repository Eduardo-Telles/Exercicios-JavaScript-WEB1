function maior(v1,v2){
    let temp=0;
    let temp2=0;
    for(let x=0;x<v1.length;x++){
        temp+=v1[x];
    }
    for(let z=0;z<v2.length;z++){
        temp2+=v2[z];
    }
    if(temp==temp2){
        return false;
    }
    else if(temp>temp2){
        return v1;
    }
    else{
        return v2;
    }
}
let v1=[];
let v2=[];
let qntd=prompt("Digite a qntd de items para o vetor 1: ");
let qntd2=prompt("Digite a qntd de items para o vetor 2: ")
let i=0;
let j=0;
do {
    let num=prompt("Digite um número para o vetor 1: ");
    if(!isNaN(num)){
        v1.push(Number(num));
        i++
    }
} while (i<qntd);
do {
    let num2=prompt("Digite um número para o vetor 2: ");
    if(!isNaN(num2)){
        v2.push(Number(num2));
        j++
    }
} while (j<qntd2);
console.log(maior(v1,v2));