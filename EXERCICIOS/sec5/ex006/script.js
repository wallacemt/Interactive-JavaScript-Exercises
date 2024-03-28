let idade = prompt("Qual sua idade");
let cnh = prompt("Você possui CNH? ");

if(cnh.charAt(0).toLowerCase() == 's'){
    cnh = true
}else{
    cnh = false
}

if(idade >= 18 && cnh == false){
    console.log(`Você tem ${idade} anos, mas não possui CNH, mas pode fazer.📨`)
}else if(idade >= 18 && cnh == true){
    console.log(`Você tem ${idade} anos, é tem CNH então ja pode comprar seu Porsche🏎`)
}else{
    console.log(`Você tem ${idade} anos é não tem CNH, Então até mais.🥱`)
}