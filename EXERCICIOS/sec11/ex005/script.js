class Conta {
    constructor(saldoContaCorrente, saldoContaPoupança, jurosDaPoupança){
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupança =  saldoContaPoupança;
        this.jurosDaPoupança = jurosDaPoupança;
    }
    deposito(valor){
        this.saldoContaCorrente += valor;
    }
    saque(valor){
        this.saldoContaCorrente -= valor;
    }

    trasferirCP(valor){
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupança += valor;
    }
    trasferirCC(valor){
        this.saldoContaPoupança -= valor;
        this.saldoContaCorrente += valor;
    }
    jurosDeAniversario(valor){
        let juros = (this.saldoContaPoupança * this.jurosDaPoupança) / 100;
        this.saldoContaPoupança += juros
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2);
    }
}

let minhaConta = new Conta(1200, 4000, 1);

console.log(minhaConta)

minhaConta.saque(500)

console.log(minhaConta)

minhaConta.deposito(11200)

console.log(minhaConta)

minhaConta.trasferirCP(1200);

console.log(minhaConta);

minhaConta.jurosDeAniversario()

console.log(minhaConta)

let conta2 = new ContaEspecial(10000, 40000, 1)

console.log(conta2)

conta2.saque(8550)

console.log(conta2)

conta2.deposito(230000)

console.log(conta2)

conta2.jurosDeAniversario()

console.log(conta2)