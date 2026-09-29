//[id, nome, pago|nao-pago, [[nome item, valor item, tipo item], ...]]
const pedidos = [
    [1, "Alice", true, [["Teclado Mecânico", 300, "Periféricos"], ["Mouse Gamer", 200, "Periféricos"]]],
    [2, "Bruno", false, [["Monitor 27''", 1500, "Monitores"]]],
    [3, "Carla", true, [["Notebook i7", 4800, "Computadores"]]],
    [4, "Daniel", true, [["Cadeira Gamer", 1200, "Móveis"], ["Mousepad XL", 100, "Acessórios"]]],
    [5, "Eduarda", true, [["Monitor Ultrawide", 2500, "Monitores"], ["Suporte para Monitor", 300, "Acessórios"]]],
    [6, "Fernando", true, [["Placa de Vídeo RTX 4060", 3200, "Hardware"]]],
    [7, "Gabriela", false, [["Impressora", 800, "Periféricos"]]],
    [8, "Henrique", true, [["Gabinete RGB", 600, "Hardware"], ["Fonte 750W", 700, "Hardware"]]],
    [9, "Isabela", true, [["SSD 1TB", 900, "Armazenamento"], ["Memória RAM 16GB", 500, "Hardware"]]],
    [10, "João", true, [["Headset Sem Fio", 650, "Periféricos"]]]
];
function operar(pessoa){
    let valores=pessoa[3].map(function (item){
        return item[1];
    });
    let total=valores.reduce(function (soma,valor){
        return soma+valor;
    },0);
    return pessoa[1]+" total comprado: "+total;
}
let nome_tot_comp=pedidos.map(operar);
console.log(nome_tot_comp);
const todosProdutos = pedidos.reduce(function (acumulador, pedido) {

    return acumulador.concat(pedido[3]);

}, []);


const produtosUnicos = todosProdutos.reduce(function (acumulador, produto) {

    const existe = acumulador.filter(function (item) {
        return item[0] === produto[0];
    });

    if (existe.length === 0) {
        return [...acumulador, produto];
    }

    return acumulador;

}, []);


const produtosOrdenados = produtosUnicos.reduce(function (acumulador, produto) {

    const maisCaros = acumulador.filter(function (item) {
        return item[1] >= produto[1];
    });

    const maisBaratos = acumulador.filter(function (item) {
        return item[1] < produto[1];
    });

    return [...maisCaros, produto, ...maisBaratos];

}, []);
console.log(produtosOrdenados);
let verif_pagamento=pedidos.filter(function (pago){
    return pago[2]==true;
}).map(function(produtos){
    return produtos[3];
}).map(function(ganho){
    return ganho.map(function (dinheiro){
        return dinheiro[1];
    }).reduce(function(acumulador,num){
        return acumulador+num;
    },0);

}).reduce(function(acumulador,num){
        return acumulador+num;
    },0);

console.log(verif_pagamento);
let lista_devedores_qntd=pedidos.filter(function (deve){
    return deve[2]==false;
}).map(function (valor){
    return [valor[1],valor[3]];
}).map(function(valor){
    return [valor[0],...valor[1].map(function (deve){
        return deve[1];
    })]
});
console.log(lista_devedores_qntd);
