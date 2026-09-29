let botoes=document.querySelectorAll('li > button');
for(let botao of botoes){
    botao.addEventListener('click',imprime);
}
function imprime(e){
    console.log(e.target.previousElementSibling);
}
