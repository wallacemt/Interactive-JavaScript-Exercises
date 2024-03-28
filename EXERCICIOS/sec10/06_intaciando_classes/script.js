function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("AUUU!!🐺")
    }
    return cachorro;
};

let rusky = criaCachorro("rusky", 4, "branco puro")

console.log(rusky);
rusky.latir();