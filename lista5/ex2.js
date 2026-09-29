function adicionarf(e){
    let string=(prompt("digite uma string"));
    let achou=false;
    for(let i=0;i<lista.length;i++){
        if(lista[i]==string){
            achou=true;
        }
    }
    if(achou==false){
        lista.push(string);
        console.log(lista);
    };
}
function existef(e){
    let string=prompt("Digite uma string para saber se ela existe na lista");
    for(let i=0;i<lista.length;i++){
        if(lista[i]==string){
            console.log("Existe na Lista")
            return 0;
        }
    }
    console.log("Não Existe na Lista")
}
function deletarf(e){
    let texto=prompt("Digite o que voce quer apagar exatamente: ");
    let achou=false;
    for(let i=0;i<lista.length;i++){
        if(texto==lista[i]){
            lista.splice(i,1);
            console.log(lista);
            achou=true;
            break;
        }
    }
    if(achou==false){
        alert("Elemento Não encontrado!");
    }
}
function imprimirf(e){
    for(let i=0;i<lista.length;i++){
        for(let j=0;j<lista.length-1;j++){
            let temp;
            if(lista[j]>lista[j+1]){
            temp=lista[j];
            lista[j]=lista[j+1];
            lista[j+1]=temp;
        }
        }
    }
    console.log(lista);
}
function limparf(e){
    lista.splice(0,lista.length);
    console.log(lista);
}
let lista=[];
let adicionar=document.querySelector("button");
let existe=adicionar.nextElementSibling;
let remover=existe.nextElementSibling;
let imprimir=remover.nextElementSibling;
let limpar=imprimir.nextElementSibling;
adicionar.addEventListener("click",adicionarf);
existe.addEventListener("click",existef);
remover.addEventListener("click",deletarf);
imprimir.addEventListener("click",imprimirf);
limpar.addEventListener("click",limparf);
