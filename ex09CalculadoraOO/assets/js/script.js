//Calculadora

class Calculadora {
    constructor(n1, n2){
        this.n1 = n1;
        this.n2 = n2;
    }
    somar(){
        console.log(`O valor da soma é: ${(this.n1+this.n2).toFixed(2)}`);
    }
    subtrair(){
        console.log(`O valor da subtração é: ${(this.n1-this.n2).toFixed(2)}`);
    }
    multiplicar(){
        console.log(`O valor da multiplicação é: ${(this.n1*this.n2).toFixed(2)}`);
    }
    dividir(){
        if(this.n2 === 0){
            console.log(`Não é possivel realizar divisão por zero!`);
        }else{
            console.log(`O valor da divisão é: ${(this.n1/this.n2).toFixed(2)}`);
        }
    }

}

calculadora1 = new Calculadora(10, 0);
calculadora1.dividir();