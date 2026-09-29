function palindromos(lista) {
    let lista_nova=[];
    for(let i=0;i<lista.length;i++){
        let letra;
        for(letra=0;letra<lista[i].length/2;letra++){
            let letra2=lista[i].length-1-letra;
            if(lista[i][letra]!=lista[i][letra2]){
                break
            }
        }
        if(letra>=lista[i].length/2){
            lista_nova.push(lista[i]);
        }
    }
    console.log(lista_nova);
}
let lista=[];
let qntd=prompt("Digite a quantidade de palavras que quer testar se são palindromos: ");
for(qntd;qntd!=0;qntd--){
    let palavra=prompt("Digite uma palavra: ");
    palavra=palavra.toLowerCase();
    lista.push(palavra);
}
palindromos(lista);
