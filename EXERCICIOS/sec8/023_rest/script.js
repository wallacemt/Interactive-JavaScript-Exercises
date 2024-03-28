let num = 1;
let num1 = 5;
let num2 = 43;
let num3 = 66;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num, num2, num3);
console.log("pausa");
imprimirNumeros(num2, num3);
console.log('pausa');
imprimirNumeros(2,6,7,8,9,5,3,2,5,6,2,4,5);
