let A=Number(prompt("Digite um valor para A: "));
let B=Number(prompt("Digite um valor para B: "));
let C=Number(prompt("Digite um valor para C: "));
let Delta=B*B-4*A*C;
if (isNaN(A) || isNaN(B) || isNaN(C)){
    console.log("Você não digitou um Número!");
}
else{
    if (Delta<0){
        console.log("Essa equação não possui raízes reais");
    }
    else{
        let BhaskaraPos=(-B+(Delta**(1/2)))/(2*A);
        let BhaskaraNeg=(-B-(Delta**(1/2)))/(2*A);
        console.log("X1=",BhaskaraPos);
        console.log("X2=",BhaskaraNeg);
    }
}
