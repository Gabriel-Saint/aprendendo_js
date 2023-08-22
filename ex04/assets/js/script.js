const pessoa1 = {
    nome: 'luiz', //atributos e metodos separam por virgulas
    sobrenome: 'Miranda',
    idade: 33,

    fala (){
        console.log(`A minha idade é ${
this.idade
        }.`);
    },
    aumentaIdade(){
        this.idade++;
    }


};


/*pessoa1.aumentaIdade();
pessoa1.fala();
pessoa1.aumentaIdade();
pessoa1.fala();
pessoa1.aumentaIdade();
pessoa1.fala();*/

const a = {
    nome: 'luiz',
    sobrenome: 'otavio'
};
const b = a;

a.nome ='joao';
console.log(a);const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
  };
  //const b = a;
  
  b.nome = 'João';
  console.log(a);
  console.log(b); // objeto so se torna muutavel se for passado como referencia b=a caso contrario não;