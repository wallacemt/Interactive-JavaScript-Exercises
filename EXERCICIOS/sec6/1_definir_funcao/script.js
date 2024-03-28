function imprimirNoConsole(){
    console.log("Opa meu nobre")
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log(` O Numero è: ${num}`)
}
imprimirUmNumero(2003);

const numeroAleatorio = function(){
    console.log(Math.random().toFixed(2));
}

numeroAleatorio();