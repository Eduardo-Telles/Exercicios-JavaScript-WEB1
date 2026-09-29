function multi_2(lista) {
    let indice=0;
    for(indice;indice<lista.length;indice++){
        lista.splice(indice,1,lista[indice]*2);
    }
    console.log(lista);
}
let lista=[];
let qntd=prompt("digite a qntd de itens pra lista: ");
let i=0;
do {
    let item=prompt("Digite um digito pra lista: ");
    if(isNaN(item)==false){
        lista.push(Number(item));
        i++;
    }
} while (i<qntd);
multi_2(lista);