const botao=document.querySelector("button");
let i=0;

function apertou(e){
    i++;
    console.log("Eu fui apertado",i,"vezes")
}
botao.addEventListener("click",apertou);