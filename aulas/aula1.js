let x=document.querySelector("button");
x=x.parentElement;
x=x.parentElement;
x=x.parentElement;
x=x.nextElementSibling;
x=x.nextElementSibling;
let botao=document.querySelector("button");
console.log(x)
function tratarClique(e){
    console.log("Você clicou");
}
let botaopclique=document.querySelector("button");
botaopclique.addEventListener("click",tratarClique);

