function removeValores(num,lista){
    for(let i=0;i<lista.length;i++){
        if(lista[i]==num){
            for(let j=i;j<lista.length;j++){
                lista[j]=lista[j+1]
                lista.length--;
                i--;
            }
        }
    }
    return lista;
}
let lista=[];
do {
    let num=prompt("Digite um valor específico para não ter na lista: ");
    if(!isNaN(num)){
        num=(Number(num))
        i++
    }
} while (i<1);
let qntd=prompt("Digite a qntd de itens que a lista terá: ");
for(let i=0;i<qntd;i++){
    let item=prompt("Digite um item para a lista: ");
    if(isNaN(item)){
        item=item.toLowerCase();
        lista.push(item);
    }
    else{
        item=Number(item);
        lista.push(item);
    }
}
console.log(removeValores(num,lista));