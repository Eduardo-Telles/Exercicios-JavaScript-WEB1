let N=prompt("Digite um número para descobrir sua sequencia de fibonacci");
    if(N>0){
        let contador=0
        let anterior=0
        let proximo=1
        for(let contador=0;contador<N;contador++){
            console.log(anterior)
            let guarda=anterior+proximo
            anterior=proximo
            proximo=guarda
        }
    }
