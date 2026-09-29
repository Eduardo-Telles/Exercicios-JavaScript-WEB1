let Num=Number(prompt("Digite a quantidade de números primos que quer: "));
let N=Number(Num)
if(isNaN(N)){
    console.log("Não é um número!")
}
else{
    if (N!=0){
        let numero=3
        let contador=1
        console.log(2)
        for(contador;contador<N;){
            let verifica=0
            for(let divisao=1;divisao<=numero;divisao++)
                if(numero%divisao==0){
                    verifica+=1
                } 
            if(verifica==2){
                console.log(numero)
                contador++
            }
            numero+=2
        }
    }
}