function checarNumero(num){
    let number = Number(num)
    if(Number.isNaN(number)){
        alert("Por favor, digite apenas números.🐴☠")
    }
    else{
        return number;
    }
}

checarNumero(69)


let number = prompt("Digite um número");

checarNumero(number)

console.log(number)