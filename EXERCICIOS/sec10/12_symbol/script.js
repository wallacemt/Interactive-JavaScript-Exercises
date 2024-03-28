class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca; 
        this.cor = cor;
    }
    latir(){
        console.log("AUUUU!!🐶")
    }
}
Cachorro.prototype.raca = "SRD"

let patas = Symbol();

Cachorro.prototype[patas] = 4


let pinscher = new Cachorro('Pinscher', "Caramelo")

pinscher.latir();

console.log(Cachorro.prototype.raca)
console.log(pinscher.raca)

//Acessando Symbol

console.log(Cachorro.prototype[patas])

console.log(pinscher[patas])