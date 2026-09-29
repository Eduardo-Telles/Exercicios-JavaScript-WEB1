let num=Number(prompt("Digite um valor para saber o MMC: "));
let num2=Number(prompt("Digite outro valor para saber o MMC entre eles: "));
for(let dividendo=2;;dividendo++){
    if(dividendo%num===0 && dividendo%num2===0){
        console.log(dividendo);
        break;
    }
}