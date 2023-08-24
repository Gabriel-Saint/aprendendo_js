//classe = função construtora

//superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {

        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function (valor) {
    console.log(`Agencia/conta: ${this.agencia}/ ${this.conta}| Saldo: R$:${this.saldo.toFixed(2)} `);
};

const conta1 = new Conta(4324, 2215, 1000);
conta1.sacar(1000);
//console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite) {

    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
   
    if ((this.saldo + this.limite) < valor) {

        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
};

function ContaPoupanca(agencia, conta, saldo) {

    Conta.call(this, agencia, conta, saldo);
    
}

ContaPoupanca.prototype = Object.create(Conta.prototype);