function VerificarNumero(num){

    return new Promise((resolve, reject) => {
        if (num == 2){
            resolve("")
        }else{
            reject(new Error("Falhou"))
        }
    })
}


VerificarNumero(2)
VerificarNumero(4) 