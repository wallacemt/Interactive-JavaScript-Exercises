num = prompt("Digite um Número: ");
let divisoes = 0


for(let i = 1; i <= num; i++){
    
    if(num % i ==0){
        divisoes++
    }
}

if(divisoes == 2){
    console.log(`N°${num} è primo!`)
}else{
    console.log(`N°${num} Não è primo!`)
}