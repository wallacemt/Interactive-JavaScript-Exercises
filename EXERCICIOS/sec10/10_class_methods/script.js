class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca; 
        this.cor = cor;
    }
    latir(){
        console.log("AUUUU!!🐶")
    }
}
Cachorro.prototype.patas = 4

let pinscher = new Cachorro('Pinscher', "Caramelo")
 
console.log(pinscher.patas);
pinscher.latir();