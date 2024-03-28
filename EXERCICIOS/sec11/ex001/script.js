class Conta{
    constructor(saldo){
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo +=  valor
    }
    sacar(valor){
        this.saldo -=  valor
    }
}

let conta = new Conta(3876)

conta.depositar(2000)
console.log(conta.saldo)
conta.sacar(150)
console.log(conta.saldo)