class Endereço{
    constructor(rua, bairro, cidade, estado ){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set mudarRua(novaRua){
        this.rua = novaRua
    }
    set mudarBairro(novoBairro){
        this.bairro = novoBairro
    }
    mudarCidade(novaCidade){
        this.cidade = novaCidade
    }
    mudarEstado(novoEstado){
        this.estado = novoEstado
    }
}
let meuEndereço = new Endereço("Senhor do BomFim", "Saramandaia", "Salvador", "BA")

console.log(meuEndereço);

meuEndereço.mudarRua = "Tranquedo Neves"

console.log(meuEndereço.rua)

meuEndereço.mudarBairro = "Musurunga"

console.log(meuEndereço.bairro)

meuEndereço.mudarCidade("Jacobina")

console.log(meuEndereço.cidade)

meuEndereço.mudarEstado("RJ")

console.log(meuEndereço.estado)

console.log(meuEndereço)
