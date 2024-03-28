function recursao(n){//Un estrutura de repeticao com if e else chamando a funçao
    if(n - 1 <  2){
        console.log("Recurssão Parou!")
    }else if(n % 2 != 0){
        console.log("Numero Impar " + n)
        recursao(n - 1)
    }else{
        console.log("Numero par " + n)
        recursao(n - 2);
    }
}

recursao(39);

recursao(10);

recursao(51);
