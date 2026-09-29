function apenasUnicos(lista) {
    let lista_nova = [];
    for(let valid = 0; valid < lista.length; valid++) {
        let contador = 0;
        for(let igual = 0; igual < lista.length; igual++) {
            if(lista[valid] === lista[igual]) {
                contador++;
            }
        }
        if(contador === 1) {
            lista_nova.push(lista[valid]);
        }
    }
    console.log(lista_nova);
}
let lista = [];
let qntd = prompt("Digite a quantidade de coisas que terá na lista: ");
for(let i = 0; i < qntd; i++) {
    let digito = prompt("Digite algo para a lista: ");
    if(isNaN(digito)) {
        digito = digito.toLowerCase();
    }
    lista.push(digito);
}
console.log(lista);
apenasUnicos(lista);