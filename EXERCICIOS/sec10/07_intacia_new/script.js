function Cachorro(raca, patas, cor){
    this.raca = raca,
    this.patas = patas,
    this.cor = cor,
    this.uivar = function() {
        console.log("AAUUUUUUUUUUUUUUUUUU!!!!!🐺")
    }
}

let husky = new Cachorro('HUSKY', 4, "Branco")
console.log(husky)
husky.uivar();