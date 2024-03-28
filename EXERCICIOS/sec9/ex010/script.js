let calculadora = {
    somar: function(a, b){
        console.log(`A Soma de ${a} + ${b} é `  + (a + b))        
    },
    subtrair: function(a, b){
        if(a > b){
            console.log(`A subtração de ${a} - ${b}  é ` + (a - b))
        }else{
            console.log(`A subtração de ${b} - ${a} é ` + (b - a))
        }
    },
    multiplicar: function(a, b){
        console.log(`A multiplicação de ${a} x ${b} é  ` + (a * b))
    },
    dividir: function(a, b){
        console.log(`A Divisão de ${a} / ${b} é ` + (a / b))
    }
}
calculadora.somar(2,2)
calculadora.subtrair(5,4)
calculadora.multiplicar(7, 9)
calculadora.dividir(320, 5)