let botoes=document.querySelectorAll('li > button');
for(let botao of botoes){
    botao.addEventListener('click',imprimeAbacaxi);
}
function imprimeAbacaxi(){
    let span=document.querySelector('ul > li > span')
    console.log(span);
}