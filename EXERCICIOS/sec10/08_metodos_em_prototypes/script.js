function Cachorro(raca, patas, cor){
    this.raca = raca,
    this.patas = patas,
    this.cor = cor
}

Cachorro.prototype.uivar = function() {
    console.log("AUUUUUUUU!!!🐺")
}

Cachorro.prototype.latir = function(){
    console.log("E O PIX?🐶")
}

let husky = new Cachorro('HUSKY', 4, "Branco")

husky.uivar();
husky.latir();