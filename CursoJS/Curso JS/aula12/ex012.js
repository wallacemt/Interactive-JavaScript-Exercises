 var agora = new Date()
 var hora = agora.getHours()
 console.log(`Agora são exatamente ${hora} horas.`)
 if(hora >= 6 && hora <= 12){
    console.log("BOM DIA!")
 }else if(hora >= 0 && hora <= 6){
    console.log("Boa Madrugada")
 }else if(hora <= 18){
    console.log("BOA TARDE!")
 }else{
    console.log("BOA NOITE")
 }