function operar(palavra){
    if("abc".includes(palavra)){
        palavra=2;
    }
    else if("def".includes(palavra)){
        palavra=3;
    }
    else if("ghi".includes(palavra)){
        palavra=4;
    }
    else if("jkl".includes(palavra)){
        palavra=5;
    }
    else if("mno".includes(palavra)){
        palavra=6;
    }
    else if("pqrs".includes(palavra)){
        palavra=7;
    }
    else if("tuv".includes(palavra)){
        palavra=8;
    }
    else if("wxyz".includes(palavra)){
        palavra=9;
    }
    return palavra;
}
let palavra;
let i=0;
do {
    palavra=prompt("Digite a string para transforma-la em número: ");
    if(isNaN(palavra)==true){
        palavra=palavra.toLowerCase();
        i++;
    }
} while (i<1);
const novapalavra=palavra.split("").map(operar).join("");
console.log(novapalavra);


