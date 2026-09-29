function somapares(qntd) {
    let contador=0;
    let soma=0;
    for(let i=0;contador<qntd;i+=2){
        soma=soma+i
        contador++;
    }
    return soma;
}
let qntd=prompt("Digite a qntd de pares que iremos somar: ");
console.log(somapares(qntd));