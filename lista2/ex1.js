function primos(qntd) {
    for(let i=0;qntd!=0;i++){
        if (i==1 || i==2){
                console.log(i);
                qntd--
            }
        else{
            for(let j=2;j<i;j++){
            if(i%j==0){
                break
            }
            else if(j==i-1){
                console.log(i);
                qntd--
            }
            
        }
        } 
    }
}
let qntd=prompt("Digite a quantidade de números primos que vc queira: ");
primos(qntd);
