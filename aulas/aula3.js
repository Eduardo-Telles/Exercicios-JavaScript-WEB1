let botoes=document.querySelectorAll('li > button');
for(let botao of botoes){
    botao.addEventListener('click',()=>{
        console.log(botao.previousElementSibling);
});
}
