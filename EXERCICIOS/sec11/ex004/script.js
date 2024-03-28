class Carro {
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }
    carroDirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }
    abastecerCarro(valor){
        this.gasolinaRestante += valor
    }
}

let meuCarro = new Carro("Porshe", "Preto", 100, 14)


console.log(meuCarro)
meuCarro.carroDirigir(400);

console.log(meuCarro)

meuCarro.abastecerCarro(120)
console.log(meuCarro)
meuCarro.carroDirigir()

