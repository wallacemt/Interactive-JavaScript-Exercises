function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("Parametro nome precisa ser string(texto)")
    }else{
        console.log(`Olá ${nome}`)
    }
}

saudacao("Sergio")
saudacao(54)