class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca; 
        this.cor = cor;
    }
    latir(){
        console.log("AUUUU!!🐶")
    }
    get getCor(){
        return this.cor
    }
    set setCor(cor){
        this.cor = cor
    }
}
let pastor = new Cachorro("Pastor Alemao", "Sem cor")

console.log(pastor)

pastor.setCor = "Marron"
console.log(pastor.getCor);